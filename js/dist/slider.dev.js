"use strict";

$(document).ready(function () {
  var projectNav = '.projects-nav li';
  $('.projects-nav li:first').addClass('current');
  $(projectNav).click(function () {
    $('html, body').animate({
      scrollTop: $('.projects_sec').offset().top - 50
    }, 1000);
  }); ////

  var allSlides = document.querySelectorAll('.project'),
      arrows = document.querySelector('.nav-arrows');
  var currentSlide = 0;

  function createSlider($n) {
    var dots = createSliderPagination(allSlides[$n].parentNode);
    reset(dots); // allSlides[$n].style.display = 'block';

    allSlides[$n].classList.add('current');
    dots[$n].classList.add('current');
  }

  createSlider(currentSlide);

  function reset() {
    var dots = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelectorAll(projectNav);

    for (var i = 0; i < allSlides.length; i++) {
      // allSlides[i].style.display = 'none';
      allSlides[i].classList.remove('current');
      dots[i].classList.remove('current');
    }

    return dots;
  }

  function createSliderPagination(slider) {
    var pagination = document.createElement('ul');
    pagination.className = "projects-nav";
    slider.appendChild(pagination);
    allSlides.forEach(function (item, index) {
      var dotWrapper = document.createElement('li'),
          dot = document.createElement('a');
      dotWrapper.addEventListener('click', function (event) {
        event.preventDefault();
        changeSlide(index);
      });
      dot.setAttribute('href', index);
      dotWrapper.appendChild(dot);
      pagination.appendChild(dotWrapper);
    });
    return pagination.childNodes;
  }

  function changeSlide() {
    var $n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : currentSlide;
    var $changer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var dots = reset();

    if ($n === 0 && $changer === -1) {
      $n = allSlides.length;
      currentSlide = allSlides.length;
    }

    if ($n === allSlides.length - 1 && $changer === 1) {
      $n = -1;
      currentSlide = -1;
    } // allSlides[$n + $changer].style.display = 'block';


    allSlides[$n + $changer].classList.add('current');
    dots[$n + $changer].classList.add('current');
    currentSlide = $n + $changer;
  }

  arrows.addEventListener('click', function (e) {
    if (e.target.classList.contains("next-arrow")) changeSlide(undefined, 1);
    if (e.target.classList.contains("prev-arrow")) changeSlide(undefined, -1);
  }); // Navigation with Keys

  document.onkeydown = function (event) {
    event = event || window.event;

    switch (event.keyCode) {
      case 37:
        changeSlide(undefined, -1);
        break;

      case 39:
        changeSlide(undefined, 1);
        break;
    }
  };

  setInterval(function () {
    changeSlide(undefined, 1);
  }, 10000);
});