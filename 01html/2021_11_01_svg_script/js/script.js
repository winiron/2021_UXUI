window.addEventListener("scroll",function(){
    if ( window.pageYOffset > 300 ) { // window.pageYOffset의 값이 300보다 크면 ⇨ ①
        document.querySelector("#box").classList.add("on") // ① : #box에 .on삽입
    } else {
        document.querySelector("#box").classList.remove("on") // ② : #box에 .on제거
    }

    let scrollTop = document.querySelector(".scrollTop");
    let windowHeight =  document.querySelector(".windowHeight");
    let scrollHeight = this.document.querySelector(".scrollHeight");

    // 현재스크롤 위치 : window.pageYOffset
    scrollTop.innerHTML = window.pageYOffset;
    // 브라우져 높이 : window.innerHeight
    windowHeight.innerHTML = window.innerHeight; 
    // 실제스크롤높이 : 현재스크롤 위치 - 브라우져높이 
    scrollHeight.innerHTML = document.body.offsetHeight - window.innerHeight;  
})