/***************************************************************************************************************
||||||||||||||||||||||||||||        CUSTOM SCRIPT FOR FIXYMAN                       ||||||||||||||||||||||||||||
****************************************************************************************************************
||||||||||||||||||||||||||||              TABLE OF CONTENT                  ||||||||||||||||||||||||||||||||||||
****************************************************************************************************************
****************************************************************************************************************

01. Revolution slider
02. Sticky header
03. Prealoader
04. Language switcher
05. prettyPhoto
06. BrandCarousel
07. Testimonial carousel
08. ScrollToTop 
09. Cart Touch Spin
10. PriceFilter
11. Cart touch spin
12. Fancybox activator
13. ContactFormValidation
14. Scoll to target
15. PrettyPhoto

****************************************************************************************************************
||||||||||||||||||||||||||||            End TABLE OF CONTENT                ||||||||||||||||||||||||||||||||||||
****************************************************************************************************************/

"use strict";


// dropdown menu
var mobileWidth = 992;
var navcollapse = $('.navigation li.dropdown');

$(window).on('resize', function(){
    navcollapse.children('ul').hide();
    navcollapse.children('.megamenu').hide();
});

navcollapse.hover(function() {
if($(window).innerWidth() >= mobileWidth){
      $(this).children('ul').stop(true, false, true).slideToggle(500);
      $(this).children('.megamenu').stop(true, false, true).slideToggle(500);
    }
});



//Submenu Dropdown Toggle
if($('.main-header .navigation li.dropdown ul').length){
    $('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');		

    //Dropdown Button
    $('.main-header .navigation li.dropdown .dropdown-btn').on('click', function() {
        $(this).prev('ul').slideToggle(500);
        $(this).prev('.megamenu').slideToggle(500);
    });

    //Disable dropdown parent link
    $('.navigation li.dropdown > a').on('click', function(e) {
        e.preventDefault();
    });
}



//Parallax Scene for Icons
if($('.parallax-scene-1').length){
    var scene = $('.parallax-scene-1').get(0);
    var parallaxInstance = new Parallax(scene);
}
if($('.parallax-scene-2').length){
    var scene = $('.parallax-scene-2').get(0);
    var parallaxInstance = new Parallax(scene);
}
if($('.parallax-scene-3').length){
    var scene = $('.parallax-scene-3').get(0);
    var parallaxInstance = new Parallax(scene);
}
if($('.parallax-scene-4').length){
    var scene = $('.parallax-scene-4').get(0);
    var parallaxInstance = new Parallax(scene);
}
if($('.parallax-scene-5').length){
    var scene = $('.parallax-scene-5').get(0);
    var parallaxInstance = new Parallax(scene);
}





//Update Header Style and Scroll to Top
function headerStyle() {
    if($('.main-header').length){
        var windowpos = $(window).scrollTop();
        var siteHeader = $('.main-header');
        var scrollLink = $('.scroll-top');
        if (windowpos >= 250) {
            siteHeader.addClass('fixed-header');
            scrollLink.fadeIn(300);
        } else {
            siteHeader.removeClass('fixed-header');
            scrollLink.fadeOut(300);
        }
    }
}
headerStyle();







// Scroll to a Specific Div
if($('.scroll-to-target').length){
    $(".scroll-to-target").on('click', function() {
        var target = $(this).attr('data-target');
       // animate
       $('html, body').animate({
           scrollTop: $(target).offset().top
        }, 1000);

    });
}



//===Language switcher===
function languageSwitcher() {
    if ($("#polyglot-language-options").length) {
        $('#polyglotLanguageSwitcher').polyglotLanguageSwitcher({
            effect: 'slide',
            animSpeed: 500,
            testMode: true,
            onChange: function(evt) {
                    alert("The selected language is: " + evt.selectedItem);
                }

        });
    };
}



//===Search box ===
function searchbox() {
	//Search Box Toggle
	if($('.seach-toggle').length){
		//Dropdown Button
		$('.seach-toggle').on('click', function() {
			$(this).toggleClass('active');
			$(this).next('.search-box').toggleClass('now-visible');
		});
	}
}


// Date picker
function datepicker () {
    if ($('#datepicker').length) {
        $('#datepicker').datepicker();
    };
}



// Time picker
function timepicker () {
    if ($('input[name="time"]').length) {
        $('input[name="time"]').ptTimeSelect();
    }
}



