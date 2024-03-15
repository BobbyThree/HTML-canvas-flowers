const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
ctx.globalCompositeOperation = 'destination-over';

let hue = 0;
let number = 0;
let scale = 10;


let textY = -10;
let dy = 5;

function drawFlower() {
  let angle = number * 5;
  let radius = scale * Math.sqrt(number);
  let posX = radius * Math.sin(angle) + canvas.width / 2;
  let posY = radius * Math.cos(angle) + canvas.height / 2; 

  ctx.fillStyle = 'black'; 
  ctx.strokeStyle = 'steelblue';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(posX, posY, number, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  number ++;
  hue += 2;
}

function animateFlower() {
  //ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawFlower();
  if (number > 150) return;
  requestAnimationFrame(animateFlower);
}
animateFlower();

function drawText() {
  ctx.font = '33px sans-serif';
  ctx.fillStyle = 'lightgreen'
  ctx.textAlign = 'center';
  ctx.fillText('whattuuuuup', canvas.width / 2, textY);
    
}

function animateText() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawText();
  textY += dy;
  if (textY >= 100) return;
  requestAnimationFrame(animateText);
}
animateText();