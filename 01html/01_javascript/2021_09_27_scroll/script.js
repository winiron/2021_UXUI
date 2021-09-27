window.addEventListener("scroll",function(){
    let scroll = window.pageYOffset;
    let y = document.querySelector(".scroll");
    const menu = document.querySelector(".menu");
    y.innerHTML = scroll;

    if (scroll > 300) {
        menu.style.position = "fixed";
        document.querySelector(".menu").style.top = "0";
    } else {
        menu.style.position = "absolute";
        menu.style.top = "20px";
    }
});