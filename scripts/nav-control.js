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