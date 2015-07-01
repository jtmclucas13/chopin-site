---
---
/* This makes the nav appear when clicking "Menu" */
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

/* This enables smooth scrolling */
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});