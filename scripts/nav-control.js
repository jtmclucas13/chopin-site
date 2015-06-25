---
---
$("#menu-icon").click(function(event){
	event.preventDefault();
	if( $(this).hasClass("activeNav") ){
		$(this).removeClass("activeNav");
		$(".trigger").slideUp();
	}else{
		$(this).addClass("activeNav");
		$(".trigger").slideDown();
	}
	return false;
});

/*$(window).resize(function(){
	$(".homepage-heading").css("font-size", $(window).width() / 100);
});*/