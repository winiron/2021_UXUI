const videoElem = document.querySelector(".sampleVideo");

const bar = document.querySelector(".bar");

// 스크롤 이벤트 생성
window.addEventListener("scroll",function(){
    let scrollY = window.pageYOffset;
    const bodyHeight = document.body.offsetHeight;
    let windowHeight = window.innerHeight;
    let scrollHeigth =  bodyHeight - windowHeight;

    let progress = scrollY / scrollHeigth;
    console.log(progress);

    //videoElem.style.opacity = progress; // 위치 값 ⇨ opacity 조절
    bar.style.width = progress * 100 + "%";
    
    videoElem.currentTime = videoElem.duration * progress;
});