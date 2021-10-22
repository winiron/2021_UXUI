// const cityArr =[];
const city = new Array("seoul","busan","daegu");

// 함수 생성 
function print() {
    let print ="";
    for(let i=0; i<city.length; i++) {
        // document.write(city[i]+"<br>");
        print = print + city[i] +" " ;
    }
    // document.write(print);
    document.getElementsByClassName("box")[0].innerHTML = print;
}
// print();  