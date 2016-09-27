$(function(){


//tabs
function blueasyTabs() {
	var $wrapper = $('.tab-wrapper'),
	$menu = $wrapper.find('.tab-menu li'),
	$content = $wrapper.find('.thumbs-row');

	$content.not(':first').hide();
	$content.each(function(i) {
		$(this).attr('data-tab', 'tab-'+ i);
	});
	$menu.each(function(i) {
		$(this).attr('data-tab', 'tab-'+ i);
	});

	$menu.click(function(e) {
		e.preventDefault();
		var $getWrapper = $(this).closest($wrapper),
		dataTab = $(this).attr('data-tab');

		$getWrapper.find($menu).find('a').removeClass('active');
		$(this).find('a').addClass('active');

		$getWrapper.find($content).hide();
		$getWrapper.find($content).filter('[data-tab='+dataTab+']').show();
	});
}
blueasyTabs();


//enllax
$(window).enllax();


//menu
$('.header').stickyNavbar({
	activeClass: "active",
	sectionSelector: "scrollto",
	animDuration: 1000
});


});