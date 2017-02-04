new WOW().init();

var isMobile = navigator.userAgent.match(/(iPhone|iPod|iPad|BlackBerry|Android)/i) != null,
  mdown = "mousedown",
  mmove = "mousemove",
  mup = "mouseup";

if (isMobile) {
  mdown = "touchstart";
  mmove = "touchmove";
  mup = "touchend";
} 



$(function(){
	var menu = $('.menu_toggle .menu');
	menu.click(function(e){
		e.preventDefault();
		menu.toggleClass('menu--active');
		$('.header-menu, .contacts').slideToggle(500)
	});

		if($(window).width() >= 991){
		$('.header-menu, .contacts').show();
	}
});


// Слайдер
jQuery(document).ready(function($) {
    $(".royalSlider").royalSlider({
        arrowsNavAutoHide: false,
        keyboardNavEnabled: true,
        navigateByClick: false,
        sliderDrag: false,
        sliderTouch: false,
        loop: true,
        autoPlay: {
    		enabled: true,
    		pauseOnHover: true,
    		delay: 3000
    	}
    });  
});


// Маска номера телефона

jQuery(function($){
   $(".main-form__phone").mask("+7 (999) 999-9999");
   $(".request-form__phone").mask("+7 (999) 999-9999");

// AJAX-отправка форм с валидацией
    $( ".form").validate({
        rules: {
            name: {
                required: true,
                digits: false
            },
            phone: {
                required: true,
                digits: false
            },
            mail: {
                required: true,
                digits: false
            }
        },
        messages : {
            phone: {
                required: '*'
            },
            name: {
                required: '*'
            },
            mail: {
                required: '*'
            }
        },
        submitHandler: function(form) {
            $.ajax({
                type: 'POST',
                url: document.location.href.replace('#'+document.location.hash, '') + '?ajax=true&action=reception',
                data: $(form).serialize()
            }).done(function(response) {
                $('.form .main-form__name').val('');
                $('.form .main-form__phone').val('');
                $('.form .main-form__email').val('');
            });
        }
    });
    $( ".form-2").validate({
        rules: {
            name: {
                required: true,
                digits: false
            },
            phone: {
                required: true,
                digits: false
            },
            mail: {
                required: true,
                digits: false
            }
        },
        messages : {
            phone: {
                required: '*'
            },
            name: {
                required: '*'
            },
            mail: {
                required: '*'
            }
        },
        submitHandler: function(form) {
            $.ajax({
                type: 'POST',
                url: document.location.href.replace('#'+document.location.hash, '') + '?ajax=true&action=price_list',
                data: $(form).serialize()
            }).done(function(response) {
                $('.form-2 .main-form__name').val('');
                $('.form-2 .main-form__phone').val('');
                $('.form-2 .main-form__email').val('');
            });
        }
    });
    $( ".phone-request-form").validate({
        rules: {
            phone: {
                required: true,
                digits: false
            }
        },
        messages : {
            phone: {
                required: '*'
            }
        },
        submitHandler: function(form) {
            $.ajax({
                type: 'POST',
                url: document.location.href.replace('#'+document.location.hash, '') + '?ajax=true&action=callback',
                data: $(form).serialize()
            }).done(function(response) {
                $('.request-form__phone').val('');
            });
        }
    });
});

/*
$(function() {
    // WAYPOINT
    var waypoints1 = $('.list-icons__item').waypoint(function(direction) {
      $('.list-icons__item').addClass('animated fadeInLeft');
    }, {
      offset: '40%'
    });

    var waypoints2 = $('.person__exp').waypoint(function(direction) {
      $('.person__img').addClass('animated fadeInLeft');
      $('.person__desc').addClass('animated fadeInRight');
      $('.person__name').addClass('animated fadeInRight');
    }, {
      offset: '30%'
    });

    var waypoints3 = $('.certificates-slider').waypoint(function(direction) {
      $('.certificates-slider').addClass('animated fadeInUp');
    }, {
      offset: '40%'
    });
});
*/
// Открытие и закрытие большой версии сертификатов

$(function() {
    $('.certificates-slider__item').on('click', function() {
        var certIndex = $(this).data('index');
        var imageUrl = 'img/certificate/cert0' + certIndex + '.jpg';
        $('.certificate').addClass('open').css('background-image', 'url(' + imageUrl + ')');
        $('.overlay').addClass('open');
    });
    $('.overlay').on(mup, function() {
        $('.certificate').removeClass('open');
        $(this).removeClass('open');
    });
    $('.certificate').on(mup, function() {
        $(this).removeClass('open');
        $('.overlay').removeClass('open');
    });

    $('.header-menu__item').on(mup,"a", function (e) {
        e.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 800, 'swing');
    });



    $('.header-tel__phone-request').on(mup, function(e) {
        e.preventDefault();
        $('.phone-request').toggleClass('open');
    });
});

$(function () {
    ymaps.ready(init);
    var myMap,
        myPlacemark;

    function init(){
        myMap = new ymaps.Map ("map", {
            center: [54.28446407033673,48.305143499999915],
            zoom: 17,
            controls: [],
            behaviors: ["drag", "dblClickZoom", "rightMouseButtonMagnifier", "multiTouch"],

        });
        myPlacemark = new ymaps.Placemark([54.28446407033673,48.305143499999915], {}, {
            iconLayout: 'default#image',
            iconImageHref: icon_image_href,
            iconImageSize: [30, 42],
            iconImageOffset: [-3, -60]
        });

        myMap.geoObjects.add(myPlacemark);
    }
});

$(window).load(function() {

	$(".my_pre_loader").fadeOut();
	$(".my_loader").delay(400).fadeOut("slow");
}); 



	

jQuery(function($) { 


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

});
