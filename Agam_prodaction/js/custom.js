
$(function(){

	//new WOW().init();

	//$('.header').delay(500).animate({'opacity':1},2000);


	//E-mail Ajax Send



	$("#form_modal").submit(function() { 
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail_1.php",
			data: th.serialize()
		}).done(function() {
			$('.modal_form').fadeOut('fast');
			$('.wrap_modal, .modal_submit').fadeIn('fast');
		});
		return false;
	});
	$("#form_modal_2").submit(function() { 
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail_2.php",
			data: th.serialize()
		}).done(function() {
			$('.modal_form').fadeOut('fast');
			$('.wrap_modal, .modal_submit').fadeIn('fast');
		});
		return false;
	});

	/*sliders*/



	$('.slider_top').slick({
		infinite: true,
		slidesToShow: 1,
		arrows:false,
		autoplay:false,
		dots:true,
		fade:true,
		adaptiveHeight:true
	});

	$('.slider_opinions').slick({
		dots:true,
		arrows:true,
		//autoplay:true,
		//autoplaySpeed:2000,
		slidesToShow: 1,
		adaptiveHeight:true,
		responsive: [
		{
			breakpoint: 1200,
			settings: {
				dots:true,
				arrows:false,
			}
		}
		]
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



//modal widnow



$('.modal_btn').click(function(){
	$('.wrap_modal, .modal_form').fadeIn('fast');
});

$('.modal_btn_2').click(function(){
	$('.wrap_modal, .modal_form_2').fadeIn('fast');
});


$('.wrap_modal, .close').click(function(){
	$('.wrap_modal, .modal_form, .modal_form_2').fadeOut('fast');
});


$('.read_more').click(function(e){
	e.preventDefault();
	$('.wrap_modal, .info_block').fadeIn('fast');
});

$('.wrap_modal, .close, .cancel').click(function(){
	$('.wrap_modal, .info_block').fadeOut('fast');
});


$('.serf').magnificPopup({
	type: 'image',
	removalDelay: 300,
	mainClass: 'mfp-fade',
	gallery:{
		enabled:true
	}
});

});

$(window, document).load(function(){
	$(".loader_wrap, .loader").delay(500).fadeOut(3000);
});




