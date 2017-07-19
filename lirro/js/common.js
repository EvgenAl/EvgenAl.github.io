$(document).ready(function() {

	// FANCYBOX
    $(".fancybox").fancybox();

    // OWL-CAROUSEL
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        smartSpeed:2000,
        autoplayTimeout:5000,
        dots:true,
        stopOnHover:true,
        navigationText:["",""],
        rewindNav:true,
        pagination:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    // MMENU

    $(function() {
        $('nav#menu').mmenu({
        	extensions	: [ 'fx-menu-slide', 'shadow-page', 'shadow-panels', 'listview-large', 'pagedim-black' ]
        });
    });

    // SCROLL TO LINKS

    $("a.ancLinks").click(function () { 
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        $('html,body').animate( { scrollTop: destination }, 1100 );
        return false;
    });

    //WOW

    new WOW().init();

});