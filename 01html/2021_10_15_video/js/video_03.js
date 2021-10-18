const sampleImg = document.querySelector(".sampleImg");
const totalImg = 122;   // 이미지의 총 개수
const arrayImg = [];    // 배열 생성 
let currentImgNum;      // 현재의 위치 이미지 번호
let progress;           // 0~1사이 값
let hRatio;

for (let index=0; index<totalImg; index++) {
    // let imgElem ="images/small/o_intro_small"+(1000 +index)+".jpg";
    let elemImg =`images/small/o_intro_small_${1000+index}.jpg`;
    arrayImg.push(elemImg);
}
//  스크롤 이벤트 발생
window.addEventListener("scroll",function() {
    progress = window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
    view(); // view() 함수 실행
});
// 리사이즈 이벤트 발생
window.addEventListener("resize",function() {
    hRatio = window.innerHeight / 1080;
    view(); // view() 함수 실행
});

// view() 함수 생성
function view(){
    currentImgNum = Math.round(( totalImg - 1 ) * progress);
    console.log(currentImgNum)
    sampleImg.src = arrayImg[currentImgNum];
    sampleImg.style.transform = `translate3d(-50%,-50%,0) scale(${hRatio})`
}