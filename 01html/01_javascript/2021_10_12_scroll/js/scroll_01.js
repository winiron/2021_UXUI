const menuPos = $(".nav").offset().top;             // 네비게이션(메뉴) "top" 값 ⇨ menuPos  
let scrollY = $(window).scrollTop();                // 스크롤 위치 값 ⇨ scrollY
let halfH = $("body").height() / 2;
// $(".menuPos").html(parseInt(menuPos));
$(".menuPos").html(`${parseInt(menuPos)}px`);       // .menuPos에 값(${menuPos}px)을 입력
$(".scrollY").html(`${parseInt(scrollY)}px`);      // .scrollY에 값(${scrollY}px)을 입력

//스크롤 이벤트 생성
$(window).scroll(function() {
    //console.log(window.pageYOffset) // javascript scroll value  ∴ window.pageYOffset : 스크롤 발생 시 ⇨ 현재의 스크롤 위치 값 
    //console.log($(window).scrollTop()); // jquery scroll value
    scrollY = $(window).scrollTop(); // 현재의 스크롤 위치 값 ⇨ scrollY
    $(".scrollY").html(`${parseInt(scrollY)}px`); // .scrollY에 값(${scrollY}px)을 입력

    // 메뉴의 위치(고정) < 스크롤 위치(변동) ⇨ ①(true) / ②(false)
    if (menuPos < scrollY) {
        $(".nav").addClass("fixed"); // ①
    } else {
        $(".nav").removeClass("fixed"); // ②
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