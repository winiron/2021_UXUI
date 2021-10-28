function printSub(){
    for(let i=0;i<obj.length;i++){
        if(obj[i][0] == "전공필수"){
            document.write("<tr class='bg'>")
        }else{
            document.write("<tr>")
        }
        for(let j=0;j<obj[i].length;j++){
            document.write("<td>" + obj[i][j] + "</td>")
        }

        document.write("</tr>")
    }
}