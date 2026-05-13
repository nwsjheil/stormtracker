/**
 * Global configuration for radar data legends.
 * Add new entries here to support additional weather layers.
 */
const COG_CONFIG = {
    '1h_qpe': {
        title: "1 HR RAINFALL (IN)",
        steps: [
            { label: '0.01"', color: '#66ebe8' },
            { label: '0.2"', color: '#6ef343' },
            { label: '0.5"', color: '#4cd435' },
            { label: '1"', color: '#fbfb31' },
            { label: '2"', color: '#e99b94' },
            { label: '3"', color: '#D1241F' },
            { label: '4"', color: '#e932e8' },
            { label: '6"', color: '#68186e' },
            { label: '8" +', color: '#ffffc2' }
        ]
    },
    '3h_inst_qpe': {
        title: "3 HR RAINFALL (IN)",
        steps: [
            { label: '0.01"', color: '#66ebe8' },
            { label: '0.2"', color: '#6ef343' },
            { label: '0.5"', color: '#4cd435' },
            { label: '1"', color: '#fbfb31' },
            { label: '2"', color: '#e99b94' },
            { label: '3"', color: '#D1241F' },
            { label: '4"', color: '#e932e8' },
            { label: '6"', color: '#68186e' },
            { label: '8" +', color: '#ffffc2' }
        ]
    },
    '6h_qpe': {
        title: "6 HR RAINFALL (IN)",
        steps: [
                { label: '0.01"', color: '#73f3f4' }, 
                { label: '0.5"',  color: '#7df356' }, 
                { label: '1"',    color: '#328c1f' }, 
                { label: '2"',    color: '#e9b635' }, 
                { label: '3"',    color: '#fca19a' }, 
                { label: '5"',    color: '#aa1f16' }, 
                { label: '8"',    color: '#a126a9' }, 
                { label: '12"',   color: '#d2d7fb' }, 
                { label: '16"',   color: '#ffffcb' }  
            ]
    },
    '12h_qpe': {
        title: "12 HR RAINFALL (IN)",
        steps: [
                { label: '0.01"', color: '#73f3f4' }, 
                { label: '0.5"',  color: '#7df356' }, 
                { label: '1"',    color: '#328c1f' }, 
                { label: '2"',    color: '#e9b635' }, 
                { label: '3"',    color: '#fca19a' }, 
                { label: '5"',    color: '#aa1f16' }, 
                { label: '8"',    color: '#a126a9' }, 
                { label: '12"',   color: '#d2d7fb' }, 
                { label: '16"',   color: '#ffffcb' }  
            ]
    },
    '24h_qpe': {
        title: "24 HR RAINFALL (IN)",
        steps: [
                { label: '0.01"', color: '#73f3f4' }, 
                { label: '0.5"',  color: '#7df356' }, 
                { label: '1"',    color: '#328c1f' }, 
                { label: '2"',    color: '#e9b635' }, 
                { label: '3"',    color: '#fca19a' }, 
                { label: '5"',    color: '#aa1f16' }, 
                { label: '8"',    color: '#a126a9' }, 
                { label: '12"',   color: '#d2d7fb' }, 
                { label: '16"',   color: '#ffffcb' }  
            ]
    },
    'mesh': {
        title: "MAX HAIL SIZE (IN)",
        steps: [
            { label: '0.25" (Pea)',       color: '#01a0f6' },
            { label: '0.50"',             color: '#00ecec' },
            { label: '1.00" (Quarter)',    color: '#ffff00' },
            { label: '1.50"',             color: '#ff9000' },
            { label: '1.75" (Golf Ball)',  color: '#ff0000' },
            { label: '2.00"',             color: '#800000' }, // Maroon
            { label: '2.50" (Tennis Ball)', color: '#ff00ff' },
            { label: '3.00"',             color: '#9955c9' },
            { label: '4.00"+ (Softball)',  color: '#ffffff' } 
        ]
    },
    'precip_rate': {
        title: "PRECIP RATE (IN/HR)",
        steps: [
            { label: '0.01"', color: '#66ebe8' }, // Light Cyan
            { label: '0.10"', color: '#4aa4ec' }, // Blue
            { label: '0.25"', color: '#6ef343' }, // Light Green
            { label: '0.50"', color: '#329d23' }, // Forest Green
            { label: '1.00"', color: '#fbfb31' }, // Yellow
            { label: '2.00"', color: '#e5b42e' }, // Gold/Orange
            { label: '3.00"', color: '#e99b94' }, // Pink/Salmon
            { label: '4.00"', color: '#d1241f' }, // Red
            { label: '5.00"', color: '#af28b9' }, // Magenta
            { label: '6.00"', color: '#68186e' }, // Deep Purple
            { label: '8.00" +', color: '#ffffc2' } // Cream
        ]
    },
    'reflectivity_qc': {
        title: "COMPOSITE REFLECTIVITY (dBZ)",
        steps: [
            { label: '5', color: '#777777' },
            { label: '15', color: '#4aa4ec' },
            { label: '25', color: '#6ef343' },
            { label: '35', color: '#329d23' },
            { label: '45', color: '#fbfb31' },
            { label: '55', color: '#e93228' },
            { label: '65', color: '#e932e8' },
            { label: '75+', color: '#9656bf' }
        ]
    },
    'rala': {
        title: "PRECIP INTENSITY (dBZ)",
        steps: [
            { label: '5 (Mist)', color: '#777777' },
            { label: '15 (Very Light)', color: '#4aa4ec' },
            { label: '25 (Light)', color: '#6ef343' },
            { label: '35 (Moderate)', color: '#329d23' },
            { label: '45 (Heavy)', color: '#fbfb31' },
            { label: '55 (Intense)', color: '#e93228' },
            { label: '65 (Extreme)', color: '#e932e8' },
            { label: '75+ (Hail)', color: '#9656bf' }
        ]
    },
    'kmlb_boha': {
        title: "NEXRAD 1 HR RAINFALL (IN)",
        steps: [
            { label: '.10"', color: '#aaaaaa' },
            { label: '.50"', color: '#00ffff' },
            { label: '1.0"', color: '#00ff00' },
            { label: '1.5"', color: '#ff00ff' },
            { label: '2.0"', color: '#0000ff' },
            { label: '3.0"', color: '#ffff00' },
            { label: '4.0"', color: '#ffaa00' },
            { label: '5.0"', color: '#ff0000' },
            { label: '8.0"+', color: '#ffffff' }
        ]
    },
    'kmlb_bdsa': {
        title: "NEXRAD STORM TOTAL RAINFALL (IN)",
        steps: [
            { label: '.1"',  color: '#b3b3b3' }, // sampled above .1
            { label: '.5"',  color: '#40b5b7' }, // sampled above .6 as requested
            { label: '1"',   color: '#04d6d2' }, // sampled above 1
            { label: '2"',   color: '#14bf14' }, // sampled above 2
            { label: '3"',   color: '#d019c0' }, // sampled above 3
            { label: '4"',   color: '#4011d3' }, // sampled above 3
            { label: '5"',   color: '#2c16c1' }, // sampled above 5
            { label: '6"',   color: '#ab9440' }, // sampled above 5
            { label: '7"',   color: '#ffe903' }, // sampled above 8
            { label: '8"',   color: '#ffba01' }, // sampled above 8
            { label: '10"',  color: '#ff2800' }, // sampled above 10
            { label: '15"',  color: '#ebc2c2' }  // sampled above 15
        ]
    },
    'flash_soil': {
    title: "ESTIMATED SOIL SATURATION (%, CREST MODEL)",
    steps: [
        { label: '50% (Moist)', color: '#c7e9c0' },      // Light Green
        { label: '75% (High)', color: '#66c2a4' },       // Teal
        { label: '85% (Nearly Saturated)', color: '#2b8cbe' }, // Blue
        { label: '95% (Likely Saturated)', color: '#08306b' }, // Deep Blue
        { label: '100% (Fully Saturated)', color: '#49006a' }  // Dark Violet
    ]
},
    'flash_stream': {
        title: "UNIT STREAMFLOW & POTENTIAL FLOOD IMPACT (cfs/mi², CREST MODEL)",
        steps: [
            { label: '0', color: 'rgb(70, 70, 70)' },            // Gray (Start of Gray Block)
            { label: '100 (Runoff)', color: 'rgb(176, 175, 0)' },   // Yellow (Start of Yellow Block)
            { label: '200 (Few Impacts)', color: 'rgb(253, 168, 4)' },      // Orange (Start of Orange Block)
            { label: '300 (Moderate)', color: 'rgb(254, 4, 0)' },             // Red (Start of Red Block)
            { label: '600 (Significant)', color: 'rgb(97, 0, 141)' },    // Pink/Purple (Start of Pink Block)
            { label: '1000 (Extreme)', color: 'rgb(2, 0, 250)' },          // Blue (Start of Blue Block)
            { label: '2000+ (Catastrophic)', color: 'rgb(255, 255, 255)' }      // White (Start of White Block)
        ]
    },
};

