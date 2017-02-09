$(function() {
	$('.forms-btns__btn').on('click', function(e) {
		e.preventDefault();
		if($(this).attr('id') == 'consultation') {
			$('.form__title').html('Получить консультацию');
		} else if($(this).attr('id') == 'request') {
			$('.form__title').html('Оставить заявку');
		}
		$('.overlay').addClass('active');
		$('.modal-window').addClass('active');
	});
	$('.overlay').on('click', function() {
		$(this).removeClass('active');
		$('.modal-window').removeClass('active');
		$('.form .form__input').val('');
		$('input').removeClass('error');
	});


	$( ".form").validate({
		rules: {
			name: {
				required: true,
				digits: false,
			},
			tel: {
				required: true,
				digits: false,
			},
			email: {
				required: true,
				digits: false,
			}
		},
		messages : {
			tel: {
				required: false
			},
			name: {
				required: false
			},
			email: {
				required: false
			}
		},
	});

	// Маска номера телефона

	jQuery(function($){
		$(".form__tel").mask("+7 (999) 999-9999");
	});

});

$(function(){

	new WOW().init();

	$('.header').delay(500).animate({'opacity':1},3000);


	var menu = $('.nav .menu_toggle .menu');
	menu.click(function(e){
		e.preventDefault();
		menu.toggleClass('menu--active');
		$('.nav .menu_items').slideToggle(1000);
	});


$('.nav a').click(function(){
	if($(window).width() <= 991){
		$('.menu_items').slideUp(1000);
	}
});


$('#consultation').hover(function(){
$('.rollover').addClass('addBg_1');
},

function(){
$('.rollover').removeClass('addBg_1');
}

);
$('#request').hover(function(){
$('.rollover').addClass('addBg_2');
},
function(){
$('.rollover').removeClass('addBg_2');
}

);

	$('.services .item').matchHeight();
	$('.tasks .item').matchHeight();



	$('.nav').stickyNavbar();
	$(window).scroll(function() {
		if($(this).scrollTop() >= 120) {
			$('.sticky').addClass('bg_1');
		}
		else{
			$('.sticky').removeClass('bg_1');
		}
	});






	var newPhoto = new Image();
	newPhoto.src = "img/benifits-img-wb.png";
	var res = $('.benifits__img .image').attr('src');
	$('.benifits__img .image').hover(
		function(){
			$(this).attr('src', newPhoto.src);
		},
		function(){
			$(this).attr('src', res);
		}
		);



	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Мы скоро с вами свяжемся:)");
			$("#form").trigger("reset");
		});
		return false;
	});



	$('.slider_center').slick({
		centerMode: true,
		centerPadding: '0',
		dots:true,
		arrows:false,
		autoplay:true,
		autoplaySpeed:2000,
		slidesToShow: 3,
		responsive: [
		{
			breakpoint: 768,
			settings: {
				arrows: false,
				centerMode: false,
				centerPadding: '0',
				slidesToShow: 2
			}
		},
		{
			breakpoint: 600,
			settings: {
				arrows: false,
				centerMode: false,
				centerPadding: '0',
				slidesToShow: 1
			}
		}
		]
	});
});

$(window).load(function(){
	$(".loader_wrap, .loader").delay(500).fadeOut(3000);
});
