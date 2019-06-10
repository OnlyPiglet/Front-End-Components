




var index = 1;

window.setInterval(function(){ 

	var sc = window.document.getElementsByClassName("wch-scroll-picture")[0];
	var height = document.body.clientHeight;
	sc.scrollTo({top:height*index,behavior:"smooth"})
	index = index +1;

	if(index == 4){
		index = 0;
	}

 }, 2000);