/**
 * Draws the active legend onto the export canvas.
 */
function drawLegendToCanvas(ctx, layer, totalW, totalH) {
    const config = COG_CONFIG[layer];
    if (!config) return;

    const padding = 15;
    const itemGap = 20;
    const colorSize = 12;
    const textOffset = 6;
    
    // 1. CALCULATE DYNAMIC WIDTH
    // Measure each label to find the exact required width
    ctx.font = "10px 'Roboto'";
    let totalRequiredWidth = padding * 2;
    
    config.steps.forEach((step, index) => {
        const labelWidth = ctx.measureText(step.label).width;
        totalRequiredWidth += colorSize + textOffset + labelWidth;
        if (index < config.steps.length - 1) totalRequiredWidth += itemGap;
    });

    // 2. POSITIONING
    // Anchor to bottom right (matches your #cogLegend.preview-mode CSS)
    const legendH = 45;
    const legendX = totalW - totalRequiredWidth - 20;
    const legendY = totalH - legendH - 20;

    // 3. DRAW BACKGROUND PLATE
    ctx.fillStyle = "rgba(15, 23, 42, 0.95)";
    ctx.strokeStyle = "rgba(169, 231, 255, 0.3)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(legendX, legendY, totalRequiredWidth, legendH, 8);
    ctx.fill();
    ctx.stroke();

    // 4. DRAW TITLE
    ctx.fillStyle = "#a9e7ff";
    ctx.font = "900 9px 'Roboto'";
    ctx.textAlign = "left";
    const fullTitle = config.title + (window.activeLayerTimestamp || "");
    ctx.fillText(fullTitle, legendX + padding, legendY + 15);

    // 5. DRAW ITEMS
    let currentX = legendX + padding;
    const itemY = legendY + 30;

    config.steps.forEach(step => {
        // Draw Color Box
        ctx.fillStyle = step.color;
        ctx.fillRect(currentX, itemY - 8, colorSize, colorSize);
        
        // Draw Label
        ctx.fillStyle = "#ffffff";
        ctx.font = "10px 'Roboto'";
        const labelWidth = ctx.measureText(step.label).width;
        ctx.fillText(step.label, currentX + colorSize + textOffset, itemY);
        
        // Advance X pointer
        currentX += colorSize + textOffset + labelWidth + itemGap;
    });
}

