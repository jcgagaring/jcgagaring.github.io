// header
(() => {
    console.log('header');
    const $header = $('.header');

    if ($(this).scrollTop() > 20)
        $header.addClass('scrolled');

    $(window).on('scroll', () => {
        if ($(this).scrollTop() > 20)
            $header.addClass('scrolled');
        else
            $header.removeClass('scrolled');
    });
})();

// scroll to top
(() => {
    console.log('scroll to top');
    const $btnScrollToTop = $('#scrollToTop');

    if ($(this).scrollTop() > 250)
        $btnScrollToTop.addClass('scrolled');
    
    $(window).on('scroll', () => {
        if ($(this).scrollTop() > 250)
            $btnScrollToTop.addClass('scrolled');
        else
            $btnScrollToTop.removeClass('scrolled');
    });

    $btnScrollToTop.click(() => {
        $('html, body').animate({scrollTop: 0}, 1000);
    });
})();

// greetings
(() => {
    const $greetingText = $('#greeting');
    const hour = new Date().getHours();

    const greetings = [
        { start: 6,  end: 12, msg: "Good morning! How are you today? Let's get this bread." },
        { start: 12, end: 18, msg: "Good afternoon! This is your day; don't waste it." },
        { start: 18, end: 22, msg: "Good evening! Day's about to end; do what you desire." },
    ];

    let greeting = "Still awake? You have a long day ahead. Get some rest.";

    for (const g of greetings) {
        if (hour >= g.start && hour < g.end) {
            greeting = g.msg;
            break;
        }
    }

    $greetingText.html(greeting);
})();

// copyright year thing
(() => {
    const $copyrightYear = $('#copyrightYear');
    const yearToday = new Date().getFullYear();

    $copyrightYear.html(yearToday);
})();

// mobile menu
(() => {
    const $mobileMenuButton = $('.menu-button');
    const $mobileMenuCloseButton = $('.close-button');
    const $mobileMenu = $('.mobile-menu, .mobile-menu__back');

    $mobileMenuButton.on('click', () => {
        $mobileMenu.addClass('active');
    });

    $mobileMenuCloseButton.on('click', () => {
        $mobileMenu.removeClass('active');
    });
})();