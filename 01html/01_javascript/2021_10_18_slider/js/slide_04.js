const banner = $("#wrap li");            // banner Element   
const bannerCount = banner.length;      // 전체 이미지 개수
let indexCurrent = 0;                   // 인덱스(현)
let index;                              // 인덱스
let overBtn = false;                    // 2중 클릭 방지

// 콜백함수로 사용
$(".next").click(function() { 
    // 2중 클릭 방지
    if (overBtn == false) { 
        overBtn = true;                     // ① overBtn ⇦ true
        index = indexCurrent + 1;           // ② 인덱스 ⇦ 인덱스(현) + 1
        // if( index == 5 ) { index = 0 }
        if (index == bannerCount) {         // ③ 인덱스 == 전체 이미지 개수
            index = 0;                      // ④ 인덱스 ⇦ 0
            indexCurrent = bannerCount - 1; // ⑤ 인덱스(현) ⇦ 전체 이미지 개수 -1
        }
        slider("next");                     // ⑥ slider()함수 실행  ∴parameter : "next"
    }

}); 

// 콜백함수로 사용
$(".prev").click(function() { 
    // 2중 클릭 방지
    if (overBtn == false) {
        overBtn = true;                     // ① overBtn ⇦ true
        index = indexCurrent - 1;           // ② 인덱스 ⇦ 인덱스(현) - 1 
        if (index == -1) {                  // ③ 인덱스 == -1
            index = bannerCount - 1 ;       // ④ 인덱스 ⇦ 전체 이미지 개수 -1
            indexCurrent = 0;               // ⑤ 인덱스(현)
        }
        slider("prev");                     // ⑥ slider()함수 실행  ∴parameter : "prev"
    }

}); 

// slider() 함수 생성
function slider(view) {
    let indexCurrentNumber = banner.eq(indexCurrent);   // indexCurrentNumber ⇦ banner의 인덱스(현) 번호
    let indexNextNumber = banner.eq(index);            // indexNextNumber ⇦  banner의 인덱스 번호

    $(".pager span").removeClass("active").eq(index).addClass("active");

    if (view == "next") { // view 값이 "next" 일 경우
        indexCurrentNumber.eq(0).css("left",0).stop().animate({left:"-100%"},300);
        indexNextNumber.css({left:"100%"}).stop().animate({left:0},300,function(){overBtn=false});
    } else {
        indexCurrentNumber.eq(0).css("left",0).stop().animate({left:"100%"},300);
        indexNextNumber.css({left:"-100%"}).stop().animate({left:0},300,function(){overBtn=false});
    }
    indexCurrent = index; //  indexCurrent ⇦ index   
};

$(".pager span").click(function(){
    index = $(this).index();
    slider("next");
});

// 휠마우스 함수 
$("#wrap").mousewheel(function(e,delta) {
    if(delta<0) {
        console.log("down");
        $(".next").trigger("click");
    } else {
        console.log("up");
        $(".prev").trigger("click");
    }
});