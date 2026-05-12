/**
 * Global configuration for radar data legends.
 * Add new entries here to support additional weather layers.
 */
const COG_CONFIG = {
    'mrms_1h_qpe': {
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
'mrms_mesh': {
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
    ctx.fillText(config.title, legendX + padding, legendY + 15);

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
