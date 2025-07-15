document.addEventListener('DOMContentLoaded', function() {
    function showDiscordToast(e) {
        e.preventDefault();
        if (document.getElementById('discord-toast')) return;
        const toast = document.createElement('div');
        toast.id = 'discord-toast';
        toast.textContent = 'zpx.xyz copied!';
        toast.style.position = 'fixed';
        toast.style.bottom = '20px'; /* Position at the bottom */
        toast.style.left = '50%';
        toast.style.transform = 'translateX(-50%) translateY(100%)'; /* Start off-screen below */
        toast.style.background = 'linear-gradient(45deg, #5865F2, #23272A)';
        toast.style.color = '#fff';
        toast.style.padding = '15px 30px'; /* Slightly smaller padding for a more compact look */
        toast.style.borderRadius = '30px'; /* Rounded corners */
        toast.style.fontSize = '1.2rem'; /* Slightly smaller font */
        toast.style.fontWeight = 'bold';
        toast.style.boxShadow = '0 8px 20px rgba(88,101,242,0.4)'; /* Adjusted shadow */
        toast.style.zIndex = '9999';
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.4s ease-out, transform 0.4s ease-out'; /* Smoother transition */
        toast.style.textAlign = 'center';
        toast.style.letterSpacing = '0.5px';
        document.body.appendChild(toast);
        console.log('Attempting to show Discord toast and copy text.');
        setTimeout(() => {
            toast.style.opacity = '1';
            toast.style.transform = 'translateX(-50%) translateY(-10px)';
            console.log('Toast visible.');
        }, 10);

        try {
            navigator.clipboard.writeText('zpx.xyz')
                .then(() => {
                    console.log('Text copied to clipboard: zpx.xyz');
                })
                .catch(err => {
                    console.error('Failed to copy text to clipboard:', err);
                    // Fallback for older browsers or if clipboard API is not available
                    const textarea = document.createElement('textarea');
                    textarea.value = 'zpx.xyz';
                    document.body.appendChild(textarea);
                    textarea.select();
                    try {
                        document.execCommand('copy');
                        console.log('Text copied using document.execCommand("copy")');
                    } catch (execErr) {
                        console.error('Failed to copy text using document.execCommand("copy"):', execErr);
                    }
                    document.body.removeChild(textarea);
                });
        } catch (err) {
            console.error('Error accessing clipboard API:', err);
        }

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(-50%) translateY(100%)';
            console.log('Toast fading out.');
            setTimeout(() => {
                toast.remove();
                console.log('Toast removed from DOM.');
            }, 400);
        }, 2000);
    }

    const project = document.querySelector('.project');
    const date = document.getElementById('release-date');
    const mysteryDate = document.getElementById('mystery-date');
    let intervalId = null;
    const symbols = ['?', '✦', '★', '•', '∗', '𓆩', '𓆪', '✧', '⍟', '✺'];

    function getMysticDate() {
        function randSym() { return symbols[Math.floor(Math.random() * symbols.length)]; }
        return (
            randSym() + randSym() + randSym() + '.' +
            randSym() + randSym() + '.' +
            randSym() + randSym()
        );
    }

    if (project && date && mysteryDate) {
        project.addEventListener('mouseenter', () => {
            date.style.opacity = '1';
            date.style.filter = 'blur(0)';
            if (!intervalId) {
                intervalId = setInterval(() => {
                    mysteryDate.textContent = getMysticDate();
                }, 200);
            }
        });
        project.addEventListener('mouseleave', () => {
            date.style.opacity = '0.5';
            date.style.filter = 'blur(2px)';
            mysteryDate.textContent = '??.??.??';
            if (intervalId) {
                clearInterval(intervalId);
                intervalId = null;
            }
        });
    }


    document.querySelectorAll('.more-info-button').forEach(button => {
        button.addEventListener('click', function(event) {
            const deviceType = this.getAttribute('data-device-type');
            showDeviceInfo(deviceType, event);
        });
    });

    const discordLink = document.querySelector('.social-link.discord');
    if (discordLink) {
        discordLink.addEventListener('click', showDiscordToast);
    }

});