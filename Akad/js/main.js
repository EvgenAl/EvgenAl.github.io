$(function() {

	$('.menu').click(function(){
		$('.nav').slideToggle();
	});

	$(window).resize(function() {	
		if (  $(window).width() > 750 ) {
			$('.nav').removeAttr('style');
		}
	});


	$('.footer_bottom .menu').click(function(){
		$("html, body").animate({ scrollTop: $(document).height() }, "slow");
		return false;
	});
	
	var sizer = '.sizer_3';
	var $grid = $('.isotope').imagesLoaded( function() {
	$grid.isotope({
    		itemSelector : '.grid_item',
		layoutMode: 'masonry',
		masonry: {
			columnWidth:sizer,
			percentPosition: true
		}
  });
});




	var $container = $('.isotope');
	$('#filters li').click(function(){
		var $this = $(this);
        // don't proceed if already selected
        if ( !$this.hasClass('is-checked') ) {
        	$this.parents('#options').find('.is-checked').removeClass('is-checked');
        	$this.addClass('is-checked');
        }
        var selector = $this.attr('data-filter');
        $container.isotope({  itemSelector: '.grid_item', filter: selector });
        return false;
      }); 



	var all = $('.portfolio li a');
	$('.controls li a').click(function(e){
		e.preventDefault();
		all.removeClass('active');
		$(this).addClass('active');
	});


	$('.slider').slick({
		dots: true,
		autoplay: true,
		infinite: true,
		speed: 400,
		slidesToShow: 1,
		adaptiveHeight: true
	});

});


