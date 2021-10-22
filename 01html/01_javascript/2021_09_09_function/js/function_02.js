let result = 0;
           
function add(name, n) {
    let sum = 0;
    for( let i=1; i<=n; i++){
        sum = sum +i;
    }
    return sum;
}
result = add("Hong",10); //함수 호출
let result1 = add("Lee", 100)
// document.write("총 합은 : "+result+"점 입니다.");
document.write(`총합은 : ${result1}점 입니다.`);
document.getElementById("hap").innerHTML = result1;
//$("#hap").html(result);//jQuery
document.getElementsByClassName("han")[1].style.backgroundColor = "red";
document.getElementsByClassName("han")[1].style.color = "white";
//$(".han").eq(0).css("color","red");//jQuery