function colorRamponeHR(inches) {
    if (inches < 0.01) return null; // No precipitation

    // Cyan/Blue range (0.01 - 0.20)
    if (inches < 0.05) return [102, 235, 232, 255];
    if (inches < 0.10) return [84, 203, 232, 255];
    if (inches < 0.15) return [74, 164, 236, 255];
    if (inches < 0.20) return [30, 80, 238, 255];

    // Green range (0.20 - 1.25)
    if (inches < 0.40) return [110, 243, 67, 255];
    if (inches < 0.60) return [76, 212, 53, 255];
    if (inches < 0.80) return [56, 178, 41, 255];
    if (inches < 1.00) return [45, 143, 31, 255];

    // Yellow/Gold/Brown range (1.00 - 2.50)
    if (inches < 1.25) return [251, 250, 49, 255];
    if (inches < 1.50) return [244, 211, 48, 255];
    if (inches < 1.75) return [229, 180, 46, 255];
    if (inches < 2.00) return [198, 134, 38, 255];
    if (inches < 2.50) return [233, 155, 148, 255];

    // Red range (2.50 - 4.50)
    if (inches < 3.00) return [229, 81, 71, 255];
    if (inches < 3.50) return [209, 36, 31, 255];
    if (inches < 4.00) return [167, 30, 24, 255];

    // Purple/Magenta range (4.00 - 6.50)
    if (inches < 4.50) return [233, 50, 232, 255];
    if (inches < 5.00) return [175, 40, 185, 255];
    if (inches < 5.50) return [143, 33, 151, 255];
    if (inches < 6.00) return [104, 24, 110, 255];

    // White/Light Blue/Cream (6.00+)
    if (inches < 6.50) return [255, 255, 255, 255];
    if (inches < 7.00) return [193, 201, 247, 255];
    if (inches < 8.00) return [223, 253, 253, 255];
    
    return [255, 255, 194, 255]; // 8.0+ (Cream)
}
function colorRampHail(mm) {
    const inches = mm / 25.4; 
    if (inches < 0.25) return null; // Noise floor

    // BLUE TO GREEN (Sub-Severe)
    if (inches < 0.50) return [1, 160, 246, 255];   // 0.25" - Blue (#01a0f6)
    if (inches < 1.00) return [0, 236, 236, 255];   // 0.50" - Light Cyan (#00ecec)
    
    // YELLOW AT 1.00" (Severe Milestone: Quarter)
    if (inches < 1.50) return [255, 255, 0, 255];   // 1.00" - Yellow (#ffff00)
    if (inches < 1.75) return [255, 144, 0, 255];   // 1.50" - Orange (#ff9000)

    // RED AT 1.75" (Severe Milestone: Golf Ball)
    if (inches < 2.00) return [255, 0, 0, 255];     // 1.75" - Red (#ff0000)
    
    // MAROON AT 2.00" (Hen Egg)
    if (inches < 2.50) return [128, 0, 0, 255];     // 2.00" - Maroon (#800000)

    // PURPLE / MAGENTA BY 2.50" (Tennis Ball)
    if (inches < 3.00) return [255, 0, 255, 255];   // 2.50" - Magenta (#ff00ff)
    if (inches < 4.00) return [153, 85, 201, 255];  // 3.00" - Purple (#9955c9)

    // WHITE BY 4.00" (Softball+)
    return [255, 255, 255, 255];                    // 4.00"+ - White (#ffffff)
}

