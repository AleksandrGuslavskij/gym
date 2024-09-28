document.addEventListener('DOMContentLoaded', function() {
    const moreInfoBtns = document.querySelectorAll('.more-info-btn');
    
    moreInfoBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const moreInfo = this.nextElementSibling;
            moreInfo.classList.toggle('show');
            if (moreInfo.classList.contains('show')) {
                this.textContent = 'Скрыть';
            } else {
                this.textContent = 'Подробнее';
            }
        });
    });
});

let currentSlideIndex = 0;
let slideInterval;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    if (index >= slides.length) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = slides.length - 1;
    } else {
        currentSlideIndex = index;
    }
    const offset = -currentSlideIndex * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlideIndex].classList.add('active');
}

function moveSlides(n) {
    showSlide(currentSlideIndex + n);
}

function currentSlide(n) {
    showSlide(n);
}

function startSlideShow() {
    slideInterval = setInterval(() => {
        moveSlides(1);
    }, 3000); // Change slide every 3 seconds
}

function stopSlideShow() {
    clearInterval(slideInterval);
}

// Initialize the first slide
showSlide(currentSlideIndex);

// Start the automatic slideshow
startSlideShow();
