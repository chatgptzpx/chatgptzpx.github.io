document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-1';
    canvas.style.pointerEvents = 'none';
    document.body.appendChild(canvas);

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const particles = [];
    const properties = {
        bgColor: 'rgba(0, 0, 0, 0)',
        particleColor: 'rgb(255, 255, 255)',
        lineColor: 'rgb(255, 255, 255)',
        particleRadius: 1.5,
        particleCount: 150,
        particleMaxVelocity: 0.5,
        lineLength: 180,
        particleLife: 120,
        fadeDuration: 6
    };

    window.onresize = function() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    };

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.velocityX = Math.random() * (properties.particleMaxVelocity * 2) - properties.particleMaxVelocity;
            this.velocityY = Math.random() * (properties.particleMaxVelocity * 2) - properties.particleMaxVelocity;
            this.life = properties.particleLife * 60;
        }

        position() {
            (this.x + this.velocityX > width && this.velocityX > 0) || (this.x + this.velocityX < 0 && this.velocityX < 0) ? this.velocityX *= -1 : this.velocityX;
            (this.y + this.velocityY > height && this.velocityY > 0) || (this.y + this.velocityY < 0 && this.velocityY < 0) ? this.velocityY *= -1 : this.velocityY;
            this.x += this.velocityX;
            this.y += this.velocityY;
        }

        reDraw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, properties.particleRadius, 0, Math.PI * 2);
            ctx.closePath();

            let currentOpacity = 1;
            const totalLifeFrames = properties.particleLife * 60;
            const fadeFrames = properties.fadeDuration * 60;

            if (this.life > totalLifeFrames - fadeFrames) {
                currentOpacity = 1 - (this.life - (totalLifeFrames - fadeFrames)) / fadeFrames;
            } else if (this.life < fadeFrames) {
                currentOpacity = this.life / fadeFrames;
            }
            currentOpacity = Math.max(0, Math.min(1, currentOpacity));

            ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity})`;
            ctx.shadowBlur = 15;
            ctx.shadowColor = `rgba(255, 255, 255, ${currentOpacity})`;
            ctx.fill();
            ctx.shadowBlur = 0;
        }

        reCalculateLife() {
            if(this.life < 1) {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.velocityX = Math.random() * (properties.particleMaxVelocity * 2) - properties.particleMaxVelocity;
                this.velocityY = Math.random() * (properties.particleMaxVelocity * 2) - properties.particleMaxVelocity;
                this.life = properties.particleLife * 60;
            }
            this.life--;
        }
    }

    function reDrawBackground() {
        ctx.clearRect(0, 0, width, height);
    }

    function reDrawParticles() {
        for(let i = 0; i < particles.length; i++) {
            particles[i].reCalculateLife();
            particles[i].position();
            particles[i].reDraw();
        }
    }

    function drawLines() {
        let x1, y1, x2, y2, length, opacity;
        for(let i = 0; i < particles.length; i++) {
            for(let j = 0; j < particles.length; j++) {
                x1 = particles[i].x;
                y1 = particles[i].y;
                x2 = particles[j].x;
                y2 = particles[j].y;
                length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
                if(length < properties.lineLength) {
                    opacity = 1 - length/properties.lineLength;
                    ctx.lineWidth = '0.2';
                    ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
                    ctx.beginPath();
                    ctx.moveTo(x1, y1);
                    ctx.lineTo(x2, y2);
                    ctx.closePath();
                    ctx.stroke();
                }
            }
        }
    }

    function loop() {
        reDrawBackground();
        reDrawParticles();
        drawLines();
        requestAnimationFrame(loop);
    }

    function init() {
        for(let i = 0; i < properties.particleCount; i++) {
            particles.push(new Particle);
        }
        loop();
    }

    init();
});