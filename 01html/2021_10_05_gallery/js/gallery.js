$("#thumbnail li").click(function(){
    let num = $(this).index();
    //$("#image>p").hide();
    $("#image>p").hide().eq(num).show()
});

let current = 0;
$(".right").click(function(){
    
    current++; //current = current + 1

    if(current == 3){ current = 2;}

    imgMove();
    
    console.log(current);
});
$(".left").click(function(){
    current--; // current = current - 1

    if(current < 0){current = 0}
    

    imgMove();
    
    console.log(current);
});

function imgMove(){
    //$(".container>ul").css("left",`-760*${current}px`)
    //$(".container>ul").css("left",-760*current)
    $(".container>ul").stop().animate({left:-760*current},1000,"linear")
}
