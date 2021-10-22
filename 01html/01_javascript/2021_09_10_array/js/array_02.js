const hongJumsu = ["Hong",80,90,50,40,70];
let total  = hongJumsu[1] + hongJumsu[2] + hongJumsu[3] + hongJumsu[4] + hongJumsu[5];
let avg  = total/(hongJumsu.length-1);

document.getElementsByClassName("name")[0].innerHTML =hongJumsu[0];
document.getElementsByClassName("sub")[0].innerHTML = hongJumsu[1];
document.getElementsByClassName("sub")[1].innerHTML = hongJumsu[2];
document.getElementsByClassName("sub")[2].innerHTML = hongJumsu[3];
document.getElementsByClassName("sub")[3].innerHTML = hongJumsu[4];
document.getElementsByClassName("sub")[4].innerHTML = hongJumsu[5];
document.getElementsByClassName("total")[0].innerHTML = total;
document.getElementsByClassName("avg")[0].innerHTML = avg;

const spanTag = document.getElementsByTagName("span");

// spanTag[0].style.background ="blue"
// spanTag[0].style.color ="white"

for(let i=0; i<spanTag.length; i++){
    spanTag[i].style.background ="blue" 
    spanTag[i].style.color ="white" 
}