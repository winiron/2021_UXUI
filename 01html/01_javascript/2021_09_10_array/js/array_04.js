// const cityArr =[];
const city = new Array("SEOUL","BUSAN","DAEGU","DAEJUN","INCHUN","ULSAN");
            
function printArr() {
    let print = "";
    for(let i=0; i<city.length; i++){
        // document.write(city[i]+" ");
        print = print + city[i] + " ";
    }
    // document.write(print+" ");
    document.getElementsByClassName("box")[0].innerHTML = print;
}