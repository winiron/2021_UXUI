const menuPos = $(".nav").offset().top;
// $(".menuPos").html(parseInt(menuPos));
$(".menuPos").html(`${menuPos}px`);



let scrollY = $(window).scrollTop();
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
});

