let menuPosX =0;
let menuPosY =0;

window.addEventListener("scroll",function(){
    let scroll = window.pageYOffset  / ( document.body.offsetHeight - window.innerHeight )
    document.querySelector(".scroll").innerHTML = scroll * 1000;

    let ratio = scroll * 980 - 400;
    //document.querySelector(".house").style.transform = "translate3d(0,0,"+ ratio +"vw)"
    document.querySelector(".house").style.transform = `translate3d(0,0,${ratio}vw)`
})
window.addEventListener("mousemove",function(e){
    console.log( menuPosY);
    menuPosX = -1 + e.clientX / window.innerWidth * 2;
    menuPosY = 1 - e.clientY / window.innerHeight * 2;
    document.querySelector(".stage").style.transform =`rotateY(${menuPosX*20}deg) rotateX(${menuPosY*20}deg)`;
});