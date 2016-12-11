$(function(){
var menu = $('.modal_menu');
$('.menu').click(function(e){
e.preventDefault();
$('.cross').fadeIn(2000);
menu.slideDown(1000);

});
$('.cross').click(function(){
	menu.slideUp(1000);
	$(this).hide();
});

});