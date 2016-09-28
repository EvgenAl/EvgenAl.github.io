$(function(){
	var answers = $('.faq .answer'),
	questions = $('.faq .question');

	$('.faq .question').click(function(){
		var answer = $(this).next('.answer');
		if(answer.is(':hidden')){
			answers.slideUp(1000);
			answer.slideDown(1000);
			questions.removeClass('arrow_top');
			$(this).addClass('arrow_top');

		}
		else{
			answer.slideUp(1000);
			$(this).removeClass('arrow_top');;
		}
	});
})