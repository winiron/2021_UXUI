const menuPos = $(".nav").offset().top;
let scrollY = $(window).scrollTop();
let halfH = $("body").height() / 2;
// $(".menuPos").html(parseInt(menuPos));
$(".menuPos").html(`${menuPos}px`);
$(".scrollY").html(`${scrollY}px`);

$(window).scroll(function() {
    //console.log(window.pageYOffset) // javascript scroll value
    //console.log($(window).scrollTop()); // jquery scroll value
    scrollY = $(window).scrollTop();
    
    $(".scrollY").html(`${scrollY}px`);

    if (menuPos < scrollY) {
        $(".nav").addClass("fixed");
    } else {
        $(".nav").removeClass("fixed");
    }

    if ( scrollY > $(".car1").offset().top - 800 ) {
        $(".car1").addClass("move1")
    } else {
        $(".car1").removeClass("move1")
    }

    if ( scrollY > $(".car2").offset().top - 800 ) {
        $(".car2").addClass("move2")
    } else {
        $(".car2").removeClass("move2")
    }

    if (scrollY > halfH) {
        $(".top").fadeIn();
    } else {
        $(".top").fadeOut();
    }
});

// 클릭  ⇨ 상단으로 이동
$(".top").click(function(){
    $("html,body").animate({scrollTop:0},1000);
});