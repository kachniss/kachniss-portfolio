$(function(){ 

    var headerHeight = $('header').height();
    /** 
     * smooth scrolling
    */
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if(target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - headerHeight
            }, 2000);
        }
    });

    /**
     * inverse header
     */
    var bannerHeight = $('.banner').height();

    if ($(window).scrollTop() <= bannerHeight) {
        $('header').addClass('inverse-header');
    }

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();

        if (scroll >= bannerHeight - headerHeight) {
            $('header').addClass('inverse-header');
        } else {
            $('header').removeClass('inverse-header'); 
        }
    });

    /**
     * banner arrow scroll
     */
    $('.js-enter-arrow').on('click', function() {
        $("html, body").stop().animate( {scrollTop: bannerHeight - headerHeight}, 2000);
    });

});