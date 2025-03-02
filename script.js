document.addEventListener('DOMContentLoaded', function () {
    const yearSpan = document.querySelector('.current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Contact Information Section
    const footer = document.querySelector('footer');
    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info');
    contactInfo.innerHTML = `
        <div class="footer-contact">
            <a href="mailto:Shohruz.Junaidov-1@ou.edu" title="Email"><i class="fas fa-envelope"></i></a>
            <a href="tel:+16464748281" title="Phone"><i class="fas fa-phone"></i></a>
            <a href="https://www.linkedin.com/in/shohruz-junaidov-45756123b/" target="_blank" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
        </div>
    `;
    footer.insertAdjacentElement('beforeend', contactInfo);
});
