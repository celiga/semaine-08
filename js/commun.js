// Portfolio
$(function () {

    var filterList = {

        init: function () {

            // MixItUp plugin
            // http://mixitup.io
            $('#portfoliolist').mixitup({
                targetSelector: '.portfolio',
                filterSelector: '.filter',
                effects: ['fade'],
                easing: 'snap',
                // call the hover effect
                onMixEnd: filterList.hoverEffect()
            });             

        },

        hoverEffect: function () {

            // Simple parallax effect
            $('#portfoliolist .portfolio').hover(
                function () {
                    $(this).find('.label').stop().animate({bottom: 0}, 200, 'easeOutQuad');
                    $(this).find('img').stop().animate({top: -30}, 500, 'easeOutQuad');             
                },
                function () {
                    $(this).find('.label').stop().animate({bottom: -40}, 200, 'easeInQuad');
                    $(this).find('img').stop().animate({top: 0}, 300, 'easeOutQuad');                               
                }       
            );              

        }

    };

    // Run the show!
    filterList.init();

}); 

$(document).ready(function () {
    // Scroll
    $('nav a, .arrow-next').on('click', function (e) {
        e.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000, function () {
            window.location.hash = hash;
        });
    });

    //Définie la taille des sections 
    /*$('document').ready(function () {
        //On définie notre variable min_height à la hateur de notre fenètre
        var min_height = $(window).height();
        //Si notre section  est infèrieur à min_height alors on lui donne comme propriété css une hauteur minimal égal à min_height
        if ($('section').height() < min_height) {
            $('section').css({
                'min-height': +min_height + 'px'
            });
        }
    });*/
});