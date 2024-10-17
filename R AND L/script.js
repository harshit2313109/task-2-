let currentIndex = 0;

function showSlide(index) {
    const images = document.querySelector('.carousel-images');
    const totalImages = images.querySelectorAll('img').length;

    if (index >= totalImages) {
        currentIndex = 0; // Reset to first image if exceeded total
    } else if (index < 0) {
        currentIndex = totalImages - 1; // Go to last image if index is negative
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100; // Calculate the percentage offset for sliding
    images.style.transform = `translateX(${offset}%)`;
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

// Initial setup to show the first slide
showSlide(currentIndex);
