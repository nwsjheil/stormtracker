// Global namespace to ensure availability in popup HTML
window.copyToClipboard = function(text, btnElement) {
    const charCount = text.length;
    
    navigator.clipboard.writeText(text).then(() => {
        if (btnElement) {
            // Store original text (usually "COPY SHORT TEXT")
            const originalText = btnElement.innerText;
            
            // Update button with status and char count
            btnElement.innerText = `COPIED! (${charCount} chars)`;
            
            // Prevent clicking again while the message is showing
            btnElement.style.pointerEvents = 'none';

            // Reset after 4 seconds
            setTimeout(() => {
                btnElement.innerText = originalText;
                btnElement.style.pointerEvents = 'auto';
            }, 4000);
        } else {
            // Fallback alert if element isn't passed correctly
            alert(`Social Media text copied! (${charCount} characters)`);
        }
    });
};

let countyLookup = {};

// Load your authoritative list from the server/git
fetch('https://nwsjheil.github.io/stormtracker/counties.json')
    .then(res => res.json())
    .then(data => {
        countyLookup = data;
        console.log("Global county database initialized.");
    });

// Grammar helper for "X, Y, & Z" format
function formatCountyList(names) {
    if (names.length === 0) return "portions of the area";
    
    if (names.length === 1) {
        return names[0] + " County"; // Singular
    }
    
    if (names.length === 2) {
        return names.join(" & ") + " Counties"; // Plural
    }
    
    // Oxford comma with ampersand for 3+ counties
    return names.slice(0, -1).join(", ") + ", & " + names.slice(-1) + " Counties"; // Plural
}

function generateSMText(props) {
    const event = props.event || "";
    const description = props.description || "";
    const areaDesc = props.areaDesc || "";
    const localTime = new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });

// --- NEW OVERRIDE FOR SPECIAL MARINE WARNING ---
    const isMarine = event.includes("Special Marine Warning");
    
    // 1. Simplified Search: Check areaDesc against all names in counties.json
    let foundCounties = [];
    
    if (isMarine) {
        // Skip lookup for marine warnings
        foundCounties = []; 
    } else {
        Object.values(countyLookup).forEach(county => {
            const regex = new RegExp(`\\b${county.name}\\b`, 'i');
            if (regex.test(areaDesc)) {
                foundCounties.push(county.name);
            }
        });
    }

    // Clean up duplicates and format grammar
    const uniqueCounties = [...new Set(foundCounties)];
    const countiesStr = isMarine ? "portions of the local waters" : formatCountyList(uniqueCounties);
    //const countySuffix = uniqueCounties.length > 1 ? " Counties" : " County";

    // 2. Expiration and Hazard Shaping
    const expMatch = description.match(/until\s*([\d:]+\s*[AP]M\s*\w{3})/i);
    const untilStr = expMatch ? ` until ${expMatch[1].replace(/(\d{1,2})(\d{2})/, '$1:$2')}` : "";

