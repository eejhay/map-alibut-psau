document.addEventListener('DOMContentLoaded', () => {
    const navDock = document.querySelector('.glass-dock');

    // Navigation Dock Animation on Scroll
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 50) {
            navDock.style.transform = "scale(0.96)";
            navDock.style.opacity = "0.9";
        } else {
            navDock.style.transform = "scale(1)";
            navDock.style.opacity = "1";
        }
    });

    // Fluid Smooth Scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});