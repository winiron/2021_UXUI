$("#fullpage").fullpage({
    menu:".navbar-nav",
    anchors:["m1st","m2st","m3st","m4st"],
    navigation:true,
    navigationPosition:'fp-right',
    navigationTooltips: ['First', 'Second', 'Third','Fourth'],
    responsiveWidth:768,
    
    afterLoad:function(anchorslink,index){
        console.log(anchorslink+','+index)

        if (index == 1) {
            $(".view01").addClass("on");
        } else {
            $(".view01").removeClass("on"); 
        }
        if (index==2) {
            $(".view02").addClass("on");
        } else {
            $(".view02").removeClass("on"); 
        }
    }
});