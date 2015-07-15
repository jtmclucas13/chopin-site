var originalText;
$("span").mouseenter(function(){
  $(this).addClass("polishHover");
  originalText = $(this).html();
  $(this).html( $(this).attr("hoverText") );
});
$("span").mouseleave(function(){
  $(this).removeClass("polishHover");
  $(this).html(originalText);
});

//google analytics
//throw live