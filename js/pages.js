$(document).ready(function() {
    
    let container = $('.gallery');
    $('.work-image').click(function(){
        $('#overlay').css('display', 'flex');
        $('.work-page').addClass('galleryOn');
        $(container).fadeIn(100);
        $(this).clone().prependTo('.gallery');
    });
    $('#overlay, .gallery').click(function(){
        $('#overlay').css('display', 'none');
        $(container).fadeOut(100);
        $('.work-page').removeClass('galleryOn');
        $('.gallery .work-image').remove();
    });
    
    ////

    var checkMobile = function(){
        var isTouch = ('ontouchstart' in document.documentElement);
        if ( isTouch ) {
            $('html').addClass('touch');
        }
        else {
            $('html').addClass('no-touch');
        };
    };
    checkMobile();
});