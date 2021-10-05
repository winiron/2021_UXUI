$("#thumbnail li").click(function(){
    let num = $(this).index();
    //$("#image>p").hide();
    $("#image>p").hide().eq(num).show()
});

let current = 0; // 초기 값 (변수)
$(".right").click(function() { 
    current++;              // ① current = current + 1
    if(current == 3) {      // ② 만약 current 값 "3" 이면 ⇨ current의 값에 "2"을 대입
        current = 2;
    }
    imgMove();              // ③ 함수 사용
    console.log(current);
});
$(".left").click(function() {
    current--;              // ① current = current - 1
    if (current < 0) {      // ② 만약 current 값 "0"보다 작으면 ⇨ current의 값에 "0"을 대입 
        current = 0;
    }
    imgMove();              // ③ 함수 사용
    console.log(current);  
});
// 함수 지정 : 섬네일 이미지 묶음 죄우 이동 기능
function imgMove() {
    //$(".container>ul").css("left",`-760*${current}px`);
    //$(".container>ul").css("left",-760*current);
    $(".container>ul").stop().animate({left:-760*current},1000,"linear");
}
