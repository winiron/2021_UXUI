//btn click  ⇨ "p"tag .hide() 

//jQuery 형식

const tHtml = "SEOUL";
$(".btn").click(function(){
    $("#text > p").hide();
    $("body").append(`<div class='box'>${tHtml}</div>`);
});


$("body").prepend("자식노드 추가B");

//javaScript 형식
// const btn = document.querySelector(".btn");
// const pTag = document.querySelector("p");

// btn.onclick = function(){
//     // pTag.style.display="none"; // javaScript
//     $(".btn").get(0).style.display="none"; // javaScript + jQuery 혼용
// };