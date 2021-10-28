function print(){
    let text = '';
    for(let i=0;i<obj.length;i++){
        //document.write( i+1 +"<br>")
        //text += i + "<br>";
        text += `<tr>`;
        for(let j=0;j<obj[i].length;j++){
            text += `<td>${j}</td>`;
        }    
        text +=`</tr>`
    }
    document.write(text)
}

