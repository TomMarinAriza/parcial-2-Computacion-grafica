const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let points = [];

// Mueve el origen al centro inferior izquierdo del canvas y ajusta el eje Y
ctx.translate(0, canvas.height);
ctx.scale(1, -1); // Invertimos el eje Y

document.getElementById('plotButton').addEventListener('click', () => {
    const x = parseFloat(document.getElementById('xInput').value);
    const y = parseFloat(document.getElementById('yInput').value);

    if (!isNaN(x) && !isNaN(y)) {
        points.push({ x, y });
        drawGraph();
    }
});

function drawGraph() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    for (let i = 0; i < points.length; i++) {
        const point = points[i];
        if (i === 0) {
            ctx.moveTo(point.x, point.y);
        } else {
            ctx.lineTo(point.x, point.y);
        }
    }
    ctx.stroke();
}
