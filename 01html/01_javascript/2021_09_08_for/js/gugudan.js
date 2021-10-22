for(var i=2; i<10; i++) {
    // document.write("3 X "+ i + "=" + i*3 + "<br>");
    document.write(`<div class="box"><span>구구단 ${i}단</span> <br>`);
    for(let j="1"; j<10; j++){
        document.write(`${i} X ${j} = ${i*j}<br>`);
    }  
document.write('</div>');
}