import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

document.addEventListener("DOMContentLoaded", function () {
  console.log('Swiper script loaded, initializing...');

  // Url anchor
  var slideAnchor = window.location.hash;

  // Swiper Init
  const swiper = new Swiper(".swiperTest", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    keyboard: true,
    cssMode: false, // Desactivar cssMode para mejor compatibilidad
    speed: 600,
    autoplay: {
      delay: 20000,
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      init: function () {
        console.log('Swiper initialized!');
        // Check anchor url and go to the correct slide
        if (slideAnchor) {
          // Go to the correct slide in relation with the calculated anchor index
          var slideIndex = parseInt(slideAnchor.substr(slideAnchor.lastIndexOf('-') + 1)) - 1;
          this.slideTo(slideIndex);
        } else {
          // If there is no achor in the url, go to the first slide
          this.slideTo(0);
        }
      },
      slideChange: function () {
        var activeIndex = this.realIndex;
        var slideAnchor = "slide-" + (activeIndex + 1);
        debounceUpdateHistory(slideAnchor);
      }
    },
  });

  // "Debounce?"
  var debounceTimer;
  function debounceUpdateHistory(anchor) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(function () {
      history.replaceState(null, null, "#" + anchor);
    }, 50);
  }

});