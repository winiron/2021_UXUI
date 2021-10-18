const sampleImg = document.querySelector(".sampleImg");
const totalImg = 122;   // 이미지의 총 개수
const arrayImg = [];    // 배열 생성 
let currentImgNum;      // 현재의 위치 이미지 번호

for (let index=0; index<totalImg; index++) {
    // let imgElem ="images/small/o_intro_small"+(1000 +index)+".jpg";
    let elemImg =`images/small/o_intro_small_${1000+index}.jpg`;
    arrayImg.push(elemImg);
}

window.addEventListener("scroll",function() {
    let scrollY = window.pageYOffset;
    let progress = scrollY / (document.body.offsetHeight - window.innerHeight);
    currentImgNum = Math.round((totalImg -1) * progress);
    console.log(currentImgNum);
    sampleImg.src = arrayImg[currentImgNum];
});