$(".mask").on("click",function(evt){
$(this).fadeOut(1000);
// css("display","none");
$(".rainbow").fadeOut(1000);
// css("display","none");
$(".text").fadeOut(1000);
// css("display","none");
evt.stopPropagation();
})

$(".demo-container").on("click",function(){
	$(".mask").fadeIn(1000);
// css("display","none");
$(".rainbow").fadeIn(1000);
// css("display","none");
$(".text").fadeIn(1000);
// css("display","none");
	// $(".mask").css("display","flex");
	// $(".rainbow").css("display","flex");
	// $(".text").css("display","block");
})