$(function () {
    var mixer = mixitup('.product__inner-box');
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        slidesPerView: 1,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })

    $(".rate-star").rateYo({
        rating: 4.5,
        starWidth: "12px"
      });



});