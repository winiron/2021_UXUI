const arrData = [];
let sum = 0; // 총합을 저장하는 변수
for(let i=0; i<= 99 ; i++) {
    arrData[i] = i + 1;
}
for(let i=0; i<arrData.length; i++) {
    document.write(arrData[i] +" ");
}
for(let i=0; i<arrData.length; i++){
    // sum = sum + arrData[i];
    sum += arrData[i];
}
document.write("["+sum+"]");