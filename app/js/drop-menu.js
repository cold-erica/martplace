$(function () {

    $(".header__menu-button").on("click", function () {
        $(".nav .nav__list").slideToggle();
    });
    $(".nav__link-home").on("click", function () {
        $(".drop-menu__home").slideToggle();
    });
    $(".nav__link-products").on("click", function () {
        $(".drop-menu__products").slideToggle();
    });
    $(".nav__link-wordpress").on("click", function () {
        $(".drop-menu__wordpress").slideToggle();
    });
    $(".header__account").on("click", function () {
        $(".drop-menu__account").slideToggle();
    });
    $(".menu__alarm").on("click", function () {
        $(".drop-menu__alarm").slideToggle();
    });
    $(".menu__mail").on("click", function () {
        $(".drop-menu__messages").slideToggle();
    });
    $(".menu__cart").on("click", function () {
        $(".drop-menu__cart").slideToggle();
    });
    $(".menu__pages").on("click", function () {
        $(".drop-menu__pages").slideToggle();
    });

});