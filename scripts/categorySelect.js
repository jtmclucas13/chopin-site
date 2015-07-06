---
---
$(".selectors li").click(function(){
	var rowID = $(this).parents('div').attr("id");
	$("#"+rowID+" .selectors li").removeClass("activeSelect");
	$(this).addClass("activeSelect");
	var displayIndex = $(this).index() + 1;
	$("#"+rowID+" .descriptors li").removeClass("activeDisplay");
	$("#"+rowID+" .descriptors li:nth-child("+displayIndex+")").addClass("activeDisplay");
});