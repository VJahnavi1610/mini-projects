const slideTrack = document.getElementById('slideTrack');
const slides = document.querySelectorAll('.slide');
const totalRealSlides = 3;
let currentIndex = 1; // start from first real slide
let slideWidth = slides[0].offsetWidth + 20; // include gap
let interval;

function updateSlidePosition(transition = true) {
  if (transition) {
    slideTrack.style.transition = 'transform 0.8s ease-in-out';
  } else {
    slideTrack.style.transition = 'none';
  }
  slideTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function nextSlide() {
  currentIndex++;
  updateSlidePosition();
  if (currentIndex === totalRealSlides + 1) {
    setTimeout(() => {
      currentIndex = 1;
      updateSlidePosition(false);
    }, 800);
  }
  resetInterval();
}

function prevSlide() {
  currentIndex--;
  updateSlidePosition();
  if (currentIndex === 0) {
    setTimeout(() => {
      currentIndex = totalRealSlides;
      updateSlidePosition(false);
    }, 800);
  }
  resetInterval();
}

function startAutoSlide() {
  interval = setInterval(nextSlide, 5000);
}

function resetInterval() {
  clearInterval(interval);
  startAutoSlide();
}

// Initial setup
window.addEventListener('load', () => {
  slideWidth = slides[0].offsetWidth + 20;
  updateSlidePosition(false);
  startAutoSlide();
});

// Event listeners
document.getElementById('next').addEventListener('click', nextSlide);
document.getElementById('prev').addEventListener('click', prevSlide);
