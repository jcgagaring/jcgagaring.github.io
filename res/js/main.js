$(window).ready(() => {
    $('#currentYear').html(new Date().getFullYear());

    $('span#greeting').html(greeting());
})

$(window).on('scroll', () => {
    if ($(this).scrollTop() > 16) {
        $('.header').addClass('scrolled');
    }
    else {
        $('.header').removeClass('scrolled');
    }
})

function greeting() {
    const hour = new Date().getHours();

    let greeting = "Still awake? You have a long day ahead. Get some rest.";

    const greetings = [
        { start: 6,  end: 12, msg: "Good morning! How are you today? Let's get this bread." },
        { start: 12, end: 18, msg: "Good afternoon! This is your day; don't waste it." },
        { start: 18, end: 22, msg: "Good evening! Day's about to end; do what you desire." },
    ];

    for (const g of greetings) {
        if (hour >= g.start && hour < g.end) {
            greeting = g.msg;
            break;
        }
    }

    return greeting;
};