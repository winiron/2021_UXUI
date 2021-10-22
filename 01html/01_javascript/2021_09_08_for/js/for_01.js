const dan = 3;

for(let i=2; i<10; i++){
    // document.write(`${dan} X ${i} = ${dan*i}<br>`);
    document.write(dan + "X" + i + "=" + dan*i +"<br>");
}
for(let i=2; i<10; i++){
    document.write(`<div class="dan"><h2>${i}단</h2>`);
    for(let j=1; j<10; j++){
            document.write(`${i} X ${j} = ${i*j}<br>`);
    }
}
document.write(`</div>`);

let x = 1 ;
let sum = 0;

// do~while문
while(x <= 100) {
    sum = sum + x; // sum += x;
    x++;    //x = x +1 
}
document.write(sum);