// ===Prealoder===
function prealoader() {
    if($('.preloader').length){
        $('.preloader').delay(200).fadeOut(500);
    }
}



//  Fact counter
function CounterNumberChanger () {
	var timer = $('.timer');
	if(timer.length) {
		timer.appear(function () {
			timer.countTo();
		})
	}
}



// Single Product Tab
function singleProductTab () {
    if($('.tabs-box').length){
        $('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
            e.preventDefault();
            var target = $($(this).attr('data-tab'));

            if ($(target).is(':visible')){
                return false;
            }else{
                target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
                $(this).addClass('active-btn');
                target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
                target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
                $(target).fadeIn(300);
                $(target).addClass('active-tab');
            }
        });
    }
}



// Price Filter
function priceFilter() {
    if ($('.price-ranger').length) {
        $('.price-ranger #slider-range').slider({
            range: true,
            min: 10,
            max: 200,
            values: [11, 99],
            slide: function(event, ui) {
                $('.price-ranger .ranger-min-max-block .min').val('$' + ui.values[0]);
                $('.price-ranger .ranger-min-max-block .max').val('$' + ui.values[1]);
            }
        });
        $('.price-ranger .ranger-min-max-block .min').val('$' + $('.price-ranger #slider-range').slider('values', 0));
        $('.price-ranger .ranger-min-max-block .max').val('$' + $('.price-ranger #slider-range').slider('values', 1));
    };
}



//Accordion Box
function accordion() {
    if($('.accordion-box').length){
        $(".accordion-box").on('click', '.accord-btn', function() {

            if($(this).hasClass('active')!==true){
            $('.accordion .accord-btn').removeClass('active');

            }

            if ($(this).next('.accord-content').is(':visible')){
                $(this).removeClass('active');
                $(this).next('.accord-content').slideUp(500);
            }else{
                $(this).addClass('active');
                $('.accordion .accord-content').slideUp(500);
                $(this).next('.accord-content').slideDown(500);	
            }
        });	
    }
}


//Accordion Holder
if($('.accordion-holder').length){
    $('.accordion-holder .acc-btn').on('click', function() {
    if($(this).hasClass('active')!==true){
            $('.accordion-holder .acc-btn').removeClass('active');
        }

    if ($(this).next('.acc-content').is(':visible')){
            $(this).removeClass('active');
            $(this).next('.acc-content').slideUp(500);
        }
    else{
            $(this).addClass('active');
            $('.accordion-holder .acc-content').slideUp(500);
            $(this).next('.acc-content').slideDown(500);	
        }
    });
}



//Progress Bar / Levels
if($('.progress-levels .progress-box .bar-fill').length){
    $(".progress-box .bar-fill").each(function() {
        $('.progress-box .bar-fill').appear(function(){
            var progressWidth = $(this).attr('data-percent');
            $(this).css('width',progressWidth+'%');
        });

    },{accY: 0});
}



//Fact Counter + Text Count
if($('.count-box').length){
    $('.count-box').appear(function(){

        var $t = $(this),
            n = $t.find(".count-text").attr("data-stop"),
            r = parseInt($t.find(".count-text").attr("data-speed"), 10);

        if (!$t.hasClass("counted")) {
            $t.addClass("counted");
            $({
                countNum: $t.find(".count-text").text()
            }).animate({
                countNum: n
            }, {
                duration: r,
                easing: "linear",
                step: function() {
                    $t.find(".count-text").text(Math.floor(this.countNum));
                },
                complete: function() {
                    $t.find(".count-text").text(this.countNum);
                }
            });
        }

    },{accY: 0});
}



// Cart Touch Spin
function cartTouchSpin() {
    if ($('.quantity-spinner').length) {
        $("input.quantity-spinner").TouchSpin({
            verticalbuttons: true
        });
    }
}






//=== Tool tip ===
function tooltip () {
	if ($('.tool_tip').length) {
			$('.tool_tip').tooltip();
		};
	$
}



