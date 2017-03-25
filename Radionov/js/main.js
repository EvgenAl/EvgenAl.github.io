
$(function(){


	new WOW().init();
	$('.header').delay(500).animate({'opacity':1},2000);


	//E-mail Ajax Send

	$("#form_top").submit(function() { 
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail_form.php", 
			data: th.serialize()
		}).done(function() {
			alert("Сообщение отправлено!");
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
		autoplaySpeed: 4000,
		responsive:[
		{
			breakpoint: 767,
			settings: {
				arrows:false
			}
		}
		]
	});


	$('.slider_video').slick({
		infinite: true,
		arrows:true,
		dots:true,
		autoplaySpeed: 4000,
		autoplay: true,
		responsive:[
		{
			breakpoint: 767,
			settings: {
				arrows:false
			}
		}
		]

	});




	/*scrollTop*/


	$(document, window).scroll(function(){
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



$('.button').click(function(){
	$('.wrap_modal, .modal_form_1').fadeIn('fast');
});
$('.wrap_modal, .closed').click(function(){
	$('.wrap_modal, .modal_form_1').fadeOut('fast');
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





});


$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});