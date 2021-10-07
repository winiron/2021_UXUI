const car = $(".car");
const bar = $(".bar");
 
const carStart = bar.position().left; // 바의 시작 위치 ≒ 자동차 시작 위치 ∴ 상수 
const carEnd = carStart + (bar.width() - car.width()); // 자동차 도착 위치 = 자동차의 시작 위치 + (바의 너비 - 자동차의 너비) ∴ 상수 
let current = carStart; // 자동차 현위치   ∴ 변수 
let carStep = 2;        // 자동차 이동거리 ∴ 변수 

setInterval(carMove,30);

function carMove() {
    current += carStep; // current = current + carStep
    if (current > carEnd) {
        carStep = -2;
        car.addClass("rotate");
    } 
    if (current < carStart) {
        carStep = 2;
        car.removeClass("rotate");
    }
    car.css("left",current);
}