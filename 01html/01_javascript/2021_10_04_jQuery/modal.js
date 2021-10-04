$("body").append(`<div class="glayLayer"></div><div class="overLayer"></div>`);

$("a.modal").click(function(e){
    e.preventDefault();        // a tag href 기본 이벤트를 막아줌. 
    $(".glayLayer").fadeIn();
    let aHref = $(this).attr("href");
    $(".overLayer").fadeIn().html(`<img src="${aHref}">`);
});

$(".glayLayer, .overLayer").click(function() {
    $(".glayLayer, .overLayer").hide();
});