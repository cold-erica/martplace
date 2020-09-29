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

    var mySwiper2 = new Swiper('.followers__swiper-container', {
        direction: 'horizontal',
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        centeredSlides: true,
        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: false,
        // },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    });

    var mySwiper3 = new Swiper('.testimonial__slider', {
        direction: 'horizontal',
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
    });

    $(".rate-star").rateYo({
        rating: 4.5,
        starWidth: "17px",
        normalFill: "#ffffff",
        readOnly: true
    });
    
    $(".header__menu-button").on("click",function(){
        $(".nav .nav__list").slideToggle();
    });
    $(".nav__link-home").on("click",function(){
        $(".drop-menu__home").slideToggle();
    });
    $(".nav__link-products").on("click",function(){
        $(".drop-menu__products").slideToggle();
    });
    $(".nav__link-wordpress").on("click",function(){
        $(".drop-menu__wordpress").slideToggle();
    });
    $(".header__account").on("click",function(){
        $(".drop-menu__account").slideToggle();
    });
    $(".menu__alarm").on("click",function(){
        $(".drop-menu__alarm").slideToggle();
    });
    $(".menu__mail").on("click",function(){
        $(".drop-menu__messages").slideToggle();
    });
    $(".menu__cart").on("click",function(){
        $(".drop-menu__cart").slideToggle();
    });
    $(".menu__pages").on("click",function(){
        $(".drop-menu__pages").slideToggle();
    });
    
});