$(function(){
	$('.bxslider').bxSlider({
		infiniteLoop: false,
		hideControlOnEnd: true,
		startSlide:1
	});

	var answers = $('.faq .answer'),
	duration = 1000,
	questions = $('.faq .question');

	$('.faq .question').click(function(){
		var answer = $(this).next('.answer');
		if(answer.is(':hidden')){
			answers.fadeOut(duration);
			answer.slideDown(1000);
			questions.children('.arrow').slideDown(1000);
			$(this).children('.arrow').fadeOut(1000);

		}
		else{
			answer.fadeOut(1000);
			$(this).children('.arrow').slideDown(1000);
		}
	});
});