$(".wch-checkbox .on").on("click",function(){

		$(this).css("width" ,"80%" );
		$(this).css("opacity" ,"1" );
		$(".wch-checkbox .off").css("width" ,"18%" );
		$(".wch-checkbox .off").css("opacity" ,"0.3" );
		$(".wch-checkbox").data("checked",true);

})

$(".wch-checkbox .off").on("click",function(){

		$(this).css("width" ,"80%" );
		$(this).css("opacity" ,"1" );
		$(".wch-checkbox .on").css("width" ,"18%" );
		$(".wch-checkbox .on").css("opacity" ,"0.3" );
		$(".wch-checkbox").data("checked",false);

})