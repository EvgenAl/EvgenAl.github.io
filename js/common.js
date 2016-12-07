$(function(){


(function(){
	$('.slides').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 2000,
	});
}());


	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/


	(function(){
	var inst = $('[data-remodal-id=modal]').remodal();
	$(".form").submit(function() {
		$.ajax({
			type: "POST",
			url: "../mail.php",
			data: $(this).serialize()
		}).done(function() {
			inst.close();
		});
		});
}());


});


$(window).load(function() {

	$(".pre_loader").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
}); 