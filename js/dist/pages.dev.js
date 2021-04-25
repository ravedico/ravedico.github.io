"use strict";

$(document).ready(function () {
  var container = $('.gallery');
  $('.screen').click(function () {
    $('#overlay').fadeIn(100);
    $('.work-page').addClass('galleryOn');
    $(container).fadeIn(100);
    $('.gallery .screen').remove();
    $(this).clone().prependTo('.gallery');
  });
  $('#overlay, .gallery').click(function () {
    $('#overlay').fadeOut(100);
    $('.gallery .screen').remove();
    $('.work-page').removeClass('galleryOn');
  }); ////

  if ($(window).width() > 960) {
    $('.work-page').prepend('<div id="cursor"></div>');
    $(document).mousemove(function (e) {
      $('#cursor').eq(0).css({
        "left": e.pageX,
        "top": e.pageY - $(window).scrollTop()
      });
    });
    $(".work_wrap").mouseenter(function () {
      $('#cursor').addClass('dot');
    }).mouseleave(function () {
      $('#cursor').removeClass('dot');
    });
    $(".work_wrap .screen").mouseenter(function () {
      $('#cursor').addClass('cursorOpen');
    });
    $(".work_wrap .screen").mouseleave(function () {
      $('#cursor').removeClass('cursorOpen');
    });
    $(".text_pane .container").mouseenter(function () {
      $('#cursor').addClass('hide');
    }).mouseleave(function () {
      $('#cursor').removeClass('hide');
    });
    $(".nav-next").mouseenter(function () {
      $('#cursor').addClass('nav-arrow nav-next');
    });
    $(".nav-prev").mouseenter(function () {
      $('#cursor').addClass('nav-arrow nav-prev');
    });
    $(".nav-next").mouseleave(function () {
      $('#cursor').removeClass('nav-next');
    });
    $(".nav-prev").mouseleave(function () {
      $('#cursor').removeClass('nav-prev');
    });

    if ($('body').hasClass('galleryOn')) {
      $('#cursor').addClass('cursorOpen', 'cursorClose');
    }

    ;
  } // $('.galleryOn #cursor').mouseover(function(){
  //     $(this).addClass("close");
  // });
  // $('.galleryOn #cursor').mouseleave(function(){
  //     $(this).removeClass("close");
  // });

});