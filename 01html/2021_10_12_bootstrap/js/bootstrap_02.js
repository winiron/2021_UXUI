$(window).scroll(function() {
    let scrollY = $(window).scrollTop();
    if (scrollY > 300) {
        $("#header").addClass("fixed-top");
    } else {
        $("#header").removeClass("fixed-top");
    }
});