(function($){

    /*-----------------------------
    Loader activation here. 
    -------------------------------*/
    $("#fakeloader").fakeLoader({
        timeToHide:1500, 
        zIndex:999999, 
        spinner:"spinner1",   //Options: 'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7' 
        bgColor:"#1aada3"
    });
	
	// one page nav
	$('#top-menu').onePageNav({
	    currentClass: 'current',
	    changeHash: true,
	    scrollSpeed: 1500,
	    scrollThreshold: 0.5,
	    filter: ':not(.external)',
	    easing: 'swing',
	    begin: function() {
	        //I get fired when the animation is starting
	    },
	    end: function() {
	        //I get fired when the animation is ending
	    },
	    scrollChange: function(jQuerycurrentListItem) {
	        //I get fired when you enter a section and I pass the list item of the section
	    }
	});		
	/*==============================
	   STICKY MENU
	==============================*/

			
		$(window).scroll(function() {
			  if ($(this).scrollTop() > 100) {
				$('.menu-top').addClass('fixed');
			  } else {
				$('.menu-top').removeClass('fixed');
			  }
			});
	//  main slider
	var mainSlider = $('#main_slider');
	
	/*----- main slider -----*/
	mainSlider.nivoSlider({
		directionNav: true,
		animSpeed: 500,
		slices: 18,
		pauseTime: 50000000,
		pauseOnHover: false,
		controlNav: true,
		prevText: '<i class="fa fa-angle-left nivo-prev-icon"></i>',
		nextText: '<i class="fa fa-angle-right nivo-next-icon"></i>'
	});		

	// Owl Carousel for Testimonials	
	var testiCarousel = $('.testimonials_carousel');
    testiCarousel.owlCarousel({
        loop:true,
        autoplay:false,
        dots:false,
		nav: false,
		navText: ["<i class='fa fa-angle-left '></i>", "<i class='fa fa-angle-right '></i>"],
		items:1		
    });		
	
	/*---------------------
	 statistics-counter
	--------------------- */	
    $('.statistics-counter').counterUp({
        delay: 50,
        time: 3000
    });	

	
    // jQuery MixItUp
    $('.work_all_item').mixItUp();
	
	    // jQuery Lightbox
    $('.lightbox').venobox({
        numeratio: true,
        infinigall: true
    });	
		

	/*---------------------
	   scrollUp
	--------------------- */	
	$.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });	
	new WOW().init();
	
})(jQuery);