// ===Project===
function projectMasonaryLayout() {
    if ($('.masonary-layout').length) {
        $('.masonary-layout').isotope({
            layoutMode: 'masonry'
        });
    }
    if ($('.post-filter').length) {
        $('.post-filter li').children('.filter-text').on('click', function() {
            var Self = $(this);
            var selector = Self.parent().attr('data-filter');
            $('.post-filter li').removeClass('active');
            Self.parent().addClass('active');
            $('.filter-layout').isotope({
                filter: selector,
                animationOptions: {
                    duration: 500,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
    }

    if ($('.post-filter.has-dynamic-filters-counter').length) {
        // var allItem = $('.single-filter-item').length;
        var activeFilterItem = $('.post-filter.has-dynamic-filters-counter').find('li');
        activeFilterItem.each(function() {
            var filterElement = $(this).data('filter');
            var count = $('.filter-layout').find(filterElement).length;
            $(this).children('.filter-text').append('<span class="count">' + count + '</span>');
        });
    };
}







function countryInfo() {
    if ($('.area_select').length) {
        $('.area_select').change(function() {
            var val = $(this).val();
            if (val) {
                $('.state:not(#value' + val + ')').slideUp();
                $('#value' + val).slideDown();
            } else {
                $('.state').slideDown();
            }
        });
    }
}



// Select Menu 
function selectDropdown() {
    if ($(".selectmenu").length) {
        $(".selectmenu").selectmenu();

        var changeSelectMenu = function(event, item) {
            $(this).trigger('change', item);
        };
        $(".selectmenu").selectmenu({ change: changeSelectMenu });
    };
}


//=== CountDownTimer===
function countDownTimer () {
	if ($('.time-countdown').length) {
		$('.time-countdown').each(function () {
			var Self = $(this);
			var countDate = Self.data('countdown-time'); // getting date

			Self.countdown(countDate, function(event) {
	     		$(this).html('<h2>'+ event.strftime('%D : %H : %M : %S') +'</h2>');
	   		});
		});
	};
	if ($('.time-countdown-two').length) {
		$('.time-countdown-two').each(function () {
			var Self = $(this);
			var countDate = Self.data('countdown-time'); // getting date

			Self.countdown(countDate, function(event) {
	     		$(this).html('<li> <div class="box"> <span class="days">'+ event.strftime('%D') +'</span> <span class="timeRef">days</span> </div> </li> <li> <div class="box"> <span class="hours">'+ event.strftime('%H') +'</span> <span class="timeRef clr-1">hours</span> </div> </li> <li> <div class="box"> <span class="minutes">'+ event.strftime('%M') +'</span> <span class="timeRef clr-2">minutes</span> </div> </li> <li> <div class="box"> <span class="seconds">'+ event.strftime('%S') +'</span> <span class="timeRef clr-3">seconds</span> </div> </li>');
	   		});
		});
	};
}




//=== Testimonial Carousel ===
function testimonialCarousel () {
    if ($('.testimonial-carousel').length) {
        $('.testimonial-carousel').owlCarousel({
            dots: false,
            loop: true,
            margin: 30,
            nav: true,
            navText: [
                '<span class="fa fa-angle-left"></span>',
                '<span class="fa fa-angle-right"></span>'
            ],
            autoplayHoverPause: false,
            autoplay: 15000,
            smartSpeed: 700,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                800:{
                    items:2
                },
                1024:{
                    items:2
                },
                1100:{
                    items:2
                },
                1200:{
                    items:3
                }
            }
        });    		
    }
}


//=== Banner Carousel ===
function bannerCarousel () {
    if ($('.banner-carousel').length) {
        $('.banner-carousel').owlCarousel({
            dots: false,
            loop: true,
            margin: 0,
            nav: true,
            navText: [
                '<span class="fa fa-angle-left"></span>',
                '<span class="fa fa-angle-right"></span>'
            ],
            autoplayHoverPause: false,
            autoplay: 15000,
            smartSpeed: 700,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                800:{
                    items:1
                },
                1024:{
                    items:1
                },
                1100:{
                    items:1
                },
                1200:{
                    items:1
                }
            }
        });    		
    }
}



//=== Blog Carousel One ===
function blogCarouselOne () {
    if ($('.blog-carousel-one').length) {
        $('.blog-carousel-one').owlCarousel({
            dots: true,
            loop: true,
            margin: 30,
            nav: false,
            navText: [
                '<span class="fa fa-angle-left"></span>',
                '<span class="fa fa-angle-right"></span>'
            ],
            autoplayHoverPause: false,
            autoplay: 15000,
            smartSpeed: 700,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                800:{
                    items:1
                },
                1024:{
                    items:2
                },
                1100:{
                    items:2
                },
                1200:{
                    items:3
                }
            }
        });    		
    }
}


//=== Banner Carousel Style4 ===
function bannerCarouselStyle4 () {
    if ($('.banner-carousel-style4').length) {
        $('.banner-carousel-style4').owlCarousel({
            animateOut: 'slideOutDown',
		    animateIn: 'zoomIn',
            dots: false,
            loop: true,
            margin: 0,
            nav: true,
            navText: [
                '<i class="fa fa-angle-up" aria-hidden="true"></i>',
                '<i class="fa fa-angle-down" aria-hidden="true"></i>'
            ],
            autoplayHoverPause: false,
            autoplay: 6000,
            smartSpeed: 1000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                800:{
                    items:1
                },
                1024:{
                    items:1
                },
                1100:{
                    items:1
                },
                1200:{
                    items:1
                }
            }
        });    		
    }
}


//=== Brand Carousel Style3 ===
function brandCarouselStyle3 () {
    if ($('.brand-items-style3').length) {
        $('.brand-items-style3').owlCarousel({
            dots: false,
            loop: true,
            margin: 0,
            nav: true,
            navText: [
                '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                '<i class="fa fa-angle-right" aria-hidden="true"></i>'
            ],
            autoplayHoverPause: false,
            autoplay: 6000,
            smartSpeed: 1000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                800:{
                    items:3
                },
                1024:{
                    items:3
                },
                1100:{
                    items:3
                },
                1200:{
                    items:4
                }
            }
        });    		
    }
}