function colorRampExtendedQPE(inches) {
    if (inches < 0.01) return null; // No precipitation

    // Cyan/Light Blue Range
    if (inches < 0.05) return [115, 243, 244, 255]; // Above 0.01
    if (inches < 0.10) return [100, 218, 239, 255]; // Above 0.05
    if (inches < 0.20) return [74, 185, 244, 255];  // Above 0.10
    
    // Solid Blue Range
    if (inches < 0.40) return [27, 88, 243, 255];   // Above 0.20
    
    // Green Range
    if (inches < 0.60) return [125, 243, 86, 255];  // Above 0.40
    if (inches < 0.80) return [83, 217, 63, 255];   // Above 0.60
    if (inches < 1.00) return [61, 185, 45, 255];   // Above 0.80
    if (inches < 1.25) return [50, 140, 31, 255];   // Above 1.00
    
    // Yellow/Gold Range
    if (inches < 1.50) return [255, 254, 71, 255];  // Above 1.25
    if (inches < 2.00) return [254, 216, 61, 255];  // Above 1.50
    if (inches < 2.50) return [233, 182, 53, 255];  // Above 2.00
    if (inches < 3.00) return [198, 134, 38, 255];  // Above 2.50
    
    // Tan/Red Range
    if (inches < 3.50) return [252, 161, 154, 255]; // Above 3.00
    if (inches < 4.00) return [243, 91, 80, 255];   // Above 3.50
    if (inches < 5.00) return [228, 55, 44, 255];   // Above 4.00
    if (inches < 6.00) return [170, 31, 22, 255];   // Above 5.00
    
    // Purple/Magenta Range
    if (inches < 7.00) return [251, 62, 251, 255];  // Above 6.00
    if (inches < 8.00) return [201, 48, 210, 255];  // Above 7.00
    if (inches < 9.00) return [161, 38, 169, 255];  // Above 8.00
    if (inches < 10.0) return [120, 28, 126, 255];  // Above 9.00
    
    // White/Blue-Grey/Cream Range
    if (inches < 12.0) return [255, 255, 255, 255]; // Above 10.0
    if (inches < 14.0) return [210, 215, 251, 255]; // Above 12.0
    if (inches < 16.0) return [231, 255, 255, 255]; // Above 14.0
    
    return [255, 255, 203, 255]; // Above 16.0
}
function colorRampPrecipRate(inHr) {
     inHr = inHr / 25.4; 

    if (inHr < 0.01) return null;

    // 0.01 to 0.10 (Light Blues)
    if (inHr < 0.05) return [102, 235, 232, 255];
    if (inHr < 0.10) return [84, 203, 232, 255];

    // 0.10 to 0.25 (Darker Blues/Teals)
    if (inHr < 0.15) return [74, 164, 236, 255];
    if (inHr < 0.25) return [30, 80, 238, 255];

    // 0.25 to 0.50 (Bright Greens)
    if (inHr < 0.40) return [110, 243, 67, 255];
    if (inHr < 0.50) return [76, 212, 53, 255];

    // 0.50 to 1.00 (Forest Greens)
    if (inHr < 0.60) return [56, 178, 41, 255];
    if (inHr < 0.80) return [50, 157, 35, 255];
    if (inHr < 1.00) return [45, 143, 31, 255];

    // 1.00 to 2.00 (Yellows to Amber)
    if (inHr < 1.25) return [251, 251, 49, 255];
    if (inHr < 1.50) return [244, 211, 48, 255];
    if (inHr < 1.75) return [229, 180, 46, 255];
    if (inHr < 2.00) return [198, 134, 38, 255];

    // 2.00 to 3.00 (Oranges to Tan)
    if (inHr < 2.50) return [233, 155, 148, 255];
    if (inHr < 3.00) return [229, 81, 71, 255];

    // 3.00 to 4.00 (Reds)
    if (inHr < 3.50) return [209, 36, 31, 255];
    if (inHr < 4.00) return [167, 30, 24, 255];

    // 4.00 to 5.00 (Deep Red/Start of Magenta)
    if (inHr < 4.50) return [125, 25, 20, 255]; // Deep Red transition
    if (inHr < 5.00) return [175, 40, 185, 255]; // Dark Magenta

    // 5.00+ (Purples and up)
    if (inHr < 6.00) return [143, 33, 151, 255];
    if (inHr < 7.00) return [104, 24, 110, 255];
    if (inHr < 8.00) return [255, 255, 255, 255];
    
    return [255, 255, 194, 255]; // Extreme
}
function colorRampReflectivity(dbz) {
    if (dbz < 5) return null;

    const stops = [
        { val: 5,  col: [119, 119, 119, 255] }, // Gray
        { val: 10, col: [102, 235, 232, 255] }, // Cyan
        { val: 15, col: [74, 164, 236, 255] },  // Sky Blue
        { val: 20, col: [0, 0, 255, 255] },     // Deep Blue
        { val: 25, col: [110, 243, 67, 255] },  // Bright Green
        { val: 30, col: [76, 212, 53, 255] },   // Mid Green
        { val: 35, col: [50, 157, 35, 255] },   // Forest Green
        { val: 40, col: [251, 251, 49, 255] },  // Yellow
        { val: 45, col: [229, 180, 46, 255] },  // Gold
        { val: 50, col: [243, 146, 45, 255] },  // Orange
        { val: 55, col: [233, 50, 40, 255] },   // Red
        { val: 65, col: [167, 30, 24, 255] },   // Deep Red
        { val: 70, col: [233, 50, 232, 255] },  // Magenta
        { val: 75, col: [175, 40, 185, 255] },  // Deep Purple
        { val: 80, col: [150, 86, 191, 255] }   // Lavender
    ];

    // Handle values above the highest stop
    if (dbz >= stops[stops.length - 1].val) return stops[stops.length - 1].col;

    // Find the two stops to interpolate between
    for (let i = 0; i < stops.length - 1; i++) {
        const lower = stops[i];
        const upper = stops[i + 1];

        if (dbz >= lower.val && dbz <= upper.val) {
            // Calculate interpolation factor (0.0 to 1.0)
            const ratio = (dbz - lower.val) / (upper.val - lower.val);
            
            // Interpolate each channel: color = start + (end - start) * ratio
            return [
                Math.round(lower.col[0] + (upper.col[0] - lower.col[0]) * ratio),
                Math.round(lower.col[1] + (upper.col[1] - lower.col[1]) * ratio),
                Math.round(lower.col[2] + (upper.col[2] - lower.col[2]) * ratio),
                Math.round(lower.col[3] + (upper.col[3] - lower.col[3]) * ratio)
            ];
        }
    }
}

