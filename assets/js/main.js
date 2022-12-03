(function() {

    // JS loaded
    let body = document.body;
    body.classList.add('loaded');
    window.scrollTo(0, 0);

    // gsap animations
    gsap.registerPlugin(ScrollTrigger);


    // Animation Slide up
    const animationUp = document.querySelectorAll('.animate-up');
    if (animationUp) {
        ScrollTrigger.batch(".animate-up", {
            onEnter: elements => {
                gsap.to(elements, {
                    opacity: 1,
                    y: 0,
                    stagger: 0.12
                });
            },
            once: false
        });
    }

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