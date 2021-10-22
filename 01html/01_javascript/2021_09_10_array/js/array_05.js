// const cityArr =[];

// 배열 변수
const printArr = new Array("SEOUL","BUSAN","DAEGU","DAEJUN","INCHUN","ULSAN");

// 함수 생성
function print() {
    let sum ="";
    for(let i=0; i<printArr.length; i++) {
        sum = sum + printArr[i] + " ";
    }
    // document.getElementsByClassName("box")[0].innerHTML = sum;
    // document.querySelector(".box").innerHTML = sum;
    // document.querySelectorAll(".box").innerHTML = sum;

    const boxDiv = document.getElementsByClassName("box");
    for(let i=0; i<boxDiv.length; i++){
        boxDiv[i].innerHTML = sum;
    }
}