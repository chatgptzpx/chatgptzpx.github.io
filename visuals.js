const canvas = document.getElementById('visualCanvas');
const ctx = canvas.getContext('2d');

let particles = [];
const numParticles = 100;
const maxDistance = 100; // Maximum distance for lines to be drawn between particles

// Resize canvas to fill window
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

// Particle class
class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 2 + 1; // Random size between 1 and 3
        this.speedX = Math.random() * 0.5 - 0.25; // Random speed between -0.25 and 0.25
        this.speedY = Math.random() * 0.5 - 0.25;
        this.color = 'rgba(255, 255, 255, 1)'; // Changed to full opacity white
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce off edges
        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

// Create particles
function init() {
    particles = [];
    for (let i = 0; i < numParticles; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particles.push(new Particle(x, y));
    }
}

// Animate particles and draw lines
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        // Draw lines between nearby particles
        for (let j = i; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < maxDistance) {
                ctx.strokeStyle = `rgba(255, 140, 0, ${1 - (distance / maxDistance)})`; // Orange with fading opacity
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
    }
}

// Event listeners
window.addEventListener('resize', resizeCanvas);

// Initial setup
window.addEventListener('DOMContentLoaded', () => {
  resizeCanvas();
  init();
  animate();
});
