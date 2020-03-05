//load
$(window).on('load', function () {
	$preloader = $('#loader'),
	  $loader = $preloader.find('#cube-loader');
	$loader.fadeOut();
	$preloader.delay(350).fadeOut('slow');
	$('body').removeClass('js-loading');

	
	$('.start-anim').addClass('anim');
});


$(document).scroll(function () {
	var WinTop = $(window).scrollTop();
	var docHeight = $(window).height();

	$('.fadeEl').each(function () {
		var topIn = $(this).offset().top -docHeight * 0.80 ; 
		if (WinTop > topIn) {
			$(this).addClass('anim');
		}
	});
	
	$('.animation').each(function () {
		var topIn = $(this).offset().top -docHeight * 0.80 ; 
		if (WinTop > topIn) {
			$(this).addClass('start-animation');
		}
	});
	
});


// HOVER LINE
$(document).on("ready", function () {
	
	$(function(){

		var $el, leftPos, newWidth,
			$mainNav = $(".header_top .hover_line")
		
		/*
			menu top
		*/
		$mainNav.append("<li class='h-line'></li>");
		
		var $magicLine = $(".header_top .h-line");
		
		$magicLine
			.width($(".header_top .active").width())
			.css("left", $(".hover_line .active a").position().left)
			.data("origLeft", $magicLine.position().left)
			.data("origWidth", $magicLine.width());
			
		$(".header_top .hover_line li").find("a").hover(function() {
			$el = $(this);
			leftPos = $el.position().left;
			newWidth = $el.parent().width();
			
			$magicLine.stop().animate({
				left: leftPos,
				width: newWidth
			});
		}, function() {
			$magicLine.stop().animate({
				left: $magicLine.data("origLeft"),
				width: $magicLine.data("origWidth")
			});    
		});
		
	});
});
						
$(document).on("ready", function () {
	$("#header_compare .compare_show").click(function () {
		$("#header_compare").toggleClass('show');
	});
});

$(document).on("ready", function () {
	$(".navigation-menu > li").hover(function () {
		$(".navigation-menu > li").removeClass('active');
		$(this).addClass('active');
	});
});


$(document).on("ready", function () {
	$("#search").hover(function () {
		$("#search").toggleClass('show');
	});
});








