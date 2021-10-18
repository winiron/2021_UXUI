// $("#wrap li").eq(0).css({"left":0}).animate({"left":"-100%"},1000);
// $("#wrap li").eq(1).css({"left":"100%"}).animate({"left":0},1000);

let current = 0;
setInterval(slider,5000); // setInterval() 함수 실행

// slider() 함수 생성
function slider(){
    //$("#wrap li").eq(current).css({"left":0}).animate({"left":"-100%"},1000);
    move(current,0,"-100%"); // move() 함수 실행
    current++;
    if(current == 5) { current = 0; }
        //$("#wrap li").eq(current).css({"left":"100%"}).animate({"left":0},1000);
        move(current,"100%",0); // move() 함수 실행
    };

    // move() 함수 생성
    function move(indexCurrent, start, end){
        $("#wrap li").eq(indexCurrent).css("left",start).animate({"left":end},1000);
    };