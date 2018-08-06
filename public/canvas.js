const canvas = document.getElementById('canvas');
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let isDrawing = false;
let nextX = 0;
let nextY = 0;

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  setPos(e);
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', drawingExit);
canvas.addEventListener('mouseout', drawingExit);


function setPos(e) {
  const rect = canvas.getBoundingClientRect();

  nextX = ((e.clientX - rect.left) / (rect.right - rect.left) * canvas.width);
  nextY = ((e.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height);
}

function draw(mouse) {
  if (isDrawing === false) return;
  
  // context.beginPath();

  context.lineCap = "round";
  context.lineJoin = "round";
  context.lineWidth = 40;

  
  context.moveTo(nextX, nextY);
  setPos(mouse);
  context.lineTo(nextX, nextY);

  context.strokeStyle = "red";
  context.stroke();
}

function drawingExit() {
  isDrawing = false;
}