document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('section, .articles-list article, #home-image img');

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
