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
    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info');
    contactInfo.innerHTML = `
        <p><i class="fas fa-envelope"></i> <a href="mailto:Shohruz.Junaidov-1@ou.edu">Shohruz.Junaidov-1@ou.edu</a></p>
        <p><i class="fas fa-phone"></i> <a href="tel:+16464748281">(646) 474 8281</a></p>
        <p><i class="fab fa-linkedin"></i> <a href="https://www.linkedin.com/in/shohruz-junaidov-45756123b/" target="_blank">LinkedIn Profile</a></p>
    `;
    document.body.appendChild(contactInfo);
});