function colorRampSoilProbability(pct) {
    // No coloring below 50
    //pct = pct + 25
    if (pct < 50) return null;

const stops = [
        // 50-74: Light Green to Deep Emerald (Healthy Moisture)
        { val: 50, col: [199, 233, 192, 255] }, // #c7e9c0
        { val: 74, col: [35, 139, 69, 255] },   // #238b45

        // 75-84: Teal to Cyan (Approaching Saturation)
        { val: 75, col: [102, 194, 164, 255] }, // #66c2a4
        { val: 84, col: [44, 162, 190, 255] },  // #2ca2be

        // 85-94: Bright Blue to Deep Blue (Nearly Saturated)
        { val: 85, col: [43, 140, 190, 255] },  // #2b8cbe
        { val: 94, col: [8, 81, 156, 255] },    // #08519c

        // 95-100: Deep Blue to Dark Violet (Fully Saturated/Standing Water)
        { val: 95, col: [8, 48, 107, 255] },    // #08306b
        { val: 100, col: [73, 0, 106, 255] }    // #49006a
    ];

    // Handle values above 100
    if (pct >= stops[stops.length - 1].val) return stops[stops.length - 1].col;

    for (let i = 0; i < stops.length - 1; i++) {
        const lower = stops[i];
        const upper = stops[i + 1];

        if (pct >= lower.val && pct <= upper.val) {
            // Check if there is a gap between ranges (e.g., 74 to 75)
            // This prevents weird interpolation between the Green and Yellow ramps
            if (upper.val - lower.val === 1 && pct > lower.val && pct < upper.val) {
                return upper.col; 
            }

            const ratio = (pct - lower.val) / (upper.val - lower.val);
            
            return [
                Math.round(lower.col[0] + (upper.col[0] - lower.col[0]) * ratio),
                Math.round(lower.col[1] + (upper.col[1] - lower.col[1]) * ratio),
                Math.round(lower.col[2] + (upper.col[2] - lower.col[2]) * ratio),
                Math.round(lower.col[3] + (upper.col[3] - lower.col[3]) * ratio)
            ];
        }
    }
    
    // Fallback for the small gaps between defined ranges (e.g., 74.5%)
    // Returns the upper color of the nearest range
    for (let i = 0; i < stops.length; i++) {
        if (pct <= stops[i].val) return stops[i].col;
    }
}
function colorRampStreamflow(val) {
    val = val * 91.467
    if (val < 0.1) return null;

    // Define the hard brackets and the ramp within each bracket
    const brackets = [
        { min: 0,  max: 100,  start: [70, 70, 70, 255], end: [200, 200, 200, 255] }, // Gray Block
        { min: 100,  max: 200,  start: [176, 175, 0, 255],   end: [255, 240, 0, 255] },   // Yellow Block
        { min: 200,  max: 300,  start: [253, 168, 4, 255],  end: [253, 104, 0, 255] },  // Orange Block
        { min: 300,  max: 600,  start: [254, 4, 0, 255],     end: [116, 3, 3, 255]},   // red Block
        { min: 600,  max: 1000, start: [97, 0, 141, 255],     end: [205, 1, 211, 255] },     // pink Block
        { min: 1000, max: 2000, start: [2, 0, 250, 255],  end: [0, 0, 85, 255] },  // blue Block
        { min: 2000, max: Infinity, start: [255, 255, 255, 255], end: [255, 255, 255, 255] }    // white Block
    ];

    for (const b of brackets) {
        if (val >= b.min && val < b.max) {
            // Internal interpolation within the bracket only
            const ratio = (val - b.min) / (b.max - b.min === Infinity ? 20 : b.max - b.min);
            
            return [
                Math.round(b.start[0] + (b.end[0] - b.start[0]) * ratio),
                Math.round(b.start[1] + (b.end[1] - b.start[1]) * ratio),
                Math.round(b.start[2] + (b.end[2] - b.start[2]) * ratio),
                Math.round(b.start[3] + (b.end[3] - b.start[3]) * ratio)
            ];
        }
    }
    
    // Fallback for exactly 20 or higher
    if (val >= 20) return brackets[6].start;
    return null;
}
