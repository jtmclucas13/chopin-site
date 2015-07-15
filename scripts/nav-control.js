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

$(".page-link").click(function(){
  $(".page-link").removeClass("activeNavLink");
  $(this).addClass("activeNavLink");
  $(".trigger").slideUp();
  $("#menu-icon").removeClass("activeNav");
});

/* This enables smooth scrolling */
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      var targetOffset = target.offset().top - $("#menu-icon").outerHeight(true);
      if (target.length) {
        $('html,body').animate({
          scrollTop: targetOffset
        }, 1000);
        return false;
      }
    }
  });
});