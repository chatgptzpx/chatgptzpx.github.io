// Кастомный курсор и интерактивные эффекты
document.addEventListener('DOMContentLoaded', () => {
    // Создание фоновых частиц
    createParticles();
    
    // Кастомный курсор
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        setTimeout(() => {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        }, 80);
    });
    
    // Эффект увеличения курсора при наведении на интерактивные элементы
    const interactiveElements = document.querySelectorAll('a, h1, .skills li');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorFollower.style.transform = 'translate(-50%, -50%) scale(2.5)';
            cursorFollower.style.backgroundColor = 'rgba(157, 78, 221, 0.15)';
            cursorFollower.style.borderColor = 'rgba(224, 170, 255, 0.5)';
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorFollower.style.backgroundColor = 'rgba(157, 78, 221, 0.2)';
            cursorFollower.style.borderColor = 'rgba(157, 78, 221, 0.3)';
        });
    });
    
    // Эффекты для профиля
    const profileImage = document.getElementById('profileImage');
    if (profileImage) {
        // Улучшенный эффект пульсации фото
        const pulseEffect = () => {
            profileImage.style.animation = 'none';
            void profileImage.offsetWidth; // Трюк для сброса анимации
            profileImage.style.animation = 'pulse 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        };
        
        setInterval(pulseEffect, 5000);
        
        // Добавляем 3D эффект при движении мыши
        const profileCard = document.querySelector('.profile-card');
        document.addEventListener('mousemove', (e) => {
            if (!isMobile()) {
                const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
                const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
                profileImage.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) scale(1.05)`;
            }
        });
        
        document.addEventListener('mouseleave', () => {
            profileImage.style.transform = 'rotateY(0) rotateX(0) scale(1)';
        });
    }
    
    // Анимация появления элементов при скролле с более плавным эффектом
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.skills, .project, .social-link');
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
                element.style.filter = 'blur(0)';
            }
        });
    };
    
    // Первоначальная настройка для анимации скролла
    const setupScrollAnimation = () => {
        const elements = document.querySelectorAll('.skills, .project, .social-link');
        elements.forEach((element, index) => {
            // Создаем эффект каскадного появления
            const delay = index * 0.1;
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.filter = 'blur(5px)';
            element.style.transition = `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s, filter 0.8s ease ${delay}s`;
        });
    };
    
    setupScrollAnimation();
    window.addEventListener('scroll', animateOnScroll);
    setTimeout(animateOnScroll, 500); // Вызов функции с небольшой задержкой
    
    // Добавление эффекта неонового свечения к заголовку
    const title = document.querySelector('.profile-info h1');
    if (title) {
        // Эффект при наведении
        title.addEventListener('mouseenter', () => {
            title.style.textShadow = '0 0 10px rgba(157, 78, 221, 0.8), 0 0 20px rgba(157, 78, 221, 0.6), 0 0 30px rgba(157, 78, 221, 0.4)';
            title.style.letterSpacing = '2px';
        });
        
        title.addEventListener('mouseleave', () => {
            title.style.textShadow = '0 2px 10px rgba(157, 78, 221, 0.3)';
            title.style.letterSpacing = '1px';
        });
        
        // Анимированный градиент для текста
        setInterval(() => {
            title.style.backgroundPosition = '200% center';
            setTimeout(() => {
                title.style.backgroundPosition = '0% center';
            }, 2000);
        }, 5000);
    }
    
    // Улучшенный эффект свечения для элементов навыков
    const skillItems = document.querySelectorAll('.skills li');
    if (skillItems.length > 0) {
        const randomGlow = () => {
            const randomIndex = Math.floor(Math.random() * skillItems.length);
            skillItems.forEach(item => {
                item.style.boxShadow = 'none';
                item.style.transform = 'translateY(0) scale(1)';
            });
            
            skillItems[randomIndex].style.boxShadow = '0 0 20px rgba(157, 78, 221, 0.8)';
            skillItems[randomIndex].style.transform = 'translateY(-5px) scale(1.1)';
            
            setTimeout(() => {
                skillItems[randomIndex].style.boxShadow = 'none';
                skillItems[randomIndex].style.transform = 'translateY(0) scale(1)';
            }, 1500);
        };
        
        setInterval(randomGlow, 3000);
        
        // Добавляем интерактивность
        skillItems.forEach(item => {
            item.addEventListener('click', () => {
                item.style.transform = 'scale(1.2) rotate(5deg)';
                setTimeout(() => {
                    item.style.transform = 'scale(1) rotate(0deg)';
                }, 500);
            });
        });
    }
    
    // Анимация для социальных ссылок при загрузке
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach((link, index) => {
        setTimeout(() => {
            link.style.opacity = '1';
            link.style.transform = 'translateY(0)';
        }, 1000 + (index * 200));
    });
    
    // Проверка на мобильное устройство
    function isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
    }
    
    // Создание частиц для фона
    function createParticles() {
        if (isMobile()) return; // Не создаем частицы на мобильных устройствах
        
        const container = document.querySelector('.container');
        const particleCount = 25;
        
        // Создаем контейнер для частиц
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles-container';
        particlesContainer.style.position = 'absolute';
        particlesContainer.style.top = '0';
        particlesContainer.style.left = '0';
        particlesContainer.style.width = '100%';
        particlesContainer.style.height = '100%';
        particlesContainer.style.overflow = 'hidden';
        particlesContainer.style.zIndex = '-1';
        particlesContainer.style.pointerEvents = 'none';
        container.appendChild(particlesContainer);
        
        // Создаем частицы
        for (let i = 0; i < particleCount; i++) {
            createParticle(particlesContainer);
        }
    }
    
    function createParticle(container) {
        const particle = document.createElement('div');
        
        // Базовые стили частицы
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 3 + 1 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = 'rgba(157, 78, 221, ' + (Math.random() * 0.3 + 0.1) + ')';
        particle.style.borderRadius = '50%';
        particle.style.boxShadow = '0 0 ' + (Math.random() * 5 + 5) + 'px rgba(157, 78, 221, 0.7)';
        
        // Позиционирование
        particle.style.top = Math.random() * 100 + '%';
        particle.style.left = Math.random() * 100 + '%';
        
        // Анимация
        const duration = Math.random() * 60 + 30;
        particle.style.animation = `floatParticle ${duration}s linear infinite`;
        
        // Добавляем задержку
        particle.style.animationDelay = Math.random() * 20 + 's';
        
        // Создаем keyframes для анимации
        if (!document.querySelector('#particle-animation')) {
            const style = document.createElement('style');
            style.id = 'particle-animation';
            style.textContent = `
                @keyframes floatParticle {
                    0% {
                        transform: translate(0, 0) rotate(0deg);
                        opacity: 0;
                    }
                    25% {
                        opacity: 1;
                    }
                    75% {
                        opacity: 1;
                    }
                    100% {
                        transform: translate(${Math.random() > 0.5 ? '+' : '-'}${Math.random() * 150 + 50}px, ${Math.random() > 0.5 ? '+' : '-'}${Math.random() * 150 + 50}px) rotate(${Math.random() * 360}deg);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
        
        container.appendChild(particle);
    }
    
    // Анимация карточки при прокрутке
    const profileCard = document.querySelector('.profile-card');
    window.addEventListener('scroll', () => {
        const scrollValue = window.scrollY;
        const opacity = Math.max(0.05, 0.2 - (scrollValue * 0.0005));
        profileCard.style.boxShadow = `0 10px 40px rgba(0, 0, 0, 0.5), 0 0 80px rgba(157, 78, 221, ${opacity})`;
    });
}); 