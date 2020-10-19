$(function () {
    $('.single-product__tabs .tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.single-product__tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.single-product__tabs .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    })

    $(".rate-star").rateYo({
        rating: 4.5,
        starWidth: "16px",
        normalFill: "#ffffff",
        readOnly: true
    });
});