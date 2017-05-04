
$(document).ready(function(){
	//Script for nav scroll */
	$(window).bind('scroll', function(e) {
    scrollingfn();
  });
  /*=== one page navigation ====*/
    $('#main_navigation_menu').onePageNav({
            currentClass: 'active'
    });

	function scrollingfn() {
	  var scrollPosition = $(window).scrollTop();
	}
	// Script for top Navigation Menu
    /*
    jQuery(window).bind('scroll', function () {
      if (jQuery(window).scrollTop() > 100) {
        jQuery('#head-nav').addClass('fixed-top').removeClass('topnavbar');
      } else {
        jQuery('#head-nav').removeClass('fixed-top').addClass('topnavbar');
      }
    });
*/
    jQuery(window).bind('scroll', function () {
      if (jQuery(window).scrollTop() > 930) {
        jQuery('#navLogo').addClass('showlogo').removeClass('hidelogo');
      } else {
        jQuery('#navLogo').removeClass('showlogo').addClass('hidelogo');
      }
    });
	// Script for scrollUP*/
	$(function () {
		$.scrollUp({
	        scrollName: 'scrollUp', // Element ID
	        scrollDistance: 500, // Distance from top/bottom before showing element (px)
	        scrollFrom: 'top', // 'top' or 'bottom'
	        scrollSpeed: 500, // Speed back to top (ms)
	        easingType: 'linear', // Scroll to top easing (see http://easings.net/)
	        animation: 'fade', // Fade, slide, none
	        animationSpeed: 200, // Animation in speed (ms)
	        scrollTrigger: false, // Set a custom triggering element. Can be an HTML string or jQuery object
					//scrollTarget: false, // Set a custom target element for scrolling to the top
	        scrollText: '<i class="fa fa-angle-up"></i>', // Text for element, can contain HTML
	        scrollTitle: false, // Set a custom <a> title if required.
	        scrollImg: false, // Set true to use image
	        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	        zIndex: 2147483647 // Z-Index for the overlay
		});
		/*scroll to end*/	
	});
});

//Tweet Carousel
$('#tweet-carousel').carousel()

// number counter //

$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 12000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

/* ---- end number counter ------*/
/*
$(window).scroll(
    {
        previousTop: 0
    }, 
    function () {
    var currentTop = $(window).scrollTop();
    if (currentTop < this.previousTop) {
        $("#head-nav").fadeIn(500);
    } else {
        $("#head-nav").fadeOut(500);
    }
    this.previousTop = currentTop;
});
*/
var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff; color: #B90000;}";	

        document.body.appendChild(css);
    };