$(function () {
    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 350,
        from: 30,
        to: 300,
        prefix: "$"
    });

    $(".rate-star").rateYo({
        rating: 4.5,
        starWidth: "16px",
        normalFill: "#ffffff",
        readOnly: true
    });

    $('.list__btn').on('click',function(){
        $('.product__item').addClass('page-list');
        $('.list__btn').addClass('active');
        $('.grid__btn').removeClass('active')
    });
    $('.grid__btn').on('click',function(){
        $('.product__item').removeClass('page-list');
        $('.grid__btn').addClass('active');
        $('.list__btn').removeClass('active')
    });

});