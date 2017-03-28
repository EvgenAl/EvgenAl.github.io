
$(function(){


	new WOW().init();
	$('.header').delay(500).animate({'opacity':1},2000);


	//E-mail Ajax Send

	$(".form").submit(function() { 
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail_form.php", 
			data: th.serialize()
		}).done(function() {
			alert("Ваша заявка отправлена");
			setTimeout(function() {
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});


/*sliders*/



$('.slider_first').slick({
	infinite: true,
	slidesToShow: 1,
	dots:true,
	autoplay: true,
	autoplaySpeed: 4000
});


$('.slider_nav').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	dots: false,
	asNavFor: '.slider_for',
	centerMode: true,
	focusOnSelect: true,
		responsive: [
	{
		breakpoint: 767,
		settings: {
			slidesToShow: 1
		}
	}
	]
});

$('.slider_for').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	adaptiveHeight:true,
	asNavFor: '.slider_nav'
});



$('.slider_nav_2').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: false,
	asNavFor: '.slider_for_2',
	centerMode: true,
	focusOnSelect: true
});

$('.slider_for_2').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	adaptiveHeight:true,
	fade: true,
	asNavFor: '.slider_nav_2'
});



$('.slider_results_video').slick({
	infinite: true,
	slidesToShow: 5,
	centerMode: true,
	centerPadding: '0px',
	arrows:true,
	dots:false,
	focusOnSelect: true,
	responsive: [
	{
		breakpoint: 1199,
		settings: {
			slidesToShow: 3
		}
	},
	{
		breakpoint: 767,
		settings: {
			slidesToShow: 1
		}
	},
	]
});

$('.slider_info').slick({
	infinite: true,
	arrows:true,
	dots:false,
	autoplaySpeed: 4000,
	autoplay: false,
	/*responsive:[
	{
		breakpoint: 767,
		settings: {
			arrows:false
		}
	}
	]*/

});



/*accordion*/


$('.answer').hide();
var otherContent = $('.answer'),
duration = 500,
nameBlock = $('.questions');
$('.questions').click(function(){
	var $answer = $(this).next('.answer');
	if($answer.is(':hidden')){
		otherContent.slideUp(duration);
		nameBlock.removeClass('active');
		$answer.slideDown(duration);
		$(this).addClass('active');
	}
	else{
		$answer.slideUp(duration);
		$(this).removeClass('active');
	}
});


/*scrollTop*/


$(document).scroll(function(){
	if($(this).scrollTop() > 200){
		$('.scroll').fadeIn('500');
	}
	if($(this).scrollTop() < 200){
		$('.scroll').fadeOut('500');
	}

});



$('.scroll').click(function(){
	$('body,html').animate({scrollTop:0}, 'slow');
	return false;
});


$('.tag').click(function(event){
	event.preventDefault();
	var allInfo = $('.tag_info');
	var id = $(this).attr('href');
	var all = $('.tag').find('.tag_click');
	var res = $(this).find('.tag_click');
	if(res.hasClass('active')){
		res.removeClass('active');
		$(id).slideDown(300);
	}
	else{
		all.removeClass('active');
		res.addClass('active');
		allInfo.slideUp(300);
		$(id).slideDown(300);
	}
});



$(".btn_mnu").click(function() {
	$(this).toggleClass("active");
	$('.row_2').slideToggle(500);
});



$('.count_1').counterUp({
	delay: 30,
	time: 1000
});

$('.count_2').counterUp({
	delay: 10,
	time: 2000
});

$('.count_3').counterUp({
	delay: 10,
	time: 3000
});



$("body").niceScroll({
		horizrailenabled : false,
		"verge" : "500",
		zindex :'999'
	});


});


$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
});