//=== Services Carousel ===
function servicesCarousel () {
    if ($('.services-carousel').length) {
        $('.services-carousel').owlCarousel({
            dots: true,
            loop: true,
            margin: 0,
            nav: false,
            navText: [
                '<span class="icon-arrow"></span>',
                '<span class="icon-arrow1"></span>'
            ],
            autoplayHoverPause: false,
            autoplay: 6000,
            smartSpeed: 1000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                800:{
                    items:1
                },
                1024:{
                    items:1
                },
                1100:{
                    items:1
                },
                1200:{
                    items:1
                }
            }
        });    		
    }
}


//=== Testimonial Style3 Carousel ===
function testimonialStyle3Carousel () {
    if ($('.testimonial-style3-carousel').length) {
        $('.testimonial-style3-carousel').owlCarousel({
            dots: true,
            loop: true,
            margin: 30,
            stagePadding: 10,
            nav: false,
            navText: [
                '<span class="icon-arrow"></span>',
                '<span class="icon-arrow1"></span>'
            ],
            autoplayHoverPause: false,
            autoplay: 6000,
            smartSpeed: 1000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                800:{
                    items:1
                },
                1024:{
                    items:1
                },
                1100:{
                    items:2
                },
                1200:{
                    items:2
                }
            }
        });    		
    }
}


//=== Team Carousel ===
function teamCarousel () {
    if ($('.team-carousel').length) {
        $('.team-carousel').owlCarousel({
            dots: true,
            loop: true,
            margin: 30,
            nav: false,
            navText: [
                '<span class="icon-arrow"></span>',
                '<span class="icon-arrow1"></span>'
            ],
            autoplayHoverPause: false,
            autoplay: 6000,
            smartSpeed: 1000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                800:{
                    items:1
                },
                1024:{
                    items:1
                },
                1100:{
                    items:1
                },
                1200:{
                    items:1
                }
            }
        });    		
    }
}


//=== screenshot Carousel ===
function screenshotCarousel () {
    if ($('.screenshot-carousel').length) {
        $('.screenshot-carousel').owlCarousel({
            dots: false,
            loop: true,
            margin: 20,
            center: true,
            nav: true,
            navText: [
                '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                '<i class="fa fa-angle-right" aria-hidden="true"></i>'
            ],
            autoplayHoverPause: false,
            autoplay: 6000,
            smartSpeed: 1000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                800:{
                    items:1
                },
                1024:{
                    items:1
                },
                1100:{
                    items:1
                },
                1200:{
                    items:1
                }
            }
        });    		
    }
}


//=== Blog Style4 Carousel ===
function blogStyle4Carousel () {
    if ($('.blog-style4-carousel').length) {
        $('.blog-style4-carousel').owlCarousel({
            dots: true,
            loop: true,
            margin: 30,
            nav: false,
            navText: [
                '<span class="icon-arrow"></span>',
                '<span class="icon-arrow1"></span>'
            ],
            autoplayHoverPause: false,
            autoplay: 6000,
            smartSpeed: 1000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                800:{
                    items:1
                },
                1024:{
                    items:2
                },
                1100:{
                    items:2
                },
                1200:{
                    items:3
                }
            }
        });    		
    }
}



