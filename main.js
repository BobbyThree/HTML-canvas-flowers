const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
ctx.globalCompositeOperation = 'destination-over';

//flower variables
let hue = 0;
let number = 0;
let scale = 10;

//text variables
let textY = -10;
let dy = 3;

function animationHandler() {
  animateFlower();
  setTimeout(animateText, 2000);
}
animationHandler();

function drawFlower() {
  let angle = number * 5 ;
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
  drawFlower();
  if (number > 150) return;
  requestAnimationFrame(animateFlower);
}


function drawText() {
  ctx.font = '33px sans-serif';
  ctx.fillStyle = 'lightgreen'
  ctx.textAlign = 'center';
  ctx.fillText('Check this shit out!', canvas.width / 2, textY);    
}

function animateText() {
  ctx.clearRect(0, 0, canvas.width, 100);
  drawText();
  textY += dy;
  if (textY >= 100) return;
  requestAnimationFrame(animateText);
}

