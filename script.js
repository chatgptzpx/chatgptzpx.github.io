document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');

    document.addEventListener('mousemove', (e) => {
        follower.style.left = e.clientX + 'px';
        follower.style.top = e.clientY + 'px';

        setTimeout(() => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        }, 50);
    });

    document.addEventListener('mousedown', () => {
        follower.style.transform = 'translate(-50%, -50%) scale(0.8)';
        cursor.style.transform = 'translate(-50%, -50%) scale(0.5)';
    });

    document.addEventListener('mouseup', () => {
        follower.style.transform = 'translate(-50%, -50%) scale(1)';
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    });

    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            follower.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursor.style.transform = 'translate(-50%, -50%) scale(0.5)';
        });

        link.addEventListener('mouseleave', () => {
            follower.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    });

    let clickCount = 0;
    const profileImage = document.getElementById('profileImage');
    const body = document.querySelector('body');

    profileImage.addEventListener('click', () => {
        clickCount++;

        if (clickCount === 5) {
            body.classList.add('fun-mode');
            alert('Режим веселья активирован!');
            clickCount = 0; // Сброс счетчика
        }
    });
}); 