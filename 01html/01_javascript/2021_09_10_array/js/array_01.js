const name = "Hong Gil Dong";
const city = ["seoul", "busan", "daego", "daejung", "inchun"];
const kimJumsu = ["Kim",80,50,40,30,90];
const leeJumsu = ["Lee",80,50,40,30,90];


for(let i=0; i<city.length ; i++) {
    document.write(`${i+1}. 도시명 : ${city[i]} <br>`);
}
let sum = 0;
for(let i=0; i<kimJumsu.length; i++) { 
    sum = sum + kimJumsu[i];
}
document.write(`평균 : ${sum/kimJumsu.length} <br>`);

document.getElementById("sub1").innerHTML = kimJumsu[0];
document.getElementById("sub2").innerHTML = kimJumsu[1];
document.getElementById("sub3").innerHTML = kimJumsu[2];
document.getElementById("sub4").innerHTML = kimJumsu[3];
document.getElementById("sub5").innerHTML = kimJumsu[4];
document.getElementById("total").innerHTML = sum;
document.getElementById("avg").innerHTML = sum/kimJumsu.length;