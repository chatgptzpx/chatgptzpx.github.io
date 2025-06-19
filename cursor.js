document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let followerX = 0;
    let followerY = 0;
    
    // Update mouse position with throttling
    let ticking = false;
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        if (!ticking) {
            requestAnimationFrame(() => {
                updateCursor();
                ticking = false;
            });
            ticking = true;
        }
    });
    
    // Optimized cursor update function
    function updateCursor() {
        // Main cursor directly at mouse position
        cursorX = mouseX;
        cursorY = mouseY;
        
        // Slightly delayed follower
        followerX += (cursorX - followerX) * 0.2;
        followerY += (cursorY - followerY) * 0.2;
        
        // Apply positions using transform
        cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
        follower.style.transform = `translate(${followerX}px, ${followerY}px)`;
    }
    
    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .social-link, .more-info-button');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) scale(1.3)`;
            follower.style.transform = `translate(${followerX}px, ${followerY}px) scale(0.5)`;
            follower.style.opacity = '0.5';
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) scale(1)`;
            follower.style.transform = `translate(${followerX}px, ${followerY}px) scale(1)`;
            follower.style.opacity = '1';
        });
    });
}); 