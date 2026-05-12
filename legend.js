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
            { label: '1.0"', color: '#fbfb31' },
            { label: '2.0"', color: '#c68626' },
            { label: '4.0"', color: '#e932e8' },
            { label: '6.0"', color: '#68186e' },
            { label: '8.0"+', color: '#ffffc2' }
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

    const stepW = 60; // Width per step
    const legW = (config.steps.length * stepW) + 20;
    const legH = 45; 
    const legX = canvasWidth - legW - 30;
    const legY = canvasHeight - legH - 30;

    // Background Container
    ctx.fillStyle = "rgba(15, 23, 42, 0.95)";
    ctx.beginPath();
    ctx.roundRect(legX, legY, legW, legH, 8);
    ctx.fill();
    ctx.strokeStyle = "rgba(169, 231, 255, 0.3)";
    ctx.stroke();

    // Title (Placed above or to the left)
    ctx.textAlign = "left";
    ctx.font = "900 10px 'Roboto'";
    ctx.fillStyle = "#a9e7ff";
    ctx.fillText(config.title, legX + 10, legY + 15);

    // Color Steps (Horizontal)
    config.steps.forEach((step, i) => {
        const itemX = legX + 10 + (i * stepW);
        const itemY = legY + 28;
        
        // Color box
        ctx.fillStyle = step.color;
        ctx.fillRect(itemX, itemY, 12, 12);
        
        // Text
        ctx.fillStyle = "white";
        ctx.font = "700 10px 'Roboto'";
        ctx.fillText(step.label, itemX + 16, itemY + 10);
    });
}