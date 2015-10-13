// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require d3
//= require_tree .
function updateCourse(button) {
  // button.disabled = true;
  // button.form.submit();
}

function hideLastRow() {
  last = $(".association.container").last()
  if(last) {
    last.hide();
  }
}

$(hideLastRow);

function showLastRow() {
  $(".association.container").last().show();
}

$(function (){
  $(".new-association").on("click", showLastRow);
});

function hideDeleteRow(button){
  // var hideRow = button.parentElement.parentElement.parentElement;
  // var markDestroy = button.parentElement.lastElementChild;
  // hideRow.style.display = "none";
  // markDestroy.checked = true;
}


//****************************
//working JQuery
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
//****************************


/////////////////////////////////////////////////////
// danai's code (doesnt work)
// (function smoothscroll() {
//
// // Scroll Variables (tweakable)
// var defaultOptions = {
//
//     // Scrolling Core
//     frameRate        : 150, // [Hz]
//     animationTime    : 400, // [px]
//     stepSize         : 120, // [px]
//
//     // Pulse (less tweakable)
//     // ratio of "tail" to "acceleration"
//     pulseAlgorithm   : true,
//     pulseScale       : 4,
//     pulseNormalize   : 1,
//
//     // Acceleration
//     accelerationDelta : 20,  // 20
//     accelerationMax   : 1,   // 1
//
//     // Keyboard Settings
//     keyboardSupport   : true,  // option
//     arrowScroll       : 50,     // [px]
//
//     // Other
//     touchpadSupport   : true,
//     fixedBackground   : true,
//     excluded          : ''
// };
//
// var options = defaultOptions;
//
//
// // Other Variables
// var isExcluded = false;
// var isFrame = false;
// var direction = { x: 0, y: 0 };
// var initDone  = false;
// var root = document.documentElement;
// var activeElement;
// var observer;
// var deltaBuffer = [];
// var isMac = /^Mac/.test(navigator.platform);
//
// var key = { left: 37, up: 38, right: 39, down: 40, spacebar: 32,
//             pageup: 33, pagedown: 34, end: 35, home: 36 };
/////////////////////////////////////////////////////


/////////////////////////////////////////////////////
// cruzenunez's code (doesnt work)
// function currentYPosition() {
//     if (self.pageYOffset) return self.pageYOffset;
//     return 0;
// }

// function elmYPosition(id) {
//     var elm = document.getElementById(id);
//     var y = elm.offsetTop;
//     var node = elm;
//     while (node.offsetParent && node.offsetParent != document.body) {
//         node = node.offsetParent;
//         y += node.offsetTop;
//     } return y;
// }

// function smoothScroll(id) {
//     var startY = currentYPosition();
//     var stopY = elmYPosition(id);
//     var distance = stopY > startY ? stopY - startY : startY - stopY;
//     if (distance < 100) {
//         scrollTo(0, stopY); return;
//     }
//     var speed = Math.round(distance / 100);
//     if (speed >= 20) speed = 20;
//     var step = Math.round(distance / 25);
//     var leapY = stopY > startY ? startY + step : startY - step;
//     var timer = 0;
//     if (stopY > startY) {
//         for ( var i=startY; i<stopY; i+=step ) {
//             setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
//             leapY += step; if (leapY > stopY) leapY = stopY; timer++;
//         } return;
//     }
//     for ( var i=startY; i>stopY; i-=step ) {
//         setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
//         leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
//     }
//     return false;
// }
/////////////////////////////////////////////////////

/////////////////////////////////////////////////////
//Somewhere online
// function animate(elem,style,unit,from,to,time,prop) {
//     if( !elem) return;
//     var start = new Date().getTime(),
//         timer = setInterval(function() {
//             var step = Math.min(1,(new Date().getTime()-start)/time);
//             if (prop) {
//                 elem[style] = (from+step*(to-from))+unit;
//             } else {
//                 elem.style[style] = (from+step*(to-from))+unit;
//             }
//             if( step == 1) clearInterval(timer);
//         },25);
//     elem.style[style] = from+unit;
// }
//
// window.onload = function () {
//     var target = document.getElementById("div5");
//     animate(document.body, "scrollTop", "", 0, target.offsetTop, 2000, true);
// };
/////////////////////////////////////////////////////


/////////////////////////////////////////////////////
//Internet somewhere
// function scrollTo(element, to, duration) {
//     if (duration < 0) return;
//     var difference = to - element.scrollTop;
//     var perTick = difference / duration * 10;
//
//     setTimeout(function() {
//         element.scrollTop = element.scrollTop + perTick;
//         if (element.scrollTop === to) return;
//         scrollTo(element, to, duration - 10);
//     }, 10);
// }
/////////////////////////////////////////////////////
