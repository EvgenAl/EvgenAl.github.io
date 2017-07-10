
$(function(){


	wow = new WOW({
		mobile: false
	});
	wow.init();


//navbar&scroll


$('.navbar').stickyNavbar({
	activeClass: "active",
	sectionSelector: "scrollto", 
	animDuration: 350,
	stickyModeClass: "sticky",
	unstickyModeClass: "unsticky",
	zindex: 999,
	startAt: 300,
	easing: "swing",
	cssAnimation: "fadeInDown",
	mobileWidth: 991
});


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


	$("#form").submit(function() { 
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail_form_1.php", 
			data: th.serialize()
		}).done(function() {
			setTimeout(function() {
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

		$("#form_2").submit(function() { 
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail_form_2.php", 
			data: th.serialize()
		}).done(function() {
			setTimeout(function() {
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

			$("#form_3").submit(function() { 
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail_form_3.php", 
			data: th.serialize()
		}).done(function() {
			setTimeout(function() {
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	/*sliders*/

	$('.slider_nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows:true,
		centerMode: true,
		centerPadding: '0',
		asNavFor: '.slider_for',
		focusOnSelect: true
	});


	$('.slider_for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		adaptiveHeight:true,
		asNavFor: '.slider_nav'
	});



//tooltip

$('.tooltipster').tooltipster({
	side: 'bottom',
	animation: 'fade',
	delay: 200,
	minWidth:320,
	trigger: 'click'
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


//map

ymaps.ready(init);
var myMap,
myPlacemark;

function init(){     
	myMap = new ymaps.Map("map", {
		center: [54.3764427,48.5944431],
		zoom: 16
	});

	
	myPlacemark = new ymaps.Placemark([54.376551570251046,48.589352500000004], 
	{ 
		balloonContentHeader: '"Стилист взгляда"',
		balloonContentBody: 'Новосондецкий бульвар,6',
		hintContent: "<p class='Hint_title'>«Стилист взгляда»<br> Новосондецкий бульвар, 6</p>"
	},

	{
		iconImageHref: '../img/pin.png',
		iconLayout: 'default#image'
	},
	);

	myMap.behaviors.disable(['scrollZoom', 'rightMouseButtonMagnifier']);
	myMap.geoObjects.add(myPlacemark);
	//myPlacemark.hint.open();
	myMap.controls.remove('geolocationControl');
	myMap.controls.remove('searchControl');
	myMap.controls.remove('trafficControl');
	myMap.controls.remove('fullscreenControl');
	myMap.controls.remove('typeSelector');
	myMap.controls.remove('rulerControl');
}


//maskPhone
$(".phone").mask("+7 (999) 999-9999");





$('.tabs_control-link').on('click', function(event){
event.preventDefault();
var item = $(this).closest('.tabs_control-item'),
contentItem = $('.tabs_item'),
res = $('.future-line');
itemPosition = item.index();
contentItem.eq(itemPosition).addClass('active').siblings().removeClass('active');
item.addClass('active_item').siblings().removeClass('active_item');

});

$('.tabs_control-item').click(function(){
	$(this).find('.future-line').addClass('active_line');
	$(this).siblings().find('.future-line').removeClass('active_line');
})




});





/*
$(window, document).load(function(){
	$(".loader_wrapper, .loader").delay(500).fadeOut(1000);
});*/


var isMobile = navigator.userAgent.match(/(iPhone|iPod|iPad|BlackBerry|Android)/i) != null,
mdown = "mousedown",
mmove = "mousemove",
mup = "mouseup";

if (isMobile) {
	mdown = "touchstart";
	mmove = "touchmove";
	mup = "touchend";
} 