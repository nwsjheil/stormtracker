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
    '3h_qpe': {
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
    }
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
