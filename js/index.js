// JavaScript Document
var pageNum = 0;
var pages = [];

$(document).ready(function() {
	window.addEventListener('wheel', function(e) {
		changeSection(e.deltaY);
	});

	$('.toggleParent').click(function(){ 
		$(this).next().toggle("slow");
	});
});

function scrollToAnchor(anchor) {
	$('html, body').animate({
        scrollTop: $("#" + anchor).offset().top
    }, 1000);
}

function changeSection(scrollDirection) {
	if (scrollDirection > 0) {
		pageNum++;
		
	} else {
		pageNum--
	}
}