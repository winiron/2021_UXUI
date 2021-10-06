function nowMenu(menu) { // "main" ⇨ menu  ∴ "main"값을 변수 meun에 저장
    if(menu == "main") {
        $(".bar").css("opacity",0)
        console.log("mainPage 연결됨");
    } else {
        // 자바 스크립트
        // document.querySelectorAll("#nav .menu li")[menu].classList.add("active");
        $("#nav .menu li").eq(menu).addClass("active");
        $(".bar").css("left",200*menu);
        console.log("subPage 연결됨");
    }
    $("#nav .menu li").hover(function(){
        let menuLi  = $(this).index();

        if(menu == "main") {
            $(".bar").css("opacity",1);
        }
        $(".bar").css("left",200*menuLi);
        }, 
        
        function() {
            if(menu == "main") {
                $(".bar").css("opacity",0);
            }
            $(".bar").css("left",200*menu);
        }
    );
}