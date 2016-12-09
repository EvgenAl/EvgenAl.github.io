$(function(){

//ProgressBar

$('.marketing #indicatorContainer').radialIndicator({
	radius: 70,
	barColor: '#fff',
	barWidth: 5,
	barBgColor: 'transparent',
	fontSize: 17,
	initValue: 85,
	roundCorner : true,
	fontWeight: 'normal',
	percentage: true
})

$('.research #indicatorContainer').radialIndicator({
	radius: 70,
	barColor: '#fff',
	barWidth: 5,
	barBgColor: 'transparent',
	fontSize: 17,
	initValue: 75,
	roundCorner : true,
	fontWeight: 'normal',
	percentage: true
})

$('.management #indicatorContainer').radialIndicator({
	radius: 70,
	barColor: '#fff',
	barWidth: 5,
	barBgColor: 'transparent',
	fontSize: 17,
	initValue: 90,
	roundCorner : true,
	fontWeight: 'normal',
	percentage: true
})

$('.consultancy #indicatorContainer').radialIndicator({
	radius: 70,
	barColor: '#fff',
	barWidth: 5,
	barBgColor: 'transparent',
	fontSize: 17,
	initValue: 70,
	roundCorner : true,
	fontWeight: 'normal',
	percentage: true
})

$('.promotion #indicatorContainer').radialIndicator({
	radius: 70,
	barColor: 'white',
	barWidth: 5,
	barBgColor: 'transparent',
	fontSize: 17,
	initValue: 88,
	roundCorner : true,
	fontWeight: 'normal',
	percentage: true
})


//Animation for Portfolio

$('.paperClips').hide();
$('.port').hover(
	function(){
		$(this).children('.paperClips').stop().fadeIn(1200);
	},
	function(){
		$(this).children('.paperClips').stop().fadeOut(1200);
	}
	);


//BXslider

$('.bxslider').bxSlider();

//Navbar

$('.header').stickyNavbar();



//WoW

new WOW().init();



});