var name = "홍길동";
var engScore = 40;
var mathScore = 80;
var total = (engScore + mathScore)/2

function docPrint(doc) {
    document.write(doc);
}
if (total > 60) {
    // document.write(name+"님은 합격입니다.")
    docPrint("<div class='score'>"+name+"님의 총점은 " + total +  "점 이므로 합격입니다.</div>");
} else {
    // document.write(name+"님은 과락입니다.")
    docPrint("<div class='score'>"+name+"님의 총점은 " + total +  "점 이므로 불합격입니다.</div>");
}

const age = 18;
const gender = "M";
let result;

if (age >= 19) {
    if(gender == "M") { 
        result ="성인 남성"; 
    } else { 
        result ="성인 여성"; 
    }
} else {
    if(gender == "M") { 
        result ="미성년 남성"; 
    } else { 
        result ="미성년 여성"; 
    }
}
docPrint(result);