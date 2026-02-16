// Parallax effect for slide images based on mouse position
document.addEventListener("DOMContentLoaded", function () {
  console.log('Parallax script loaded');

  // Listen to mouse movement on entire document
  document.addEventListener('mousemove', (e) => {
    const activeSlide = document.querySelector('.swiper-slide-active');
    if (!activeSlide) return;

    const imgContainer = activeSlide.querySelector('.swiper-slide-img-groups');
    const txtContainer = activeSlide.querySelector('.swiper-slide-txt');

    // Calculate mouse position relative to viewport center (values from -1 to 1)
    const x = (e.clientX / window.innerWidth) * 2 - 1;
    const y = (e.clientY / window.innerHeight) * 2 - 1;

    // Image container parallax (original)
    if (imgContainer) {
      // If mouse is left (x=-1), move block right. If right (x=1), move block left
      const translateX = -x * 3; // Max ±3px (inverted for parallax effect)
      // If mouse is up (y=-1), move block down. If down (y=1), move block up
      const translateY = -y * 3; // Max ±3px (inverted for parallax effect)
      // Scale based on Y position
      const scaleAmount = 1 + (y * 0.01); // Max ±1% scale

      imgContainer.style.setProperty('transform',
        `translate(${translateX}px, ${translateY}px) scale(${scaleAmount})`
      );
    };

    // Text container parallax (inverted - opposite direction)
    if (txtContainer) {
      // If mouse is left (x=-1), move block left. If right (x=1), move block right
      const translateX = x * 3; // Max ±3px (opposite direction)
      // If mouse is up (y=-1), move block up. If down (y=1), move block down
      const translateY = y * 3; // Max ±3px (opposite direction)
      // Scale based on Y position (inverted)
      const scaleAmount = 1 + (-y * 0.01); // Max ±1% scale (inverted)

      txtContainer.style.setProperty('transform',
        `translate(${translateX}px, ${translateY}px) scale(${scaleAmount})`
      );
    };
  });

  console.log('Parallax listeners added to document');
});
