document.addEventListener('DOMContentLoaded', () => {
    const cat = document.getElementById('interactive-cat');
    const pressSound = new Audio('press.mp3');
    const getOutSound = new Audio('getout.mp3');

    let clickCount = 0;
    let clickTimer = null;

    cat.addEventListener('click', () => {
        // Bounce animation
        cat.classList.add('bounce');
        setTimeout(() => {
            cat.classList.remove('bounce');
        }, 300);

        // Play sound
        pressSound.currentTime = 0;
        pressSound.play();

        // Handle clicks
        clickCount++;
        if (clickTimer) {
            clearTimeout(clickTimer);
        }
        clickTimer = setTimeout(() => {
            clickCount = 0;
        }, 500);

        if (clickCount > 5) {
            getOutSound.play();
            cat.classList.add('explode');
            const overlay = document.getElementById('fullscreen-overlay');
            overlay.classList.remove('hidden');
            setTimeout(() => {
                cat.style.display = 'none';
                overlay.classList.add('hidden');
            }, 1000);
        }
    });

    const timerElement = document.getElementById('updated-timer');
    const startTime = new Date(2025, 6, 19, 20, 19); // July is month 6 (0-indexed)

    function updateTimer() {
        const now = new Date();
        const diff = now - startTime;

        if (diff < 0) {
            timerElement.textContent = "updated: not yet";
            return;
        }

        let totalSeconds = Math.floor(diff / 1000);

        const years = Math.floor(totalSeconds / (365 * 24 * 60 * 60));
        totalSeconds %= (365 * 24 * 60 * 60);

        const days = Math.floor(totalSeconds / (24 * 60 * 60));
        totalSeconds %= (24 * 60 * 60);

        const hours = Math.floor(totalSeconds / (60 * 60));
        totalSeconds %= (60 * 60);

        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;

        let timeString = "updated: ";
        if (years > 0) {
            timeString += `${years}y `;
        }
        if (days > 0) {
            timeString += `${days}d `;
        }
        if (hours > 0) {
            timeString += `${hours}h `;
        }
        if (minutes > 0) {
            timeString += `${minutes}m `;
        }
        timeString += `${seconds}s ago`;

        if (diff < 1000) {
            timeString = "updated: now";
        }

        timerElement.textContent = timeString;
    }

    setInterval(updateTimer, 1000);
});