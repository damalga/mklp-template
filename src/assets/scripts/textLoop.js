const txtSlide1 = [
    { titleTop: "100+", titleBottom: "users worldwide" },
    { titleTop: "24/7", titleBottom: "support available" },
    { titleTop: "99.9%", titleBottom: "uptime guarantee" }
];

const txtSlide2 = [
    { titleBoldBottom: "analytics" },
    { titleBoldBottom: "automation" },
    { titleBoldBottom: "integration" },
    { titleBoldBottom: "security" },
    { titleBoldBottom: "scalability" },
    { titleBoldBottom: "performance" },
    { titleBoldBottom: "monitoring" },
    { titleBoldBottom: "reporting" },
    { titleBoldBottom: "optimization" }
];

const txtSlide3 = [
    { titleTop: "50+", titleBottom: "powerful features" },
    { titleTop: "1000+", titleBottom: "integrations available" }
];

const txtSlide4 = [
    { titleTop: "10,000+", titleBottom: "resources & templates" },
    { titleTop: "500+", titleBottom: "tutorials & guides" },
    { titleTop: "1M+", titleBottom: "downloads to date" }
];

let currentIndexSlide1 = 0;
let currentIndexSlide2 = 0;
let currentIndexSlide3 = 0;
let currentIndexSlide4 = 0;

function changeTextSlide1() {
    const slideImgTxtTop1 = document.querySelector('#swiper-slide-img-group-txt-top-slide-1');
    const slideImgTxtBottom1 = document.querySelector('#swiper-slide-img-group-txt-bottom-slide-1');
    const slideImgTxtTop1Mobile = document.querySelector('#swiper-slide-img-group-txt-top-slide-1-mobile');
    const slideImgTxtBottom1Mobile = document.querySelector('#swiper-slide-img-group-txt-bottom-slide-1-mobile');

    if (slideImgTxtTop1 && slideImgTxtBottom1) {
        slideImgTxtTop1.classList.add('fade-out');
        slideImgTxtBottom1.classList.add('fade-out');
        setTimeout(() => {
            const currentText = txtSlide1[currentIndexSlide1];
            slideImgTxtTop1.textContent = currentText.titleTop;
            slideImgTxtBottom1.textContent = currentText.titleBottom;
            slideImgTxtTop1.classList.remove('fade-out');
            slideImgTxtTop1.classList.add('fade-in');
            slideImgTxtBottom1.classList.remove('fade-out');
            slideImgTxtBottom1.classList.add('fade-in');
        },400);
    }

    if (slideImgTxtTop1Mobile && slideImgTxtBottom1Mobile) {
        slideImgTxtTop1Mobile.classList.add('fade-out');
        slideImgTxtBottom1Mobile.classList.add('fade-out');
        setTimeout(() => {
            const currentText = txtSlide1[currentIndexSlide1];
            slideImgTxtTop1Mobile.textContent = currentText.titleTop;
            slideImgTxtBottom1Mobile.textContent = currentText.titleBottom;
            slideImgTxtTop1Mobile.classList.remove('fade-out');
            slideImgTxtTop1Mobile.classList.add('fade-in');
            slideImgTxtBottom1Mobile.classList.remove('fade-out');
            slideImgTxtBottom1Mobile.classList.add('fade-in');
        },400);
    }

    currentIndexSlide1 = (currentIndexSlide1 + 1) % txtSlide1.length;
}

function changeTextSlide2() {
    const slideImgTxtBottom2 = document.querySelector('#swiper-slide-img-group-txt-bold-bottom-slide-2');
    const slideImgTxtBottom2Mobile = document.querySelector('#swiper-slide-img-group-txt-bold-bottom-slide-2-mobile');

    if (slideImgTxtBottom2) {
        slideImgTxtBottom2.classList.add('fade-out');
        setTimeout(() => {
            const currentText = txtSlide2[currentIndexSlide2];
            slideImgTxtBottom2.textContent = currentText.titleBoldBottom;
            slideImgTxtBottom2.classList.remove('fade-out');
            slideImgTxtBottom2.classList.add('fade-in');
        },400);
    }

    if (slideImgTxtBottom2Mobile) {
        slideImgTxtBottom2Mobile.classList.add('fade-out');
        setTimeout(() => {
            const currentText = txtSlide2[currentIndexSlide2];
            slideImgTxtBottom2Mobile.textContent = currentText.titleBoldBottom;
            slideImgTxtBottom2Mobile.classList.remove('fade-out');
            slideImgTxtBottom2Mobile.classList.add('fade-in');
        },400);
    }

    currentIndexSlide2 = (currentIndexSlide2 + 1) % txtSlide2.length;
}

