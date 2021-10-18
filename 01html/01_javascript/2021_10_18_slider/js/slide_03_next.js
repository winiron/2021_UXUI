// [1] next 버튼  실행 ⇨ [2] 함수 실행 : 슬라이드 작동 ⇨ [3] 트리거 사용 하여 next 버튼 실행 
// [4] next 이중 클릭 ⇨ overBtn = false 
// [5] 이전 버튼 생성

let current = 0;
let overBtn = false;

            // nextSlider() 함수 생성
            function nextSlider() {

                if (overBtn == false) { 
                    overBtn = true;
                    $("#wrap li")
                        .eq(current)
                        .css({"left":0})
                        .stop()
                        .animate({"left":"-100%"},400);
                    current++;
                    if (current ==5 ) { current = 0 }
                    $("#wrap li")
                        .eq(current)
                        .css({"left":"100%"})
                        .stop()
                        .animate({"left":0},400,function(){overBtn=false});
                    console.log(current);
                }
            };

            // prevSlider() 함수 생성
            function prevSlider() {

                if (overBtn == false) { 
                    // 0 ⇨ 100%
                    $("#wrap li")
                        .eq(current)
                        .css({"left":0})
                        .stop()
                        .animate({"left":"100%"});
                    
                    current--; // current = current - 1;                    
                    if( current == -1) { current = 4; }

                    // 4(-100%) ⇨ 0
                    $("#wrap li")
                        .eq(current)
                        .css({"left":"-100%"})
                        .stop()
                        .animate({"left":0},400,function(){overBtn=false});
                    console.log(current);
                };
            };


            $(".next").click(function() { // .nextBtn "Click" ⇨ nextSlider() 함수 실행
                nextSlider(); // nextSlider() 함수 실행
            });

            $(".prev").click(function() {
                prevSlider();
            });


            //  autoplay  함수
            // setInterval(function(){
            //     $(".next").trigger("click");
            // },3000);