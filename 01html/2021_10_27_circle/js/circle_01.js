// 자바스크립트
// window.addEventListener("scroll",function(){});
window.addEventListener("scroll",function(){
    let scrollY = window.pageYOffset;
    // console.log(scrollY);
    if (scrollY > 200 ) {
        document.querySelector("#wrap").classList.add("on");
    } else {
        document.querySelector("#wrap").classList.remove("on");
    }
});

// 제이쿼리
// $(window).scroll(function(){
//     if($(windwo).scrolltop() > 200) {
//         $("#wrap").addClass("on");
//     }
//         $("#wrap").removeClass("on");
// });