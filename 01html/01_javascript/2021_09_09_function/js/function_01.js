function name(){
    console.log('hi');
    document.write("안녕하세요");
}
function dan(whatDan,name){ //함수 선언
    document.write(name);
    for(let i=1; i<10; i++) {
        document.write(`${whatDan} X ${i} = ${whatDan*i}<br>`);    
    }
}
dan(4,"홍길동");    //함수 호출
dan(100,"김유신");  //함수 호출

let viewDan = function(){
    console.log("viewDan");
}
viewDan();//함수 호출


let result = 0;
function add(n){
    let sum = 0;//변수 선언
    for(let i=1; i<=n ; i++){
        sum = sum + i;
        // 01  =  00  +  01
        // 03  =  01  +  02
        // 06  =  03  +  03
        // 10  =  06  +  04
        // 15  =  10  +  05
        // 21  =  15  +  06
        // 28  =  21  +  07
        // 36  =  28  +  08
        // 45  =  36  +  09
        // 55  =  45  +  10
    }
    return sum;
}
result = add(10); //함수 호출
document.write(result);

//즉시 실행 함수
(function(){
    
})();