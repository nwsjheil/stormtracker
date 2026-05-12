import requests
import gzip
import shutil
import subprocess
import time  # New import for sleep
from pathlib import Path

URL = "https://mrms.ncep.noaa.gov/2D/RadarOnly_QPE_01H/MRMS_RadarOnly_QPE_01H.latest.grib2.gz"

out = Path("output").resolve()
out.mkdir(exist_ok=True)

gz = out / "mrms.grib2.gz"
grib = out / "mrms.grib2"
tif = out / "mrms_float32.tif"
warp_tif = out / "mrms_3857.tif"
cog = out / "mrms_1h_qpe_cog.tif"

# ---------------------------------------------------
# DOWNLOAD & DECOMPRESS (WITH RETRY)
# ---------------------------------------------------
max_retries = 5
retry_delay = 30  # seconds
success = False

attempt = 1
while attempt <= max_retries:
    try:
        print(f"Attempt {attempt}: Downloading MRMS...")
        r = requests.get(URL, stream=True, timeout=120)
        r.raise_for_status()

        with open(gz, "wb") as f:
            shutil.copyfileobj(r.raw, f)

        print("Decompressing...")
        with gzip.open(gz, "rb") as f_in:
            with open(grib, "wb") as f_out:
                shutil.copyfileobj(f_in, f_out)
        
        # If we reach here without an EOFError or Request error, break the loop
        success = True
        break

    except (requests.exceptions.RequestException, EOFError, OSError) as e:
        print(f"Error on attempt {attempt}: {e}")
        if attempt < max_retries:
            print(f"Retrying in {retry_delay} seconds...")
            time.sleep(retry_delay)
        else:
            print("Max retries reached. Exiting.")
            exit(1)
    attempt += 1

# ---------------------------------------------------
# STEP 1: GRIB → FLOAT32 GeoTIFF
# ---------------------------------------------------
print("Creating Float32 GeoTIFF...")
subprocess.run([
    "gdal_translate",
    "-of", "GTiff",
    "-ot", "Float32",
    "-a_srs", "EPSG:4326",
    str(grib),
    str(tif)
], check=True)

# ---------------------------------------------------
# STEP 2: WARP
# ---------------------------------------------------
print("Warping to EPSG:3857...")
subprocess.run([
    "gdalwarp",
    "-s_srs", "EPSG:4326",
    "-t_srs", "EPSG:3857",
    "-r", "near",
    "-dstnodata", "-9999",
    str(tif),
    str(warp_tif)
], check=True)

# ---------------------------------------------------
# STEP 3: COG
# ---------------------------------------------------
print("Building COG...")
subprocess.run([
    "gdal_translate",
    "-of", "COG",
    "-co", "COMPRESS=DEFLATE",
    "-co", "PREDICTOR=2",
    str(warp_tif),
    str(cog)
], check=True)

# ---------------------------------------------------
# CLEANUP
# ---------------------------------------------------
print("Cleaning up...")
for f in [gz, grib, tif, warp_tif]:
    try:
        f.unlink()
    except FileNotFoundError:
        pass

print("DONE →", cog)
