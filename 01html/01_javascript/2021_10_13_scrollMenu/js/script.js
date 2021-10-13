// 1st
// const oneTop = $(".one").offset().top; 
// const twoTop = $(".two").offset().top; 
// const threeTop = $(".three").offset().top; 

// $(".menu>a").eq(0).click(function(e){
//     e.preventDefault(); // a 태그의 기본 값을 해제.
//     $("html, body").animate({scrollTop:oneTop},300);
// });

// $(".menu>a").eq(1).click(function(e){
//     e.preventDefault(); // a 태그의 기본 값을 해제.
//     $("html, body").animate({scrollTop:twoTop},300);
// });

// $(".menu>a").eq(2).click(function(e){
//     e.preventDefault(); // a 태그의 기본 값을 해제.
//     $("html, body").animate({scrollTop:threeTop},300);
// });

// 2st : offset().top
// $(".menu>a").click(function(e){
//     e.preventDefault(); // a 태그의 기본 값을 해제.
//     let i = $(this).index();
//     console.log(i);
//     let st = $(".scene").eq(i-1).offset().top
//     $("html,body").animate({scrollTop:st},300);
// });

// 3st : hash this.hash
$(".menu>a").click(function(e){ // a테그 클릭 시 ⇨ 
    e.preventDefault(); // a 태그의 기본 값을 해제.
    let target = $(this.hash);
    let st = target.offset().top;

    // $(".menu>a").removeClass();
    // $(this).addClass("on");

    console.log(st);
    $("html,body").animate({scrollTop:st},300);

});

$(window).scroll(function(){
    let scrollY = $(window).scrollTop();
    if (scrollY >= $(".scene").eq(0).offset().top) {
        $(".menu>a").removeClass().eq(0).addClass("on");
    }
    if (scrollY >= $(".scene").eq(1).offset().top) {
        $(".menu>a").removeClass().eq(1).addClass("on");
    }
    if (scrollY >= $(".scene").eq(2).offset().top) {
        $(".menu>a").removeClass().eq(2).addClass("on");
    }
});