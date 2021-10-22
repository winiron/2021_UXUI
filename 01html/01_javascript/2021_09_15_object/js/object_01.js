const city = ["서울","부산","대구","인천"];//배열

//객체 생성
const car = {
    //속성 지정
    name:"소나타",
    speed:100, 
    color:"dodgerblue",

    //메서드 생성
    start:function(){
        // return car.speed+10;
        return this.speed+100;//this는 자기자신인 "car"를 지칭
    }
}

//출력
// document.write(car.speed);
// document.write(car.start());

function carData(){
    document.getElementsByClassName("box1")[0].innerHTML = car.name;
    document.getElementsByClassName("box2")[0].innerHTML = car.speed;
    document.querySelector(".box3").style.background = car.color;
}