function changeTextSlide3() {
    const slideImgTxtTop3 = document.querySelector('#swiper-slide-img-group-txt-top-slide-3');
    const slideImgTxtBottom3 = document.querySelector('#swiper-slide-img-group-txt-bottom-slide-3');
    const slideImgTxtTop3Mobile = document.querySelector('#swiper-slide-img-group-txt-top-slide-3-mobile');
    const slideImgTxtBottom3Mobile = document.querySelector('#swiper-slide-img-group-txt-bottom-slide-3-mobile');

    if (slideImgTxtTop3 && slideImgTxtBottom3) {
        slideImgTxtTop3.classList.add('fade-out');
        slideImgTxtBottom3.classList.add('fade-out');
        setTimeout(() => {
            const currentText = txtSlide3[currentIndexSlide3];
            slideImgTxtTop3.textContent = currentText.titleTop;
            slideImgTxtBottom3.textContent = currentText.titleBottom;
            slideImgTxtTop3.classList.remove('fade-out');
            slideImgTxtTop3.classList.add('fade-in');
            slideImgTxtBottom3.classList.remove('fade-out');
            slideImgTxtBottom3.classList.add('fade-in');
        },400);
    }

    if (slideImgTxtTop3Mobile && slideImgTxtBottom3Mobile) {
        slideImgTxtTop3Mobile.classList.add('fade-out');
        slideImgTxtBottom3Mobile.classList.add('fade-out');
        setTimeout(() => {
            const currentText = txtSlide3[currentIndexSlide3];
            slideImgTxtTop3Mobile.textContent = currentText.titleTop;
            slideImgTxtBottom3Mobile.textContent = currentText.titleBottom;
            slideImgTxtTop3Mobile.classList.remove('fade-out');
            slideImgTxtTop3Mobile.classList.add('fade-in');
            slideImgTxtBottom3Mobile.classList.remove('fade-out');
            slideImgTxtBottom3Mobile.classList.add('fade-in');
        },400);
    }

    currentIndexSlide3 = (currentIndexSlide3 + 1) % txtSlide3.length;
}

function changeTextSlide4() {
    const slideImgTxtTop4 = document.querySelector('#swiper-slide-img-group-txt-top-slide-4');
    const slideImgTxtBottom4 = document.querySelector('#swiper-slide-img-group-txt-bottom-slide-4');
    const slideImgTxtTop4Mobile = document.querySelector('#swiper-slide-img-group-txt-top-slide-4-mobile');
    const slideImgTxtBottom4Mobile = document.querySelector('#swiper-slide-img-group-txt-bottom-slide-4-mobile');

    if (slideImgTxtTop4 && slideImgTxtBottom4) {
        slideImgTxtTop4.classList.add('fade-out');
        slideImgTxtBottom4.classList.add('fade-out');
        setTimeout(() => {
            const currentText = txtSlide4[currentIndexSlide4];
            slideImgTxtTop4.textContent = currentText.titleTop;
            slideImgTxtBottom4.textContent = currentText.titleBottom;
            slideImgTxtTop4.classList.remove('fade-out');
            slideImgTxtTop4.classList.add('fade-in');
            slideImgTxtBottom4.classList.remove('fade-out');
            slideImgTxtBottom4.classList.add('fade-in');
        },400);
    }

    if (slideImgTxtTop4Mobile && slideImgTxtBottom4Mobile) {
        slideImgTxtTop4Mobile.classList.add('fade-out');
        slideImgTxtBottom4Mobile.classList.add('fade-out');
        setTimeout(() => {
            const currentText = txtSlide4[currentIndexSlide4];
            slideImgTxtTop4Mobile.textContent = currentText.titleTop;
            slideImgTxtBottom4Mobile.textContent = currentText.titleBottom;
            slideImgTxtTop4Mobile.classList.remove('fade-out');
            slideImgTxtTop4Mobile.classList.add('fade-in');
            slideImgTxtBottom4Mobile.classList.remove('fade-out');
            slideImgTxtBottom4Mobile.classList.add('fade-in');
        },400);
    }

    currentIndexSlide4 = (currentIndexSlide4 + 1) % txtSlide4.length;
}

document.addEventListener("DOMContentLoaded", function () {
    changeTextSlide1();
    changeTextSlide2();
    changeTextSlide3();
    changeTextSlide4();
    setInterval(changeTextSlide1, 3000);
    setInterval(changeTextSlide2, 2500);
    setInterval(changeTextSlide3, 4000);
    setInterval(changeTextSlide4, 4000);
});
