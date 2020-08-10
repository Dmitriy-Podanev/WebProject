$(window).on('scroll', function () {
    if (!$(window).scrollTop()) {
        $('#header').removeClass("is-scrolling");
    } else {
        $('#header').addClass("is-scrolling");
    }

});

