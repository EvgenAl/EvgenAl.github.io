
$(function(){


	wow = new WOW({
		mobile: false
	});
	wow.init();

	//E-mail Ajax Send

	$("#form_1").submit(function() { 
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
//tabs

$('.tabs_control-item').on('click', function(event){
	event.preventDefault();
	var item = $(this),
	contentItem = $('.tabs_item'),
	itemPosition = item.index();
	contentItem.eq(itemPosition).addClass('active').siblings().removeClass('active');
	item.addClass('active_item').siblings().removeClass('active_item');

});

//gallery


$('.item_popup').magnificPopup({
	type: 'image',
	removalDelay: 1000,
	mainClass: 'mfp-zoom-in',
	closOnContantClick:true,
	gallery:{
		enabled:true
	},
	zoom: {
		enabled: true,
		duration: 300
	},
	image:{
		verticalFit:false
	},
		callbacks: {
		beforeChange: function() {
			this.items[0].src = this.items[0].src + '?=' + Math.random(); 
		},
		open: function() {
			$.magnificPopup.instance.next = function() {
				var self = this;
				self.wrap.removeClass('mfp-image-loaded');
				setTimeout(function() { $.magnificPopup.proto.next.call(self); }, 120);
			}
			$.magnificPopup.instance.prev = function() {
				var self = this;
				self.wrap.removeClass('mfp-image-loaded');
				setTimeout(function() { $.magnificPopup.proto.prev.call(self); }, 120);
			}
		},
		imageLoadComplete: function() { 
			var self = this;
			setTimeout(function() { self.wrap.addClass('mfp-image-loaded'); }, 16);
		}
	}
});

//accordion

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


//scrollTop

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

//modal widnows

//1

$('.modal_btn_1').click(function(){
	$('.wrap_modal, .modal_form_1').fadeIn('fast');
});
$('.wrap_modal, .close').click(function(){
	$('.wrap_modal, .modal_form_1').fadeOut('fast');
});

/*
$("body").niceScroll({
	horizrailenabled : false,
	"verge" : "500",
	zindex :'999',
	cursorcolor:'#89472d',
	cursorborder:'1px solid #333',
});
*/

});




$(window, document).load(function(){
	$(".loading_wrap, .loading").delay(500).fadeOut(1000);
	$('.header, section').delay(500).fadeTo(1000, 1);
});
