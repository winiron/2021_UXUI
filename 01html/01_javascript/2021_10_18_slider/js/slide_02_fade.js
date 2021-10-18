let current = 0;
let zIndex = 0;

//$("#wrap li").eq(1).css({"opacity":0}).animate({"opacity":1},1000);
setInterval(slider,3000);

function slider(){
    current++;
    if (current ==5) { current = 0; }
    $("#wrap li").eq(current).css({"opacity":0,"z-index":zIndex++}).animate({"opacity":1},1000);
}