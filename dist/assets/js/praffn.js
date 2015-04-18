$(document).ready(function() {
	if (mobile) {
		$('body').addClass('touch');
	} else {
		parallax();
		menu();
		$(document).scroll(scrollHandler);
	}
	$('#changeText').text('');
	changeText();
});

var scrollVal = $(window).scrollTop();

var mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

function scrollHandler(e) {
	scrollVal = $(window).scrollTop();
	menu();
	parallax();
}

function menu() {
	if (scrollVal > 200) {
		$('#topnav').css('background', 'rgba(202,85,75,.9)').addClass('scrolled');
	} else {
		$('#topnav').css('background', 'transparent').removeClass('scrolled');
	}
}

function parallax() {
	offset0 = 0;
	offset1 = -(scrollVal * 0.1);
	offset2 = -(scrollVal * 0.2);
	offset3 = -(scrollVal * 0.3);
	offset4 = -(scrollVal * 0.5);
	offset5 = -(scrollVal * 0.7);
	offset6 = -(scrollVal * 1.0);

	$('#layer_0').css({'transform': 'translate3d(0, ' + offset0 + 'px, 0)'});
	$('#layer_1').css({'transform': 'translate3d(0, ' + offset1 + 'px, 0)'});
	$('#layer_2').css({'transform': 'translate3d(0, ' + offset2 + 'px, 0)'});
	$('#layer_3').css({'transform': 'translate3d(0, ' + offset3 + 'px, 0)'});
	$('#layer_4').css({'transform': 'translate3d(0, ' + offset4 + 'px, 0)'});
	$('#layer_5').css({'transform': 'translate3d(0, ' + offset5 + 'px, 0)'});
	$('#layer_6').css({'transform': 'translate3d(0, ' + offset6 + 'px, 0)'});
}

var wordList = ['a designer.', 'a JavaScript enthusiast', 'a cool person.', 'a fullstack developer.', 'a programmer.', 'an outside-the-box-kinda-guy.'];
var wordCounter = 0;

function changeText() {
	$('#changeText').fadeOut(300, function() {
		$(this).text(wordList[wordCounter]).fadeIn(300);
	});

	wordCounter++
	if (wordCounter > wordList.length) {
		wordCounter = 0
	}


}

setInterval(changeText, 4000);

$('#work a').hover(function() {
	$('.work_image_full').stop().fadeOut();
	$($(this).attr('data-image')).stop().fadeIn();	

	var desc = $(this).children('.work_description').html();

	

	if(desc != $('#work_description').html()) {
		$('#work_description').stop().fadeOut(300, function() {
			$(this).stop().html(desc).fadeIn(300);
		});
	}
});

$('#topnav a').click(function(e) {
	e.preventDefault();
	$('html, body').stop().animate({
		scrollTop: $($(this).attr('href')).offset().top -100
	}, 1000);
});