//=== History Carousel ===
function historyCarousel () {
    if ($('.history-carousel').length) {
        $('.history-carousel').owlCarousel({
            dots: false,
            loop: true,
            margin: 30,
            nav: true,
            navText: [
                '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                '<i class="fa fa-angle-right" aria-hidden="true"></i>'
            ],
            autoplayHoverPause: false,
            autoplay: 6000,
            smartSpeed: 1000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                800:{
                    items:1
                },
                1024:{
                    items:1
                },
                1100:{
                    items:1
                },
                1200:{
                    items:1
                }
            }
        });    		
    }
}


//=== Team Carousel Styke2===
function teamCarouselStyle2 () {
    if ($('.team-carousel-style2').length) {
        $('.team-carousel-style2').owlCarousel({
            dots: true,
            loop: true,
            margin: 30,
            nav: false,
            navText: [
                '<span class="icon-arrow"></span>',
                '<span class="icon-arrow1"></span>'
            ],
            autoplayHoverPause: false,
            autoplay: 6000,
            smartSpeed: 1000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                800:{
                    items:1
                },
                1024:{
                    items:1
                },
                1100:{
                    items:1
                },
                1200:{
                    items:1
                }
            }
        });    		
    }
}



//=== Portfolio Carousel Style8===
function portfolioCarouselStyle8 () {
    if ($('.portfolio-style8-carousel').length) {
        $('.portfolio-style8-carousel').owlCarousel({
            dots: false,
            loop: true,
            margin: 140,
            nav: true,
            navText: [
                '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                '<i class="fa fa-angle-right" aria-hidden="true"></i>'
            ],
            autoplayHoverPause: false,
            autoplay: 6000,
            smartSpeed: 1000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                800:{
                    items:1
                },
                1024:{
                    items:1
                },
                1100:{
                    items:1
                },
                1200:{
                    items:1
                }
            }
        });    		
    }
}



//=== Portfolio Carousel Style9===
function portfolioCarouselStyle9 () {
    if ($('.portfolio-style9-carousel').length) {
        $('.portfolio-style9-carousel').owlCarousel({
            dots: true,
            loop: true,
            margin: 0,
            nav: true,
            navText: [
                '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                '<i class="fa fa-angle-right" aria-hidden="true"></i>'
            ],
            autoplayHoverPause: false,
            autoplay: 6000,
            smartSpeed: 1000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                800:{
                    items:1
                },
                1024:{
                    items:1
                },
                1100:{
                    items:1
                },
                1200:{
                    items:1
                }
            }
        });    		
    }
}



//=== Single Product Carousel===
function singleProductCarousel () {
    if ($('.single-product-carousel').length) {
        $('.single-product-carousel').owlCarousel({
            dots: false,
            loop: true,
            margin: 0,
            nav: true,
            navText: [
                '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                '<i class="fa fa-angle-right" aria-hidden="true"></i>'
            ],
            autoplayHoverPause: false,
            autoplay: 20000,
            smartSpeed: 2000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                800:{
                    items:1
                },
                1024:{
                    items:1
                },
                1100:{
                    items:1
                },
                1200:{
                    items:1
                }
            }
        });    		
    }
}


//=== Shop Review Carousel===
function shopReviewCarousel () {
    if ($('.shop-review-carousel').length) {
        $('.shop-review-carousel').owlCarousel({
            dots: false,
            loop: true,
            margin: 30,
            nav: true,
            navText: [
                '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                '<i class="fa fa-angle-right" aria-hidden="true"></i>'
            ],
            autoplayHoverPause: false,
            autoplay: 20000,
            smartSpeed: 2000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                800:{
                    items:1
                },
                1024:{
                    items:1
                },
                1100:{
                    items:2
                },
                1200:{
                    items:2
                }
            }
        });    		
    }
}


//=== Working Style1 Carousel===
function workingStyle1Carousel () {
    if ($('.working-style1-carousel').length) {
        $('.working-style1-carousel').owlCarousel({
            dots: false,
            loop: true,
            margin: 30,
            stagePadding: 10,
            nav: true,
            navText: [
                '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                '<i class="fa fa-angle-right" aria-hidden="true"></i>'
            ],
            autoplayHoverPause: false,
            autoplay: 20000,
            smartSpeed: 2000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                800:{
                    items:1
                },
                1024:{
                    items:2
                },
                1100:{
                    items:2
                },
                1200:{
                    items:3
                }
            }
        });    		
    }
}



