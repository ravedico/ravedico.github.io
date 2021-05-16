$(document).ready(function() {
    
    let container = $('.gallery');
    $('.screen').click(function(){
        $('#overlay').fadeIn(100);
        $('.work-page').addClass('galleryOn');
        $(container).fadeIn(100);
        $('.gallery .screen').remove();
        $(this).clone().prependTo('.gallery');
    });
    $('#overlay, .gallery').click(function(){
        $('#overlay').fadeOut(100);
        $('.gallery .screen').remove();
        $('.work-page').removeClass('galleryOn');
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
    
    if ($('html').hasClass('no-touch')) {
        // if ("ontouchstart" in document.documentElement){
        $('.work-page').prepend('<div id="cursor"></div>');

        $(document).mousemove(function(e) {
            $('#cursor').eq(0).css({
                "left": e.pageX, "top": e.pageY - $(window).scrollTop()
            });
        });

        $(".work_wrap").mouseenter(function(){
            $('#cursor').addClass('dot');
            $(this).css('cursor', 'none');

        }).mouseleave(function(){
            $('#cursor').removeClass('dot');
        });
        $(".work_wrap .screen").mouseenter(function(){
            $('#cursor').addClass('cursorOpen');
        });
        $(".work_wrap .screen").mouseleave(function(){
            $('#cursor').removeClass('cursorOpen');
        });

        $(".text_pane .container").mouseenter(function(){
            $('#cursor').addClass('hide');
        })
        .mouseleave(function(){
            $('#cursor').removeClass('hide');
        });
        $(".nav-next").mouseenter(function(){
            $('#cursor').addClass('nav-arrow nav-next');
            $(this).css('cursor', 'none');
        });
        $(".nav-prev").mouseenter(function(){
            $('#cursor').addClass('nav-arrow nav-prev');
            $(this).css('cursor', 'none');
        });
        $(".nav-next").mouseleave(function(){
            $('#cursor').removeClass('nav-arrow nav-next');
            $(this).css('cursor', 'default');

        });
        $(".nav-prev").mouseleave(function(){
            $('#cursor').removeClass('nav-arrow nav-prev');
            $(this).css('cursor', 'default');
        });
        if ($('body').hasClass('galleryOn')){
            // $('#cursor').addClass('cursorOpen', 'cursorClose');
            $(this).css('cursor', 'default');

        };
    } else {
        let addedText = '<div class="exp-text">Click an image to enlarge it</div>';
        $('.work_pane').append(addedText);
    }


    $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
    
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
    
        return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    $(window).on('resize scroll', function() {
        if ($('.text_pane').isInViewport()) {
            $('.exp-text').removeClass('show');
        } else {
            $('.exp-text').addClass('show');
        }
        
    }); 

    // $('.galleryOn #cursor').mouseover(function(){
    //     $(this).addClass("close");
    // });
    // $('.galleryOn #cursor').mouseleave(function(){
    //     $(this).removeClass("close");
    // });


    //////////////

    $.fn.attachDragger = function(){
        var attachment = false, lastPosition, position, difference;
        $( $(this).selector ).on("mousedown mouseup mousemove",function(e){
            if( e.type == "mousedown" ) attachment = true, lastPosition = [e.clientX, e.clientY];
            if( e.type == "mouseup" ) attachment = false;
            if( e.type == "mousemove" && attachment == true ){
                position = [e.clientX, e.clientY];
                difference = [ (position[0]-lastPosition[0]), (position[1]-lastPosition[1]) ];
                $(this).scrollLeft( $(this).scrollLeft() - difference[0] );
                $(this).scrollTop( $(this).scrollTop() - difference[1] );
                lastPosition = [e.clientX, e.clientY];
            }
        });
        $(window).on("mouseup", function(){
            attachment = false;
        });
    }
    $(".gallery .screen .content").attachDragger();
    
});