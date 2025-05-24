document.querySelectorAll('.carrusel').forEach(function (carrusel) {
    const slides = carrusel.querySelectorAll('.carrusel-slide');
    const prevBtn = carrusel.querySelector('.carrusel-prev');
    const nextBtn = carrusel.querySelector('.carrusel-next');
    let current = 0;

    if (slides.length === 0 || !prevBtn || !nextBtn) return;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    prevBtn.addEventListener('click', function () {
        current = (current - 1 + slides.length) % slides.length;
        showSlide(current);
    });

    nextBtn.addEventListener('click', function () {
        current = (current + 1) % slides.length;
        showSlide(current);
    });
});