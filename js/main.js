$(function(){ 

    var headerHeight = $('header').height();
    /** 
     * smooth scrolling
    */
    $('a[href^="#"]').on('click', function(event) {
        headerHeight = $('header').height();       
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

    if ($(window).scrollTop() >= bannerHeight - headerHeight) {
        $('header').addClass('inverse-header');
    }

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();

        if (scroll >= bannerHeight - headerHeight - 1) {
            $('header').addClass('inverse-header');
        } else {
            $('header').removeClass('inverse-header');
        }
    });

    /**
     * banner arrow scroll
     */
    $('.js-enter-arrow').on('click', function() {
        headerHeight = $('header').height();
        $('html, body').stop().animate( {scrollTop: bannerHeight - headerHeight}, 2000);
    });


    /**
     * hightlight skills
     */
    $('.inhabitent-thumbnail').on('mouseover', function() {
        $('.inh').css('background', '#da3344');
    });
    $('.inhabitent-thumbnail').on('mouseleave', function() {
        $('.inh').css('background', '#dad4d5');
    });

    $('.pong-thumbnail').on('mouseover', function() {
        $('.pong').css('background', '#da3344');
    });
    $('.pong-thumbnail').on('mouseleave', function() {
        $('.pong').css('background', '#dad4d5');
    });

    $('.instanews-thumbnail').on('mouseover', function() {
        $('.insta').css('background', '#da3344');
    });
    $('.instanews-thumbnail').on('mouseleave', function() {
        $('.insta').css('background', '#dad4d5');
    });

    $('.aloha-thumbnail').on('mouseover', function() {
        $('.aloha').css('background', '#da3344');
    });
    $('.aloha-thumbnail').on('mouseleave', function() {
        $('.aloha').css('background', '#dad4d5');
    });

});