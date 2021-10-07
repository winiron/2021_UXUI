//nowMenu() 함수 정의
function nowMenu(menu) {    // html에서의 nowMenu(인자);에서 넘어온 값 ⇨ menu  
    if (menu == "main") {   // 만약 변수 menu의 값이 "main"이면 
        $(".bar").css("opacity",0)
        console.log("mainPage 연결됨");
    } else { // 변수 menu의 값이 "main"이 아니면~
        // 자바 스크립트
        // document.querySelectorAll("#nav .menu li")[menu].classList.add("active");
        $("#nav .menu li").eq(menu).addClass("active");
        $(".bar").css("left",200*menu); // CSS를 이용 ⇨ "바"를 왼쪽으로 (200*menu)px 이동  
        console.log("subPage 연결됨");
    }

    //$("#nav .menu li").hover(function(){},function(){});
    $("#nav .menu li").hover(
        function() {
            let menuLi  = $(this).index(); // thsi ⇨"#nav .menu li"
            if (menu == "main") { $(".bar").css("opacity",1); }
            $(".bar").css("left",200*menuLi);
        }, 
        function() {
            if (menu == "main") { $(".bar").css("opacity",0); }
            $(".bar").css("left",200*menu);
        }
    );
}