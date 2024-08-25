document.addEventListener('DOMContentLoaded', function () {
    // Animation d'apparition progressive au défilement
    const elements = document.querySelectorAll('section, .articles-list article');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    elements.forEach(element => observer.observe(element));

    console.log("Le site est chargé et prêt !");
});
