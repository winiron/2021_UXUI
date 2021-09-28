
const menu = document.querySelector(".menu"); //전역변수

window.addEventListener("scroll",function(){
    let scroll = window.pageYOffset;
    let y = document.querySelector(".scroll");
    //const menu = document.querySelector(".menu");//지역변수
    y.innerHTML = scroll;

    if (scroll > 500) {
        // menu.style.position = "fixed";
        // document.querySelector(".menu").style.top = "0";
        menu.classList.add("fixed") // jQuery : addClass("fixed")
    } else {
        // menu.style.position = "absolute";
        // menu.style.top = "20px";
        menu.classList.remove("fixed") // jQuery : removeClass("fixed")
    }
});