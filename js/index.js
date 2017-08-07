/* takes you back to the top of the page */
$(document).ready(function(){
     $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#back-to-top').click(function () {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });

        $('#back-to-top').tooltip('show');

});

/* mobile navigation */
$(document).ready(function(){
        //toggle menu
        	$('.hamburger-container').click(function(){
        		$('#menu').slideToggle();
        	});

        	//to fix issue that toggle adds style(hides) to nav
        	$(window).resize(function(){
        		if(window.innerWidth > 1024) {
        			$('#menu').removeAttr('style');
        		}
        	});

        	//icon animation
        	var topBar = $('.hamburger li:nth-child(1)'),
        		middleBar = $('.hamburger li:nth-child(2)'),
        		bottomBar = $('.hamburger li:nth-child(3)');

        	$('.hamburger-container').on('click', function() {
        		if (middleBar.hasClass('rot-45deg')) {
        			topBar.removeClass('rot45deg');
        			middleBar.removeClass('rot-45deg');
        			bottomBar.removeClass('hidden');
        		} else {
        			bottomBar.addClass('hidden');
        			topBar.addClass('rot45deg');
        			middleBar.addClass('rot-45deg');
        		}
        	});
});

$(function () {
  $(document).scroll(function () {
	  var $nav = $(".top-nav");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
});
