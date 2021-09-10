const img = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg",
    "img5.jpg",
    "img6.jpg",
    "img7.jpg",
    "img1.jpg",
    "img2.jpg",
    "img3.jpg"
];
const imgTxt = [
    "txt1","txt2","txt3","txt4","txt5","txt6","txt7","txt8","txt9","txt0"
]

document.write("<ul class='view clearfix'>")
for(let i=0;i<img.length;i++){
    document.write(`
    <li>
        <img src="./images/${img[i]}">
        <div class="bg"></div>
        <h3>${imgTxt[i]}</h3>
    </li>
    `)
}
document.write("</ul>")