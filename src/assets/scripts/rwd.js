// Initialize isTablet globally, 880px
let isTablet;

// Function to adjust the height of .swiper-slide-img-mobile dynamically
function adjustImgMobileHeight() {
    const screenWidth = window.innerWidth;
    isTablet = screenWidth <= 880;

    const imgMobileContainers = [...document.querySelectorAll('.swiper-slide .swiper-slide-img-mobile')];
    const txtMobile = document.querySelector('.swiper-slide-txt-mobile');
    const offerMobile = document.querySelector('.swiper-slide-offer-mobile');

    imgMobileContainers.forEach(imgMobileContainer => {
        if (isTablet) {
            const txtMobileHeight = txtMobile.offsetHeight;
            const offerMobileHeight = offerMobile.offsetHeight;

            // Calculate the dynamic height for each .swiper-slide-img-mobile
            const imgMobileHeight = `calc(100% - ${txtMobileHeight}px - ${offerMobileHeight}px - 100px)`;
            imgMobileContainer.style.height = imgMobileHeight;
        } else {
            imgMobileContainer.style.height = ''; // Reset height if not mobile
        }
    });
}

// Function to adjust the height of the pagination based on combined heights
function adjustPaginationPosition() {
    const screenWidth = window.innerWidth;
    const isTablet = screenWidth <= 880;

    const pagination = document.querySelector('.swiper-pagination');

    if (pagination && isTablet) {
        const offerMobile = document.querySelector('.swiper-slide-offer-mobile');
        
        if (offerMobile) {
            const offerMobileHeight = offerMobile.offsetHeight;
            pagination.style.bottom = `calc(${offerMobileHeight}px + 8px)`;
        } else {
            pagination.style.bottom = '12px'; // Reset position if offerMobile not found
        }
    } else {
        pagination.style.bottom = '12px'; // Reset position if not mobile or no pagination
    }
}

// Function to change classes based on screen width
function changeClasses() {
    const screenWidth = window.innerWidth;
    isTablet = screenWidth <= 880; // Reassign value to global isTablet

    const slides = document.querySelectorAll('.swiper-slide');
    const offerMobile = document.querySelector('.swiper-slide-offer-mobile');

    slides.forEach(slide => {
        const imgElement = slide.querySelector('.swiper-slide-img');
        const txtElement = slide.querySelector('.swiper-slide-txt');
        const imgMobileElement = slide.querySelector('.swiper-slide-img-mobile');
        const txtMobileElement = slide.querySelector('.swiper-slide-txt-mobile');

        if (imgElement) {
            imgElement.classList.toggle('disp-none', isTablet);
        }

        if (txtElement) {
            txtElement.classList.toggle('disp-none', isTablet);
        }

        if (imgMobileElement) {
            imgMobileElement.classList.toggle('disp-none', !isTablet);
        }

        if (txtMobileElement) {
            txtMobileElement.classList.toggle('disp-none', !isTablet);
        }
    });

    if (offerMobile) {
        offerMobile.classList.toggle('disp-none', !isTablet);
    }
}

// Execute the functions on page load
window.addEventListener('load', () => {
    changeClasses();
    adjustImgMobileHeight();
    adjustPaginationPosition();
});

// Execute the functions on resize
window.addEventListener('resize', () => {
    changeClasses();
    adjustImgMobileHeight();
    adjustPaginationPosition();
});
