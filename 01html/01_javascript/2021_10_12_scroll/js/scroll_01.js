const menuPos = $(".nav").offset().top;
let scrollY = $(window).scrollTop();
let halfH = $("body").height() / 2;
// $(".menuPos").html(parseInt(menuPos));
$(".menuPos").html(`${menuPos}px`);
$(".scrollY").html(`${scrollY}px`)

$(window).scroll(function(){
    //console.log(window.pageYOffset) // javascript scroll value
    //console.log($(window).scrollTop()); // jquery scroll value
    scrollY = $(window).scrollTop();
    $(".scrollY").html(`${scrollY}px`);

    if(menuPos < scrollY){
        $(".nav").addClass("fixed");
    } else {
        $(".nav").removeClass("fixed");
    }
    if(scrollY > halfH){
        $(".top").show()
    } else {
        $(".top").hide()
    }
});

// 클릭  ⇨ 상단으로 이동
$(".top").click(function(){
    $("html, body").animate({scrollTop:0},1000);
});

