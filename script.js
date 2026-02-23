// Hamburger + Side Panel Toggle
function toggleMenu(){
  document.getElementById("menu").classList.toggle("active");
  document.getElementById("hamburger").classList.toggle("active");
  document.getElementById("overlay").classList.toggle("active");
}

// Smooth page transitions
document.querySelectorAll('a').forEach(link=>{
  if(link.getAttribute('href') && !link.getAttribute('href').startsWith('#')){
    link.addEventListener('click', e=>{
      e.preventDefault();
      const url = link.getAttribute('href');
      document.body.style.opacity = 0;
      setTimeout(()=> window.location.href = url, 400);
    });
  }
});
window.addEventListener('DOMContentLoaded', ()=>{
  document.body.style.opacity = 1;
});

// Particle background
const canvas = document.createElement('canvas');
canvas.id = 'particle-canvas';
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');
let W = canvas.width = window.innerWidth;
let H = canvas.height = window.innerHeight;

const particles = [];
for(let i=0;i<80;i++){
  particles.push({x:Math.random()*W, y:Math.random()*H, r:Math.random()*2+1, dx:(Math.random()-0.5)*0.5, dy:(Math.random()-0.5)*0.5});
}

function drawParticles(){
  ctx.clearRect(0,0,W,H);
  particles.forEach(p=>{
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2,false);
    ctx.fillStyle = 'rgba(255,255,255,0.06)';
    ctx.fill();
    p.x += p.dx; p.y += p.dy;
    if(p.x<0 || p.x>W)p.dx*=-1;
    if(p.y<0 || p.y>H)p.dy*=-1;
  });
  requestAnimationFrame(drawParticles);
}
drawParticles();
window.addEventListener('resize',()=>{ W=canvas.width=window.innerWidth; H=canvas.height=window.innerHeight;});