//=== project Style2 Carousel===
function projectStyle2Carousel () {
    if ($('.project-style2-carousel').length) {
        $('.project-style2-carousel').owlCarousel({
            dots: false,
            loop: true,
            margin: 0,
            stagePadding: 0,
            nav: true,
            navText: [
                '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                '<i class="fa fa-angle-right" aria-hidden="true"></i>'
            ],
            autoplayHoverPause: false,
            autoplay: 20000,
            smartSpeed: 2000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                800:{
                    items:2
                },
                1024:{
                    items:2
                },
                1100:{
                    items:3
                },
                1200:{
                    items:1
                }
            }
        });    		
    }
}



//=== Feature Carousel===
function featureCarousel () {
    if ($('.feature-carousel').length) {
        $('.feature-carousel').owlCarousel({
            dots: false,
            loop: true,
            margin: 30,
            stagePadding: 0,
            nav: true,
            navText: [
                '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                '<i class="fa fa-angle-right" aria-hidden="true"></i>'
            ],
            autoplayHoverPause: false,
            autoplay: 20000,
            smartSpeed: 2000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                800:{
                    items:1
                },
                1024:{
                    items:1
                },
                1100:{
                    items:1
                },
                1200:{
                    items:1
                }
            }
        });    		
    }
}























//Testimonial Style5 Carousel
if ($('.testimonial-style5-carousel').length) {
    $('.testimonial-style5-carousel').owlCarousel({
        animateOut: 'slideOutDown',
        animateIn: 'zoomIn',
        loop: true,
        margin: 0,
        nav: false,
        smartSpeed: 10000,
        autoHeight: true,
        autoplay: true,
        autoplayTimeout:10000,
        navText: [ '<span class="fa fa-chevron-left"></span>', '<span class="fa fa-chevron-right"></span>' ],
        dots: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1024:{
                items:1
            }
        }
    });     		
}



var menuBtns = document.getElementsByClassName('js-anim-menu-btn');
if( menuBtns.length > 0 ) {
    for(var i = 0; i < menuBtns.length; i++) {(function(i){
        initMenuBtn(menuBtns[i]);
    })(i);}

    function initMenuBtn(btn) {
        btn.addEventListener('click', function(event){	
            event.preventDefault();
            var status = !Util.hasClass(btn, 'anim-menu-btn--state-b');
            Util.toggleClass(btn, 'anim-menu-btn--state-b', status);
            // emit custom event
            var event = new CustomEvent('anim-menu-btn-clicked', {detail: status});
            btn.dispatchEvent(event);
        });
    };
};


//Menu Show / Hide
if($('.anim-menu-btn').length){
    var animButton = $(".anim-menu-btn"),
        navInner = $(".nav-inner");
    function showMenu() {
        TweenMax.to(navInner, 0.6, {
            force3D: false,
            opacity: "1",
            ease: Expo.easeInOut
        });
        navInner.removeClass("close-menu");
    }

    function hideMenu() {
        TweenMax.to(navInner, 0.6, {
            force3D: false,
            opacity: "0",
            ease: Expo.easeInOut
        });
        navInner.addClass("close-menu");
    }
    animButton.on("click", function() {
        if (navInner.hasClass("close-menu")) showMenu();
        else hideMenu();
    });
}


//Mobile Nav Hide Show
if($('.mobile-menu').length){

    var mobileMenuContent = $('.main-header .nav-outer .main-menu .navigation').html();
    $('.mobile-menu .navigation').append(mobileMenuContent);
    $('.sticky-header .navigation').append(mobileMenuContent);
    //Dropdown Button
    $('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
        $(this).prev('ul').slideToggle(500);
    });

    var animButton = $(".anim-menu-btn"),
        mobileMneu = $(".mobile-menu");

    function showMenu() {
        TweenMax.to(mobileMneu, 0.6, {
            force3D: false,
            left: "0",
            ease: Expo.easeInOut
        });
        mobileMneu.removeClass("close-menu");
    }

    function hideMenu() {
        TweenMax.to(mobileMneu, 0.6, {
            force3D: false,
            left: "-500px",
            ease: Expo.easeInOut
        });
        mobileMneu.addClass("close-menu");
    }
    animButton.on("click", function() {
        if (mobileMneu.hasClass("close-menu")) showMenu();
        else hideMenu();
    });
}


