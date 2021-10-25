let card = document.querySelectorAll(".card");

// let rotate = true;
// card[0].addEventListener("click",function(){
//     if(rotate == true) {
//         this.classList.add("back");
//     } else {
//         this.classList.remove("back");
//         rotate == true;
//     }
// });


// card[0].addEventListener("click",function(){
//     this.classList.toggle("back");
// });

for (let index=0; index<card.length; index++) {
   card[index].addEventListener("click",function(){
        this.classList.toggle("back");
    }); 
}

let rotate = true;
card[0].addEventListener("mouseover",function(){
    this.classList.add("back");
});
card[0].addEventListener("mouseout",function(){
    this.classList.remove("back");
});