
$(function(){

	new WOW().init();

	$('.header').delay(500).animate({'opacity':1},2000);

/*
	$("body").niceScroll({
		horizrailenabled : false,
		"verge" : "500",
		zindex :'999',
		cursorcolor:'#333332',
		autohidemode:false
	});
*/
	/*$(".remodal").niceScroll({
		horizrailenabled : false,
		"verge" : "500",
		zindex :'99999',
		cursorcolor:'#404040',
		cursorborder:'none',
		autohidemode:false,
		background:'#c5c2c2',
		cursorborderradius: "0px",
		cursorfixedheight:30,
		mousescrollstep:10,
		railoffset:true,

	});*/

/*Toggle menu*/

var menu = $('.nav .menu_toggle .menu');
menu.click(function(e){
	e.preventDefault();
	menu.toggleClass('menu--active');
	$('.nav .section_toggle').slideToggle(1000);
});


$(window).resize(function(){
	if($(this).width() >= 991){
		$('.section_toggle').css({'display':'block'});
	}
	else{
		$('.section_toggle').css({'display':'none'});
	}
})

/*
	$(".form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			window.location = "Page.html";
			$(this).find("input").val("");
			$("#form").trigger("reset");
		});
		return false;
	});
*/

	//E-mail Ajax Send

	$("#form_top").submit(function() { 
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail_top.php", 
			data: th.serialize()
		}).done(function() {
			setTimeout(function() {
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});



	$("#form_block").submit(function() { 
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail_block.php", 
			data: th.serialize()
		}).done(function() {
			setTimeout(function() {
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});



	$("#form_bottom").submit(function() {
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail_bottom.php", 
			data: th.serialize()
		}).done(function() {
			setTimeout(function() {
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});



	$("#form_modal").submit(function() { 
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail_modal.php",
			data: th.serialize()
		}).done(function() {
			setTimeout(function() {
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});



	/*sliders*/



	$('.slider_first').slick({
		infinite: true,
		slidesToShow: 3,
		arrows:true,
		autoplay:false,
		dots:false,
		adaptiveHeight:true,
		responsive: [
		{
			breakpoint: 991,
			settings: {
				arrows: false,
				dots:true,
				centerMode: false,
				slidesToShow: 2,
				autoplay:true,
				autoplaySpeed:2000
			}
		},
		{
			breakpoint: 700,
			settings: {
				dots:true,
				arrows:false,
				slidesToShow: 1
			}
		},
		]
	});

	$('.slider_opinions').slick({
		dots:false,
		arrows:true,
		//autoplay:true,
		//autoplaySpeed:2000,
		slidesToShow: 1,
		adaptiveHeight:true,
		responsive: [
		{
			breakpoint: 767,
			settings: {
				dots:true,
				arrows:false,
			}
		}
		]
	});


	/*tabs*/


	$('.tabs_control-link').on('click', function(event){
		event.preventDefault();
		var item = $(this).closest('.tabs_control-item'),
		contentItem = $('.tabs_item'),
		itemPosition = item.index();
		contentItem.eq(itemPosition).addClass('active_content').siblings().removeClass('active_content');
		$('.tabs_control-item a').removeClass('active_navs');
		$(this).addClass('active_navs');
	});


	/*sticky menu*/



	$(window).scroll(function() {
		if($(this).scrollTop() >= 50) {
			$('.nav').addClass('sticky');
		}
		else{
			$('.nav').removeClass('sticky');
		}
	});

	if($(window).scrollTop() >= 50) {
		$('.nav').addClass('sticky');
	}

	/*меняем логотип*/

	$('.brand').click(function(e){
		e.preventDefault();
	})

	$(window).scroll(function(){
		var logoAttr = $('.brand').attr('href');
		if($('.nav').hasClass('sticky')){
			$('.brand img').attr('src',logoAttr);
		}
		else{
			$('.brand img').attr('src',"img/logo_1.png");
		}
	})

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

$('.wrap_modal, .close').click(function(){
	$('.wrap_modal, .modal_form').fadeOut('fast');
});



$('.button_slick').click(function(){
	$('.wrap_modal, .info_block').fadeIn('fast');
});

$('.wrap_modal, .remodal-close, .remodal-cancel').click(function(){
	$('.wrap_modal, .info_block').fadeOut('fast');
});





$('.item_popup').magnificPopup({
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


