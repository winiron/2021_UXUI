setInterval(slider,3000); // 함수사용

let current = 0;
let num = $("#wrap ul li").length;
// 함수 생성
function slider(){

    $("#wrap li").eq(current).css("left",0).stop().animate({"left":"-100%"},1000);
    current++;
    if (current == num) {
        current=0;
    }
    $("#wrap li").eq(current).css("left","100%").stop().animate({"left":0},1000);
}