function windwLoad() {
    fullHeight();
    bannerSlider();
    setTimeout(function() {
        $(".animInBottom").each(function(a) {
            var b = $(this);
            setTimeout(function() {
                TweenMax.to(b, 1.2, {
                    force3D: true,
                    bottom: "0",
                    ease: Expo.easeInOut
                });
            }, 230 * a);
        });

    }, 400);

    setTimeout(function() {
        $(".animInTop").each(function(a) {
            var b = $(this);
            setTimeout(function() {
                TweenMax.to(b, 1.2, {
                    force3D: true,
                    top: "0",
                    ease: Expo.easeInOut
                });
            }, 230 * a);
        });

    }, 800);
}	


function fullHeight(){
    $('.full-height').css("height", $(window).height());
}
fullHeight();

$(window).on('resize', function() {
    fullHeight();

});


function bannerSlider() {
    if ($(".banner-slider").length > 0) {

        // Banner Slider
        var bannerSlider = new Swiper('.banner-slider', {
            spaceBetween: 0,
            slidesPerView: 1.3,
            mousewheel: true,
            height: 200,
            grabCursor: true,
            loop: true,
            speed: 1400,
            autoplay: {
                delay: 5000,
            },
            pagination: {
                el: '.banner-slider-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.banner-slider-button-next',
                prevEl: '.banner-slider-button-prev',
            },
        });
        bannerSlider.on('slideChange', function() {
            var csli = bannerSlider.realIndex + 1,
                curnum = $('#current');
            TweenMax.to(curnum, 0.2, {
                force3D: true,
                y: -10,
                opacity: 0,
                ease: Power2.easeOut,
                onComplete: function() {
                    TweenMax.to(curnum, 0.1, {
                        force3D: true,
                        y: 10
                    });
                    curnum.html('0' + csli);
                }
            });
            TweenMax.to(curnum, 0.2, {
                force3D: true,
                y: 0,
                delay: 0.3,
                opacity: 1,
                ease: Power2.easeOut
            });
        });

        var totalSlides = bannerSlider.slides.length - 2;
        $('#total').html('0' + totalSlides);
    }

}


// Statements Carousel 
if ($('.statements').length) {
    $('.statements').owlCarousel({
        animateOut: 'slideOutUp',
        animateIn: 'fadeIn',
        loop:true,
        margin:0,
        nav: false,
        singleItem:true,
        smartSpeed: 500,
        autoHeight: false,
        autoplay: true,
        autoplayTimeout:10000,
        navText: [ '<span class="flaticon-up-arrow"></span>', '<span class="flaticon-download-arrow-1"></span>' ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            800:{
                items:1
            },
            1024:{
                items:1
            },
            1280:{
                items:1
            }
        }
    });    		
}


//Single Vertical Carousel
if($('.single-vertical-carousel').length){
    $('.single-vertical-carousel').slick({
    dots: true,
    autoplay: true,
    loop:true,
    autoplaySpeed: 5000,
    infinite: true,
    responsive: true,
    slidesToShow: 2,
    vertical:true,
    slidesToScroll: 1,
    prevArrow:"<div class='prev-btn'><span class='fa fa-angle-up'></span></div>",
    nextArrow:"<div class='next-btn'><span class='fa fa-angle-down'></span></div>"
  });
}

if($('.slider-nav').length){
       $('.slider-nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
        focusOnSelect: true
    });
}





//Hidden Sidebar
if ($('.hidden-bar').length) {
    var hiddenBar = $('.hidden-bar');
    var hiddenBarOpener = $('.hidden-bar-opener');
    var hiddenBarCloser = $('.hidden-bar-closer');
    var navToggler = $('.nav-toggler');
    $('.hidden-bar-wrapper').mCustomScrollbar();

    //Show Sidebar
    hiddenBarOpener.on('click', function () {
        hiddenBar.toggleClass('visible-sidebar');
        navToggler.toggleClass('open');
    });

    //Hide Sidebar
    hiddenBarCloser.on('click', function () {
        hiddenBar.toggleClass('visible-sidebar');
        navToggler.toggleClass('open');
    });
}   


//LightBox / Fancybox
if($('.lightbox-image').length) {
    $('.lightbox-image').fancybox({
        openEffect  : 'fade',
        closeEffect : 'fade',
        
        youtube : {
        controls : 0,
        showinfo : 0
    },
        
        helpers : {
            media : {}
        }
    });
}


