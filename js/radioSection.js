$(window).ready(function () {

    $("li.nav-rad").click(function() {
        $("li.nav-rad").removeClass("active").eq($(this).index()).addClass("active");
        $(".tabs").hide().eq($(this).index()).fadeIn()
    });
});

