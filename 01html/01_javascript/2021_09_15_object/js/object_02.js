const name = ["홍길동", "이순신", "김철수"];
const kor = [80,50,30];
const eng = [70,50,100];

for(let i=0; i<name.length; i++) {
    // document.write(mem[i]+"<br>");
    document.write(
        `
        <ul class="table clearfix">
            <li>${name[i]} : </li>
            <li>${kor[i]}점</li>
            <li>${eng[i]}점</li>
        </ul>
        `
    );
}
let totalScore = "";
const student = [
    {name:'hong', kor:80, eng:70},
    {name:'lee', kor:50, eng:50},
    {name:'kim', kor:30, eng:100},
    {name:'kang', kor:30, eng:80}
];
for(let i=0; i<student.length; i++) {
    // memTotal = memTotal + mem1[i].name;
    totalScore += 
        `<ul class="table clearfix">
            <li>${student[i].name} : </li>
            <li>${student[i].eng}점</li>
            <li>${student[i].kor}점</li>
        </ul>`
    ;
}
document.write(totalScore);