if($('.paroller').length){
    $('.paroller').paroller({
          factor: 0.05,            // multiplier for scrolling speed and offset, +- values for direction control  
          factorLg: 0.05,          // multiplier for scrolling speed and offset if window width is less than 1200px, +- values for direction control  
          type: 'foreground',      // background, foreground  
          direction: 'horizontal'  // vertical, horizontal  
    });
}


// Elements Animation
if($('.wow').length){
    var wow = new WOW(
      {
        boxClass:     'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset:       0,          // distance to the element when triggering the animation (default is 0)
        mobile:       false,       // trigger animations on mobile devices (default is true)
        live:         true       // act on asynchronously loaded content (default is true)
      }
    );
    wow.init();
}


// AOS Animation
if ($("[data-aos]").length) { 
    AOS.init({
    duration: 1000,
    mirror: true
  });
}


// Scroll To Explore Div
if($('.scroll-to-explore').length){
    $(".scroll-to-explore").on('click', function() {
        var target = $(this).attr('data-target');
       // animate
       $('html, body').animate({
           scrollTop: $(target).offset().top
         }, 1500);

    });
}
	

//Contact Form Validation
if($("#contact-form").length){
    $("#contact-form").validate({
        submitHandler: function(form) {
          var form_btn = $(form).find('button[type="submit"]');
          var form_result_div = '#form-result';
          $(form_result_div).remove();
          form_btn.before('<div id="form-result" class="alert alert-success" role="alert" style="display: none;"></div>');
          var form_btn_old_msg = form_btn.html();
          form_btn.html(form_btn.prop('disabled', true).data("loading-text"));
          $(form).ajaxSubmit({
            dataType:  'json',
            success: function(data) {
              if( data.status = 'true' ) {
                $(form).find('.form-control').val('');
              }
              form_btn.prop('disabled', false).html(form_btn_old_msg);
              $(form_result_div).html(data.message).fadeIn('slow');
              setTimeout(function(){ $(form_result_div).fadeOut('slow') }, 6000);
            }
          });
        }
    });
}


// Add Comment Form Validation
if($("#add-comment-form").length){
    $("#add-comment-form").validate({
        submitHandler: function(form) {
          var form_btn = $(form).find('button[type="submit"]');
          var form_result_div = '#form-result';
          $(form_result_div).remove();
          form_btn.before('<div id="form-result" class="alert alert-success" role="alert" style="display: none;"></div>');
          var form_btn_old_msg = form_btn.html();
          form_btn.html(form_btn.prop('disabled', true).data("loading-text"));
          $(form).ajaxSubmit({
            dataType:  'json',
            success: function(data) {
              if( data.status = 'true' ) {
                $(form).find('.form-control').val('');
              }
              form_btn.prop('disabled', false).html(form_btn_old_msg);
              $(form_result_div).html(data.message).fadeIn('slow');
              setTimeout(function(){ $(form_result_div).fadeOut('slow') }, 6000);
            }
          });
        }
    });
}











// Dom Ready Function
jQuery(document).on('ready', function () {
	(function ($) {
        // add your functions
        languageSwitcher ();
        searchbox ();
        datepicker ();
        timepicker ();
        
        CounterNumberChanger ();
        singleProductTab ();
        priceFilter ();
        accordion ();
        cartTouchSpin ();
        selectDropdown ();
        tooltip ();
        countryInfo ();
        countDownTimer ();
        
        testimonialCarousel();
        bannerCarousel();
        blogCarouselOne();
        bannerCarouselStyle4();
        brandCarouselStyle3();
        servicesCarousel();
        testimonialStyle3Carousel();
        teamCarousel();
        screenshotCarousel();
        blogStyle4Carousel();
        historyCarousel();
        teamCarouselStyle2();
        portfolioCarouselStyle8();
        portfolioCarouselStyle9();
        singleProductCarousel();
        shopReviewCarousel();
        workingStyle1Carousel();
        projectStyle2Carousel();
        featureCarousel();
        
        
        
    
     
   
       

   
 
	})(jQuery);
});



jQuery(window).on('scroll', function(){
	(function ($) {

    headerStyle ();  
  
    
	})(jQuery);
});



// Instance Of Fuction while Window Load event
jQuery(window).on('load', function() {
    (function($) {
        prealoader ();
        projectMasonaryLayout ();
        windwLoad ();
     
        
    })(jQuery);
});















$(window).enllax();