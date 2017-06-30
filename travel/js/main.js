
$(function(){


	wow = new WOW({
		mobile: false
	});
	wow.init();

	//E-mail Ajax Send

	$("#form_top").submit(function() { 
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail_top.php", 
			data: th.serialize()
		}).done(function() {
			window.location = "Page.html";
			setTimeout(function() {
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});


	/* toggle menu*/


	$(".btn_mnu").click(function() {
		$(this).toggleClass("active");
		$('.info_contact_2').fadeToggle(500);
	});

	$('.request').click(function(){
		$('.info_contact_2').fadeOut();
		$('.btn_mnu').removeClass('active');
	})


	/*sliders*/

	$('.slider_top').slick({
		infinite: true,
		slidesToShow: 1,
		arrows:true,
		autoplay:false,
		dots:false,
		fade:true
	});


	$('.slider_direction').slick({
		infinite: true,
		slidesToShow: 2,
		arrows:true,
		autoplay:false,
		dots:false,
		adaptiveHeight:true,
		responsive: [
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 550,
			settings: {
				slidesToShow: 1
			}
		}
		]
	});


	$('.slider_packets').slick({
		infinite: true,
		slidesToShow: 1,
		dots:false,
		fade:true,
		arrows:true,
		responsive: [
		{
			breakpoint: 550,
			settings: {
				adaptiveHeight:true
			}
		}
		]
	});


	$('.slider_opinions').slick({
		dots:false,
		arrows:true,
		autoplay:false,
		autoplaySpeed:2000,
		slidesToShow: 1,
		fade:true,
		adaptiveHeight:true,
		cssEase:'ease-out'
	});


	$('.slider_photos').slick({
		infinite: true,
		slidesToShow: 3,
		centerMode: true,
		centerPadding: '0',
		arrows:true,
		autoplay:false,
		dots:false,
		cssEase:'ease-out',
		responsive: [
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 1,
				centerMode: false,
			}
		}
		]
	});



	/*scroll*/



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





//ScrooToPacket

$('.group').click(function () { 
	var elementClick = $(this).attr("href");
	var destination = $(elementClick).offset().top;
	$('body, html').animate( { scrollTop: destination }, 1000 );		
	return false;
});

$('.indiv').click(function () { 
	var elementClick = $(this).attr("href");
	var destination = $(elementClick).offset().top;
	$('body, html').animate( { scrollTop: destination }, 1000 );		
	return false;
});

//modal widnows

//1

$('.modal_btn_1').click(function(){
	$('.wrap_modal, .modal_form_1').fadeIn('fast');
});
$('.wrap_modal, .close').click(function(){
	$('.wrap_modal, .modal_form_1').fadeOut('fast');
});


//2
$('.modal_btn_2').click(function(){
	$('.wrap_modal, .modal_form_2').fadeIn('fast');
});
$('.wrap_modal, .close').click(function(){
	$('.wrap_modal, .modal_form_2').fadeOut('fast');
});



//3
$('.modal_btn_3').click(function(){
	$('.wrap_modal, .modal_form_3').fadeIn('fast');
});
$('.wrap_modal, .close').click(function(){
	$('.wrap_modal, .modal_form_3').fadeOut('fast');
});



//4
$('.modal_btn_4').click(function(){
	$('.wrap_modal, .modal_form_4').fadeIn('fast');
});
$('.wrap_modal, .close').click(function(){
	$('.wrap_modal, .modal_form_4').fadeOut('fast');
});


//5
$('.modal_btn_5').click(function(){
	$('.wrap_modal, .modal_form_5').fadeIn('fast');
});
$('.wrap_modal, .close').click(function(){
	$('.wrap_modal, .modal_form_5').fadeOut('fast');
});


//6
$('.modal_btn_6').click(function(){
	$('.wrap_modal, .modal_form_6').fadeIn('fast');
});
$('.wrap_modal, .close').click(function(){
	$('.wrap_modal, .modal_form_6').fadeOut('fast');
});


//nicescroll

/*
$("body").niceScroll({
	horizrailenabled : false,
	"verge" : "500",
	zindex :'999',
	cursorcolor:'#f1d90f',
	cursorborder:'1px solid #222'
});*/
});




$(window, document).load(function(){
	$(".loader_wrapper, .loader").delay(500).fadeOut(1000);
});
