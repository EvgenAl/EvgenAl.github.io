  $( function() {


  	//Select
  	$('.types').selectmenu();


  	//Range-clider
  	$("#slider-range").slider({
  		range: true,
  		min: 0,
  		max: 450,
  		values: [ 100, 350 ],
  		slide: function( event, ui) {
  			$("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
  		}
  	});
  	$("#amount").val("$" + $("#slider-range").slider("values", 0) + "k" +
  		" - $" + $("#slider-range").slider("values", 1) + "k");



// BX slider

$('.bxslider').bxSlider({
	mode: 'vertical',
	slideMargin: 60
});



$('.slider4').bxSlider({
	slideWidth: 120,
	minSlides: 2,
	maxSlides: 5,
	moveSlides: 3,
	slideMargin: 10
});



//Active
var all = $('.nav a');
$('.nav a').click(function(){
	all.removeClass('active');
	$(this).addClass('active');
});



//Scroll

$(".scrollTop, .scrollBottom").mPageScroll2id({
	scrollSpeed : 500
});
var topOffset = $('#vehichles').offset().top;
var bottomOffset = $('#map').offset().top;
$('.scroll').hide();
$(document).scroll(function(){
	if($(this).scrollTop() >= bottomOffset){
		$('.scrollBottom').hide();
	}
	else{
		$('.scrollBottom').show();
	}
	if($(this).scrollTop() <= topOffset){
		$('.scrollTop').hide()
	}
	else{
		$('.scrollTop').show();
	}
});


//Menu

$('.button').click(function(){
	$('.second_menu ul').slideToggle(500);
});
$(window).resize(function() {	
	//если ширина окна больше ук размера	
	if (  $(window).width() > 768 ) {
		//удаляем атрибут стиля	у блока, который был присвоен методом		slideToggle()
		$('.second_menu ul').removeAttr('style');
	}
	});//end resize

});