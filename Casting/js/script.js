$(function(){

	new WOW().init();

	/*===============menu================*/

	var menu = $('.menu_toggle .menu');
	menu.click(function(e){
		e.preventDefault();
		menu.toggleClass('menu--active');
		$(".menu_top").toggleClass('active').find('.list_nav').addClass('animated fadeInDown').next('.login').addClass('animated fadeInUp');

	});



	if($(window).width() >= 991){
		$('.list_nav, .login').show();
		$(".menu_top").removeClass('active');
	}

	/*==============height=================*/
/*
	function heightDetect() {
		$(".header, .slide-img").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});
*/
/*=============sliders==================*/


$('.slider_top').slick({
	infinite: true,
	slidesToShow: 1,
	arrows:false,
	autoplay:false,
	autoplaySpeed:2000,
	dots:true,
	fade:true
});



$('.slider_gigs').slick({
	infinite: true,
	speed: 500,
	slidesToShow: 3,
	adaptiveHeight: true,
	arrows:true,
	responsive: [
	{
		breakpoint: 991,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
			infinite: true,
		}
	},
	{
		breakpoint: 600,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
		}
	}
	]
});


$('.slider_posts').slick({
	infinite: true,
	autoplay:false,
	slidesToShow: 3,
	adaptiveHeight: true,
	arrows:true,
	responsive: [
	{
		breakpoint: 991,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
			infinite: true,
		}
	},
	{
		breakpoint: 600,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
		}
	}
	]
});


$('.slider_talents').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows:false,
	autoplay:false,
	dots:true
});



/*=============loader=======================*/

$(window).load(function(){
	$(".loader_wrap, .loader").delay(500).fadeOut(3000);
});


/*===============matchHeight===================*/


$('.slider_posts .slide').matchHeight();


/*==================tabs========================*/


  var $wrapper = $('.tab-wrapper'),
      $allTabs = $wrapper.find('.tab-content > div'),
      $tabMenu = $wrapper.find('.tab-menu li'),
      $line = $('<div class="line"></div>').appendTo($tabMenu);
  
  $allTabs.not(':first-of-type').hide();  
  $tabMenu.filter(':first-of-type').find(':first').width('100%')
  
  $tabMenu.each(function(i) {
    $(this).attr('data-tab', 'tab'+i);
  });
  
  $allTabs.each(function(i) {
    $(this).attr('data-tab', 'tab'+i);
  });
  
  $tabMenu.on('click', function() {
    
    var dataTab = $(this).data('tab'),
        $getWrapper = $(this).closest($wrapper);
    
    $getWrapper.find($tabMenu).removeClass('active');
    $(this).addClass('active');
    
    $getWrapper.find('.line').width(0);
    $(this).find($line).animate({'width':'100%'}, 'fast');
    $getWrapper.find($allTabs).hide();
    $getWrapper.find($allTabs).filter('[data-tab='+dataTab+']').show();
  });


/*===============================animation=====================================*/

$('h2').addClass('wow fadeInDown');

});


