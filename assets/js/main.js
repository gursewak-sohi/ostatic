(function() {

    // JS loaded
    let body = document.body;
    body.classList.add('loaded');


    const memberSwiper = document.querySelector('#memberSwiper');
    if (memberSwiper) {
        const swiper = new Swiper('#memberSwiper', {
            slidesPerView: 2,
            spaceBetween: 30,
            pagination: {
                el: "#memberSwiper .swiper-pagination",
            },
            breakpoints: {
                768: {
                    slidesPerView: 5,
                    spaceBetween: 22,
                }
            },
        });
    }

    const communitySwiper = document.querySelector('#communitySwiper');
    if (communitySwiper) {
        const swiper = new Swiper('#communitySwiper', {
            loop: true,
            slidesPerView: 5,
            spaceBetween: 30,
            centeredSlides: true,
            navigation: {
                nextEl: "#communitySwiper .swiper-button-next",
                prevEl: "#communitySwiper .swiper-button-prev",
            },
            pagination: {
                el: "#communitySwiper .swiper-pagination",
            },

        });
    }
})();