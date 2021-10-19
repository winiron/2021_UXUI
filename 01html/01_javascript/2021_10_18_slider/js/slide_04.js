const banner = $("#wrap li");
const bannerCount = banner.length;
let indexCurrent = 0;
let index;
let overBtn = false;

$(".next").click(function() { // 콜백함수로 사용

    if (overBtn == false) {
        overBtn = true;
        index = indexCurrent + 1; 
        // if( index == 5 ) { index = 0 }
        if (index == bannerCount) { 
            index = 0;
            indexCurrent = bannerCount - 1;
        }
        slider("next");
    }

}); 
$(".prev").click(function() { // 콜백함수로 사용

    if (overBtn == false) {
        overBtn = true;
        index = indexCurrent - 1; 
        if (index == -1) {
            index = bannerCount - 1 ;
            indexCurrent = 0;
        }
        slider("prev");
    }

}); 

//함수 생성
function slider(view) {
    let currentEl = banner.eq(indexCurrent);
    let nextel = banner.eq(index);

    $(".pager span").removeClass("active").eq(index).addClass("active");
    if(view == "next") { // view 값이 "next" 일 경우 ⇨ 
        currentEl.eq(0).css("left",0).stop().animate({left:"-100%"},300);
        nextel.css({left:"100%"}).stop().animate({left:0},300,function(){overBtn=false});
    } else {
        currentEl.eq(0).css("left",0).stop().animate({left:"100%"},300);
        nextel.css({left:"-100%"}).stop().animate({left:0},300,function(){overBtn=false});
    }
    indexCurrent = index; //  current 
};

$(".pager span").click(function(){
    index = $(this).index();
    slider("next");
});