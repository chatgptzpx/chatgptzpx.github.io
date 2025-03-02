document.addEventListener('DOMContentLoaded', function() {
    // Анимация появления социальных кнопок
    const socialButtons = document.querySelectorAll('.social-button');
    
    socialButtons.forEach((button, index) => {
        button.style.opacity = '0';
        button.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            button.style.transition = 'all 0.5s ease';
            button.style.opacity = '1';
            button.style.transform = 'translateY(0)';
        }, 300 + (index * 100));
    });
    
    // Создание дополнительных пузырьков для анимации фона
    const backgroundAnimation = document.querySelector('.background-animation');
    
    for (let i = 0; i < 20; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        
        // Случайные размеры и позиции
        const size = Math.random() * 60 + 20;
        const left = Math.random() * 100;
        const animationDuration = Math.random() * 8 + 7;
        const animationDelay = Math.random() * 5;
        
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${left}%`;
        bubble.style.animationDuration = `${animationDuration}s`;
        bubble.style.animationDelay = `${animationDelay}s`;
        
        backgroundAnimation.appendChild(bubble);
    }
    
    // Создание звезд для фона
    const stars = document.querySelector('.stars');
    
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        const size = Math.random() * 2 + 1;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const delay = Math.random() * 5;
        
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${left}%`;
        star.style.top = `${top}%`;
        star.style.animationDelay = `${delay}s`;
        
        stars.appendChild(star);
    }
    
    // Добавление эффекта при наведении на аватар
    const avatar = document.querySelector('.avatar');
    const avatarImage = document.querySelector('.avatar-image');
    
    avatar.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1) rotate(5deg)';
        this.style.transition = 'transform 0.3s ease';
        avatarImage.style.transform = 'scale(1.1) rotate(5deg)';
    });
    
    avatar.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
        avatarImage.style.transform = 'scale(1) rotate(0deg)';
    });
    
    // Анимация появления навыков
    const skills = document.querySelectorAll('.skill');
    
    skills.forEach((skill, index) => {
        skill.style.opacity = '0';
        skill.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            skill.style.transition = 'all 0.5s ease';
            skill.style.opacity = '1';
            skill.style.transform = 'translateY(0)';
        }, 800 + (index * 100));
    });
    
    // Эффект параллакса для фона
    document.addEventListener('mousemove', function(e) {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        const moveX = (mouseX - 0.5) * 30;
        const moveY = (mouseY - 0.5) * 30;
        
        document.querySelectorAll('.bubble').forEach(bubble => {
            const bubbleSpeed = parseFloat(bubble.style.animationDuration) || 10;
            const factor = 10 / bubbleSpeed;
            
            bubble.style.transform = `translate(${moveX * factor}px, ${moveY * factor}px)`;
        });
        
        // Эффект параллакса для звезд
        document.querySelectorAll('.star').forEach(star => {
            const starFactor = Math.random() * 0.5;
            star.style.transform = `translate(${moveX * starFactor}px, ${moveY * starFactor}px)`;
        });
        
        // Эффект параллакса для карточки
        const profileCard = document.querySelector('.profile-card');
        profileCard.style.transform = `translate(${moveX * 0.05}px, ${moveY * 0.05}px)`;
    });

    // Добавление стилей для эффекта волны
    const style = document.createElement('style');
    style.textContent = `
        .ripple-effect {
            position: absolute;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .star {
            position: absolute;
            background: white;
            border-radius: 50%;
            animation: twinkle-star 3s infinite alternate;
        }
        
        @keyframes twinkle-star {
            0% {
                opacity: 0.3;
                box-shadow: none;
            }
            50% {
                opacity: 0.8;
                box-shadow: 0 0 3px rgba(255, 255, 255, 0.5);
            }
            100% {
                opacity: 0.3;
                box-shadow: none;
            }
        }
    `;
    document.head.appendChild(style);
}); 