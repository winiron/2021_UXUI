//요소 삽입 (jQuery)
$("body").append(`
    <div class="glayLayer"></div>
    <div class="overLayer"></div>
`);

//jQuery 문법
$("a.modal").click(function(event) { //$("선택").on("click", function(){})
    event.preventDefault();         // a tag href 기본 이벤트를 막아줌. 
    $(".glayLayer").fadeIn();       // $(selector).fadeIn(speed,easeing, callback) 
    
    // let aHref = $(a.modal).attr("href");
    // $(this) ≒ a.modal 
    let aHref = $(this).attr("href"); // $(selector).attr(attribute) 값을 가져옴 (get)
    $(".overLayer").fadeIn().html(`<img src="${aHref}">`);
    //document.querySelector("").innerHTML = `<img src="${aHref}">` // javaScript 형식
});

$(".glayLayer, .overLayer").click(function() {
    $(".glayLayer, .overLayer").hide();
});