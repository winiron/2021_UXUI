//btn click  ⇨ "p"tag .hide() 

//jQuery
// $(".btn").click(function(){
//     $("#text > p").hide();
// });

//javaScript
const btn = document.querySelector(".btn");
const pTag = document.querySelector("p");

btn.onclick = function(){
    pTag.style.display="none";
};