"use strict";

$(document).ready(function () {
  $('.state_toggle').click(function () {
    $('body').toggleClass('dark');
  }); ////

  /*
  
  $('.project').hide();
  $('.project:first').show();
  
  function changeProject(){
    $(projectNav).removeClass('current');
    $(this).addClass('current');  
    let selectedIndex = $(this).index() + 1;
    let selectWork = $('.project' + selectedIndex);
    
    $('.project').hide();
    $(selectWork).show();            
  }
  
  $(projectNav).click(changeProject);  
    $('.project').append('<div class="nav-arrows"><span class="prev-arrow nav-arrow"></span><span class="next-arrow nav-arrow"></span></div>');
    $('.nav-arrow').click(function () {
    $('.project').hide();
    $(projectNav).removeClass('current');
    // let selectedIndexNav = $(projectNav).index() + 1;
    // let selectedProjectNav = $(projectNav + selectedIndexNav);
    // $(selectedProjectNav).addClass('current');
  });
  $('.prev-arrow').click(function () {
    $(this).closest('.project').prev().show();
  });
  $('.next-arrow').click(function () {
    $(this).closest('.project').next().show();
  });
  
  
  */
  //Deals with orphan words

  $('.home p').each(function () {
    $(this).html($(this).html().replace(/\s((?=(([^\s<>]|<[^>]*>)+))\2)\s*$/, '&nbsp;$1'));
  }); ////

  $('.scroll-top').click(function () {
    $('html, body').animate({
      scrollTop: $('body').offset().top
    }, 500);
  }); ////

  var works = {
    nameA: ["Master", "Farmer's", "ClixScale", "VOD", "IQ Game Test", "Megatech"],
    nameB: ["Protection", "Helper App", "Dashboard", "Streaming", "Dashboard", "eStore"]
  };
  var elements = document.getElementsByClassName('name1A');
  Array.prototype.forEach.call(elements, function (element) {
    element.innerHTML = works.nameA[0];
  });
  var elements = document.getElementsByClassName('name1B');
  Array.prototype.forEach.call(elements, function (element) {
    element.innerHTML = works.nameB[0];
  });
  var elements = document.getElementsByClassName('name2A');
  Array.prototype.forEach.call(elements, function (element) {
    element.innerHTML = works.nameA[1];
  });
  var elements = document.getElementsByClassName('name2B');
  Array.prototype.forEach.call(elements, function (element) {
    element.innerHTML = works.nameB[1];
  });
  var elements = document.getElementsByClassName('name3A');
  Array.prototype.forEach.call(elements, function (element) {
    element.innerHTML = works.nameA[2];
  });
  var elements = document.getElementsByClassName('name3B');
  Array.prototype.forEach.call(elements, function (element) {
    element.innerHTML = works.nameB[2];
  });
  var elements = document.getElementsByClassName('name4A');
  Array.prototype.forEach.call(elements, function (element) {
    element.innerHTML = works.nameA[3];
  });
  var elements = document.getElementsByClassName('name4B');
  Array.prototype.forEach.call(elements, function (element) {
    element.innerHTML = works.nameB[3];
  });
  var elements = document.getElementsByClassName('name5A');
  Array.prototype.forEach.call(elements, function (element) {
    element.innerHTML = works.nameA[4];
  });
  var elements = document.getElementsByClassName('name5B');
  Array.prototype.forEach.call(elements, function (element) {
    element.innerHTML = works.nameB[4];
  });
  var elements = document.getElementsByClassName('name6A');
  Array.prototype.forEach.call(elements, function (element) {
    element.innerHTML = works.nameA[5];
  });
  var elements = document.getElementsByClassName('name6B');
  Array.prototype.forEach.call(elements, function (element) {
    element.innerHTML = works.nameB[5];
  }); ////

  $(function () {
    var parent = $('.thumbs_wrap');
    var thumbs = parent.children();

    while (thumbs.length) {
      parent.append(thumbs.splice(Math.floor(Math.random() * thumbs.length), 1)[0]);
    }
  });

  $.fn.hScroll = function (amount) {
    amount = amount || 120;
    $(this).bind("DOMMouseScroll mousewheel", function (event) {
      var oEvent = event.originalEvent,
          direction = oEvent.detail ? oEvent.detail * -amount : oEvent.wheelDelta,
          position = $(this).scrollLeft();
      position += direction > 0 ? -amount : amount;
      $(this).scrollLeft(position);
      event.preventDefault();
    });
  };

  $('.thumbs_wrap').hScroll(50); // You can pass (optionally) scrolling amount
  // var item = document.getElementsByClassName('thumbs_wrap')[0];
  // window.addEventListener('wheel', function(e) {
  //     if (e.deltaY > 0) item.scrollLeft += 100;
  //     else item.scrollLeft -= 100;
  //     e.preventDefault();
  // });
  ////

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

  $('.work-page').prepend('<div id="cursor"></div>');

  if ($(window).width() > 960) {
    var ElementCursor = {
      cursorElement: "",
      setCursor: function setCursor(cursorElement, hoverElement) {
        $('.work-page .work_pane').css({
          'cursor': 'none'
        });
        $('html').mousedown(function (e) {
          return false;
        });
        ElementCursor.cursorElement = cursorElement;
        ElementCursor.hoverElement = hoverElement;
        ElementCursor.updateCursor();
      },
      removeCursor: function removeCursor() {
        $('html').css({
          'cursor': ''
        });
        ElementCursor.cursorElement = '';
      },
      updateCursor: function updateCursor() {
        $(document).mousemove(function (e) {
          ElementCursor.cursorElement.css({
            'position': 'fixed',
            'top': e.pageY + 'px',
            'left': e.pageX + 'px'
          }); // var width = ElementCursor.hoverElement.outerWidth();
          // var left = ElementCursor.hoverElement.offset().left;
          // if (e.pageX > left + (width / 2)) {
          //   ElementCursor.cursorElement.addClass('right');
          // } else {
          //   ElementCursor.cursorElement.removeClass('right');
          // }
        });
        ElementCursor.hoverElement.mouseenter(function (e) {
          ElementCursor.cursorElement.addClass('in');
        });
        ElementCursor.hoverElement.mouseleave(function (e) {
          ElementCursor.cursorElement.removeClass('in');
        });
      }
    };
  }

  ElementCursor.setCursor($('#cursor'), $('.screen'));
});