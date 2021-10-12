  // $("body").css("background","red").css("padding",100);
            

  let bWidth = $("body").width();
  console.log(`문서크기 : ${bWidth}px`);

  function rSize(){
      if( bWidth > 700 ){
          $("body").css({
          "background":"skyblue",
          "border":"1px solid #000"
          });
      }else{
          $("body").css({"background":"pink"})
      }
  }

 rSize();
 
  $(window).resize(function(){
      bWidth = $("body").width();
      console.log(`문서크기 : ${bWidth}px`);

      rSize();
  })