// HAZARD CONFIGS (Fixed Rainfall Regex)
    let hazardDetails = "";
    const hazardConfigs = {
        "Special Marine Warning": function() {
            const p = typeof props.parameters === 'string' ? JSON.parse(props.parameters) : props.parameters;
            const windVal = p?.maxWindGust ? p.maxWindGust[0] : null;
            const hailVal = p?.maxHailSize ? p.maxHailSize[0] : null;
            
            let text = "Seek safe harbor immediately. ";
            if (windVal) text += `Wind gusts to ${windVal} `;
            if (hailVal && parseFloat(hailVal) > 0) text += `${windVal ? 'and ' : ''}large hail `;
            if (windVal || (hailVal && parseFloat(hailVal) > 0)) text += "are possible. ";
            
            return text;
        },
        "Flood": () => {
            // Captures rain that has already fallen
            const rain = description.match(/[^.]*?(\d+(\.\d+)?\s?inches?|between\s?\d+(\.\d+)?\s?and\s?\d+(\.\d+)?\s?inches?)\s?of\s?rain\s?(has|have)\s?fallen[^.]*/i);
            
            // Captures additional rainfall: matches "possible", "expected", "likely", etc.
            // The .*? allows for any text (including newlines) between "amounts" and "area."
            const addl = description.match(/\badditional\s?rainfall\s?amounts[\s\S]*?\barea\./i);
            
            let text = rain ? rain[0].replace(/\n/g, ' ').trim() + '. ' : "";
            text += addl ? addl[0].replace(/\n/g, ' ').replace(/^[-–—]?\s*/, '').trim() + ' ' : "";
            return text;
        },
        "StormHazards": function(p) {
            const windVal = p?.maxWindGust ? p.maxWindGust[0] : null;
            // Extract value, but treat "0.00" or 0 as null
            const hailVal = (p?.maxHailSize && parseFloat(p.maxHailSize[0]) > 0) ? p.maxHailSize[0] : null;            
            let cleanedHail = null;
            if (hailVal) {
                // 1. Call your existing function
                let rawDesc = getHailDescription(hailVal) || "";
                // 2. Strip parentheses and lowercase
                rawDesc = rawDesc.replace(/[()]/g, "").toLowerCase().trim();

                // LOGIC BRANCHES:
                // Case A: 0.50" specifically (since your fn returns "")
                if (parseFloat(hailVal) === 0.5) {
                    cleanedHail = "half inch";
                } 
                // Case B: Function returned a valid name (pea, quarter, etc.)
                else if (rawDesc !== "") {
                    // Append "size" if it's a word that needs it
                    cleanedHail = (rawDesc.includes("size") || rawDesc.includes("inch")) 
                        ? rawDesc 
                        : `${rawDesc} size`;
                } 
                // Case C: Fallback to raw value (e.g., 0.75")
                else {
                    cleanedHail = `${hailVal}"`;
                }
            }

            const windPart = windVal ? `wind gusts to ${windVal}` : null;
            const hailPart = cleanedHail ? `${cleanedHail} hail` : null;

            let finalSentence = "";
            if (windPart && hailPart) {
                finalSentence = `Threats include ${windPart} and ${hailPart}. `;
            } else if (windPart) {
                finalSentence = `The primary threat is ${windPart}. `;
            } else if (hailPart) {
                finalSentence = `The primary threat is ${hailPart}. `;
            }

            // Fix Sentence Case: Capitalize first letter
            if (finalSentence.length > 0) {
                return finalSentence.charAt(0).toUpperCase() + finalSentence.slice(1);
            }
            return "";
        },
        "Severe Thunderstorm": function() {
            const p = typeof props.parameters === 'string' ? JSON.parse(props.parameters) : props.parameters;
            let text = this.StormHazards(p);
            
            // Check for the "POSSIBLE" tornado tag
            if (p?.tornadoDetection && p.tornadoDetection[0].toUpperCase() === "POSSIBLE") {
                text += "A tornado is also possible. ";
            }
            
            return text;
        },
        "Special Weather Statement": function() {
            const p = typeof props.parameters === 'string' ? JSON.parse(props.parameters) : props.parameters;
            return this.StormHazards(p);
        },
        "Tornado": function() {
            const p = typeof props.parameters === 'string' ? JSON.parse(props.parameters) : props.parameters;
            let text = `TAKE COVER NOW! `;
            if (p?.tornadoDetection) text += `Tornado is ${p.tornadoDetection[0].toLowerCase()}. `;
            
            const additional = this.StormHazards(p);
            text += additional; 
            return text;
        }
    };

    const hazardKey = Object.keys(hazardConfigs).find(key => event.includes(key));
    if (hazardKey) hazardDetails = hazardConfigs[hazardKey]();

    // Final Fallback for description
    if (!hazardDetails.trim()) {
        const impacts = description.match(/IMPACTS\.\.\.(.*?)(?=\.|$)/is);
        if (impacts) hazardDetails = "Impact: " + impacts[1].replace(/\n/g, ' ').trim() + ". ";
    }

    return `${localTime} | A ${event} has been issued for ${countiesStr}${untilStr}. ${hazardDetails}`.trim();
}
