var index1, index2;

for(index1 = 2; index1 <= 9; index1++) {
    document.write(`<div>`);
    document.write(`<h3> ${index1}단 </h3>`);
    for (index2 = 1; index2 <= 9; index2++) {
        document.write(`${index1} X ${index2} = ${index1*index2}<br>`);
    }
    document.write(`</div>`);
}