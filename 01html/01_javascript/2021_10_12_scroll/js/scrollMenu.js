// $(document).ready(function(){});
// $(function(){}); ∴ 즉시 실행 함수
// (() => {})() ∴ 즉시 실행 함수

$(document).mousewheel(function(event,delta){
    console.log(delta); // SCROLL 위 ⇨ +1
    $(window).scroll(function(){
        let scrollY = $(window).scrollTop(); // window.pageYOffset ∴ javaScript
        if (scrollY > 200) {
            // $(".menu").addClass("fixed");
            if (delta > 0) {
                $(".menu").addClass("fixed");
            } else {
                $(".menu").removeClass("fixed");
            }
        } else {
            $(".menu").removeClass("fixed");
        }
    });
});