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
    'mrms_hail_size': {
        title: "MAX HAIL SIZE (IN)",
        steps: [
            { label: '4.00"+', color: '#ff0000' },
            { label: '2.75"', color: '#ff8c00' },
            { label: '1.75"', color: '#ffff00' },
            { label: '1.00"', color: '#00ff00' }
        ]
    }
};

/**
 * Draws the active legend onto the export canvas.
 */
/**
 * Draws the active legend onto the export canvas as a skinny horizontal bar.
 */
function drawLegendToCanvas(ctx, layerKey, canvasWidth, canvasHeight) {
    const config = COG_CONFIG[layerKey];
    if (!config) return;

    const stepW = 60; 
    const legW = (config.steps.length * stepW) + 20;
    const legH = 55; // Increased slightly for better vertical breathing room
    const legX = canvasWidth - legW - 30;
    const legY = canvasHeight - legH - 30;

    // 1. Background Container
    ctx.fillStyle = "rgba(15, 23, 42, 0.95)";
    ctx.beginPath();
    ctx.roundRect(legX, legY, legW, legH, 8);
    ctx.fill();
    ctx.strokeStyle = "rgba(169, 231, 255, 0.3)";
    ctx.lineWidth = 1;
    ctx.stroke();

    // 2. Title (Subtle padding from top)
    ctx.textAlign = "left";
    ctx.textBaseline = "top"; // Anchor to the top
    ctx.font = "900 10px 'Roboto'";
    ctx.fillStyle = "#a9e7ff";
    ctx.fillText(config.title, legX + 10, legY + 8);

    // 3. Define the Row Midpoint
    // This finds the center of the area remaining below the title
    const contentAreaTop = legY + 22;
    const contentAreaHeight = legH - 22;
    const rowMidpointY = contentAreaTop + (contentAreaHeight / 2);

    // 4. Color Steps Loop
    ctx.textBaseline = "middle"; // CRITICAL: Centers text vertically on the Y-point
    
    config.steps.forEach((step, i) => {
        const itemX = legX + 10 + (i * stepW);
        const boxSize = 12;
        
        // Vertically center the box on the rowMidpointY
        const boxY = rowMidpointY - (boxSize / 2);
        
        // Color box
        ctx.fillStyle = step.color;
        ctx.fillRect(itemX, boxY, boxSize, boxSize);
        
        // Text (now perfectly centered with the box via 'middle' baseline)
        ctx.fillStyle = "white";
        ctx.font = "700 11px 'Roboto'";
        ctx.fillText(step.label, itemX + 16, rowMidpointY);
    });
}
