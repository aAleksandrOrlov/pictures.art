const slider = (
  slideSelector,
  direction,
  oppositeDirection,
  prevSelector,
  nextSelector
) => {
  const slides = document.querySelectorAll(slideSelector);

  let slideIndex = 0,
    paused = false;

  function showSlides(n) {
    if (n > slides.length - 1) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;

    slides.forEach((slide) => {
      slide.classList.add('animated');
      slide.style.display = 'none';
    });

    slides[slideIndex].style.display = 'block';
  }

  function changeSlide(n) {
    showSlides((slideIndex += n));
  }

  function nextSlide() {
    changeSlide(1);
    slides[slideIndex].classList.add(`slideIn${direction}`);
    slides[slideIndex].classList.remove(`slideIn${oppositeDirection}`);
  }

  function prevSlide() {
    changeSlide(-1);
    slides[slideIndex].classList.add(`slideIn${oppositeDirection}`);
    slides[slideIndex].classList.remove(`slideIn${direction}`);
  }

  function activateAutoSliding() {
    paused = setInterval(nextSlide, 10000);
  }

  try {
    const prev = document.querySelector(prevSelector),
      next = document.querySelector(nextSelector);

    prev.addEventListener('click', prevSlide);
    next.addEventListener('click', nextSlide);
  } catch (err) {}

  slides[0].parentNode.addEventListener('mouseenter', () =>
    clearInterval(paused)
  );
  slides[0].parentNode.addEventListener('mouseleave', activateAutoSliding);

  showSlides(slideIndex);
  activateAutoSliding();
};

export default slider;
