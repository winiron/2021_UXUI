// 버튼 class .btn [클릭] => 리스터 등록(.box의 폰트 색을 빨간색으로 변경)
const btn = document.getElementsByClassName("btn");
const box = document.getElementsByClassName("box");
            


// [2] 리스너를 프로퍼티(함수)로 등록
// btn[0].onclick = onBox;
// function onBox(){
// box[0].style.color = "red";
// }

// btn[0].onclick = function(){
//     box[0].style.color = "red";
// }
            
//[3] addEventLsitener() 메서드 활용 / 주 사용 

//span dom 구해서 ⇨ collection
// const span = document.getElementsByTagName("span");
const span = document.querySelectorAll(".box span");
const spanAll1 = document.getElementsByClassName("box")[0].getElementsByTagName("span");
const spanAll2 = box[0].getElementsByTagName("span");
            
btn[0].addEventListener("click",function(){
    for(let i=0; i<span.length; i++) {
        spanAll2[i].style.color ="blue"
    }
});

// btn[0].addEventListener("click",onBox);
// function onbox(){};


//jQuery
// $(".btn").click(function(){
//     $(".box").css("color","red");
// });