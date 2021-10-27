document.querySelector(".subject").innerHTML = obj[0][1];

for (let index=0; index<obj.length; index++) {
    for (let jdex=0; jdex<obj[index].length; jdex++) {
        document.write(obj[index][jdex]);
    }
    document.write("<br>");  
}