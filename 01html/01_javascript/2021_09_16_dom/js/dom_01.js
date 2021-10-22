// document.getElementById("first").style.color = "red";
// // const pf = document.getElementById("first"); 
// // const pf = document.querySelector('#first');
// // const pf = document.getElementsByClassName('box')[0];
// // const pf = document.getElementsByTagName('p')[0];
// const pf = document.querySelector('#first span');
// // pf[0].style.background ="darkblue";
// pf.style.background ="darkblue";
const pf = document.querySelector('#first.box');
const pSf = document.querySelector('#first>span');
const sBtn = document.querySelector('.btn');

function change() {
    pf.style.color ="green";
    pf.style.fontSize ="20px";
    pSf.style.display ="none";

    document.querySelector("body").style.background ="black";
    sBtn.style.display ="none"
}
function init() {
    document.querySelector("body").style.background ="initial";
    pf.style.color ="blue";
    pSf.style.display ="initial";//초기화
    pf.style.fontSize ="initial";//초기화
    sBtn.style.display ="initial"//초기화
}