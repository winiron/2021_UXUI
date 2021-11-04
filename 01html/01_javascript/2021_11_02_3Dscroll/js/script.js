// ① 문서의 높이    : document height     ⇨ document.body.offsetHeight
// ② 브라우저의 높이    : browser height      ⇨ window.innerHeight
// ③ 스크롤의 위치(값)  : scroll location     ⇨ window.pageYOffset + scroll event 

const stcikBar = document.querySelector(".stick"); 
const innerArea = document.querySelector(".innerArea");
let maxScroll;

// 리사이즈 함수
window.addEventListener("resize",function(){
    view(); // view 함수 실행
});

// 스크롤 함수
window.addEventListener("scroll",function(){
    let scroll = window.pageYOffset / maxScroll;
    let move = scroll * 980 - 500;
    console.log(scroll);
    //stcikBar.style.width = scroll * 100 + "%";
    stcikBar.style.width = `${scroll*100}%`
    innerArea.style.transform = `translate3d(0,0,${move}vw)`;
});

// view 함수
function view() {
    maxScroll = document.body.offsetHeight - window.innerHeight;
}
view(); // view 함수 실행