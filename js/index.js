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
				}, 1750);
			}
		});
	} else {
		$('.toggleParent').click(function(){ 
			$(this).next().toggle("slow");
		});
	}

	$('#nav-burger').click(function() {
		$("#nav-overlay").toggleClass("open");
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
	pageNum = anchor - 1;
	let animateTime = 0;

	if ($(window).width() < 1024) {
		animateTime = 1000;
	} 

	$('html, body').animate({
        scrollTop: $("#section" + anchor).offset().top
    }, animateTime);
}

function showText(id) {
	$('.svg-text-child').css('display', 'none');
	$('#'+id).toggle();
}
