let slideIndex = 0;

function moveSlide(n) {
    const slides = document.querySelectorAll('.carousel-slide');
    slideIndex += n;

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    const newTransform = `translateX(-${slideIndex * 100}%)`;
    document.querySelector('.carousel-container').style.transform = newTransform;
}

// Auto move slides every 5 seconds
setInterval(() => {
    moveSlide(1);
}, 5000);
