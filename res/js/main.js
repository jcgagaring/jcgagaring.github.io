$(window).ready(() => {
    $('#currentYear').html(new Date().getFullYear());
})

$(window).on('scroll', () => {
    if ($(this).scrollTop() > 16) {
        $('.header').addClass('scrolled');
    }
    else {
        $('.header').removeClass('scrolled');
    }
})