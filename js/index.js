// JavaScript Document
var pageNum = 0;
var pages = [];

$(document).ready(function() {
	window.addEventListener('wheel', function(e) {
		changeSection(e.deltaY);
	});
});

function changeSection(scrollDirection) {
	if (scrollDirection > 0) {
		pageNum++;
		
	} else {
		pageNum--
	}
}