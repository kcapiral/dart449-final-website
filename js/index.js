// JavaScript Document
var pageNum = 0;
var pages = [];
var didScroll = false;
var pages = [
	"#section1",
	"#section2",
	"#section3",
	"#section4",
	"#section5"
];


$(document).ready(function() {
	AOS.init();

	if ($(window).width() > 1024) {
		$(window).scrollTop(0);

		window.addEventListener('wheel', function(e) {
			if (!didScroll) {
				didScroll = true;
				
				currentPageIdentifier(e.deltaY);
				$(window).scrollTop($(pages[pageNum]).offset().top);

				setTimeout(function() {
					didScroll = false;
				}, 1000);
			}
		});
	}

	$('.toggleParent').click(function(){ 
		$(this).next().toggle("slow");
	});
});


function currentPageIdentifier(scrollDirection) {
	if (scrollDirection > 0) {
		if (pageNum < pages.length-1) {
			pageNum++;
		}
	} else {
		if (pageNum > 0) {
			pageNum--
		}
	}
}

function scrollToAnchor(anchor) {
	$('html, body').animate({
        scrollTop: $("#" + anchor).offset().top
    }, 1000);
}
