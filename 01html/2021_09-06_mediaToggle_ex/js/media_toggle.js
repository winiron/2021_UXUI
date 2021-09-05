$(".toggleMenu").click(function(){     
    var toggle = $(".toggleMenu").attr("class");   
    if(toggle == "toggleMenu")  {
        $(".toggleMenu").addClass("active");
        $(".mainMenu").animate({left:0},300);
    } else {
        $(".toggleMenu").removeClass("active");
        $(".mainMenu").animate({left:"-100%"},300);
    }  
});

//[1]화면의 사이즈 변경 => myTopMenu 스타일 내용 삭제
//[2]화면의 사이즈 변경 => toggleMenu의 active를 삭제
//화면 사이즈, 스크롤, 버튼 클릭, 마우스 포인터 : 이벤트
//function(){ } : 이벤트 리스너
$(window).resize(function(){
    // alert("변경 마시요");
    $(".mainMenu").attr("style",""); 
    $(".toggleMenu").removeClass("active");
});