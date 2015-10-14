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
//= require jquery.datetimepicker
//= require jquery.datetimepicker/init

//= require_tree .
// function updateCourse(){
// $(".btn").last().attr("disabled", true);
// }

$('.datetimepicker').datetimepicker();
// SUBMIT BUTTON DISABLES ON CLICK
function updateCourse(){
  $(event.target).last().attr("disabled", true)
  $(event.target).closest("form").submit();
}

$(function () {
  $("input[type=input]").last().on("click", updateCourse);
})

// LAST ROW HIDES
function hideLastRow() {
  last = $(".association.container").last()
  if(last) {
    last.hide();
  }
}

$(hideLastRow);

// SHOWS LAST ROW ON ADD GRADE CLICK
function showLastRow() {
  $(".association.container").last().show();
}

$(function (){
  $(".new-association").on("click", showLastRow);
});

// DELETE ROW

function hideDeleteRow() {
    $(event.target).closest(".association.container").hide();
    $(event.target).siblings().last().prop("checked", true);
}

function clickDelete () {
  $(".btn-danger").on("click", hideDeleteRow);
}
$(clickDelete);

// MODAL
function topModal() {
  $('#super_modal').modal('show')
}

$(function(){
  $(".fa.fa-calendar").on("click", topModal)
})


//****************************
//working Javascript smooth scroll
(function (root, smoothScroll) {
  'use strict';

  // Support RequireJS and CommonJS/NodeJS module formats.
  // Attach smoothScroll to the `window` when executed as a <script>.

  // RequireJS
  if (typeof define === 'function' && define.amd) {
    define(smoothScroll);

  // CommonJS
  } else if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = smoothScroll();

  } else {
    root.smoothScroll = smoothScroll();
  }

})(this, function(){
'use strict';

// Do not initialize smoothScroll when running server side, handle it in client:
if (typeof window !== 'object') return;

// We do not want this script to be applied in browsers that do not support those
// That means no smoothscroll on IE9 and below.
if(document.querySelectorAll === void 0 || window.pageYOffset === void 0 || history.pushState === void 0) { return; }

// Get the top position of an element in the document
var getTop = function(element) {
    // return value of html.getBoundingClientRect().top ... IE : 0, other browsers : -pageYOffset
    if(element.nodeName === 'HTML') return -window.pageYOffset
    return element.getBoundingClientRect().top + window.pageYOffset;
}
// ease in out function thanks to:
// http://blog.greweb.fr/2012/02/bezier-curve-based-easing-functions-from-concept-to-implementation/
var easeInOutCubic = function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 }

// calculate the scroll position we should be in
// given the start and end point of the scroll
// the time elapsed from the beginning of the scroll
// and the total duration of the scroll (default 500ms)
var position = function(start, end, elapsed, duration) {
    if (elapsed > duration) return end;
    return start + (end - start) * easeInOutCubic(elapsed / duration); // <-- you can change the easing funtion there
    // return start + (end - start) * (elapsed / duration); // <-- this would give a linear scroll
}

// we use requestAnimationFrame to be called by the browser before every repaint
// if the first argument is an element then scroll to the top of this element
// if the first argument is numeric then scroll to this location
// if the callback exist, it is called when the scrolling is finished
// if context is set then scroll that element, else scroll window
var smoothScroll = function(el, duration, callback, context){
    duration = duration || 500;
    context = context || window;
    var start = window.pageYOffset;

    if (typeof el === 'number') {
      var end = parseInt(el);
    } else {
      var end = getTop(el);
    }

    var clock = Date.now();
    var requestAnimationFrame = window.requestAnimationFrame ||
        window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame ||
        function(fn){window.setTimeout(fn, 15);};

    var step = function(){
        var elapsed = Date.now() - clock;
        if (context !== window) {
        	context.scrollTop = position(start, end, elapsed, duration);
        }
        else {
        	window.scroll(0, position(start, end, elapsed, duration));
        }

        if (elapsed > duration) {
            if (typeof callback === 'function') {
                callback(el);
            }
        } else {
            requestAnimationFrame(step);
        }
    }
    step();
}

var linkHandler = function(ev) {
    ev.preventDefault();

    if (location.hash !== this.hash) window.history.pushState(null, null, this.hash)
    // using the history api to solve issue #1 - back doesn't work
    // most browser don't update :target when the history api is used:
    // THIS IS A BUG FROM THE BROWSERS.
    // change the scrolling duration in this call
    smoothScroll(document.getElementById(this.hash.substring(1)), 500, function(el) {
        location.replace('#' + el.id)
        // this will cause the :target to be activated.
    });
}

// We look for all the internal links in the documents and attach the smoothscroll function
document.addEventListener("DOMContentLoaded", function () {
    var internal = document.querySelectorAll('a[href^="#"]:not([href="#"])'), a;
    for(var i=internal.length; a=internal[--i];){
        a.addEventListener("click", linkHandler, false);
    }
});

// return smoothscroll API
return smoothScroll;

});

//****************************

function datePicker() {
  var nowTemp = new Date();
  var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);

  var checkin = $('#dpd1').datepicker({
    onRender: function(date) {
      return date.valueOf() < now.valueOf() ? 'disabled' : '';
    }
  }).on('changeDate', function(ev) {
    if (ev.date.valueOf() > checkout.date.valueOf()) {
      var newDate = new Date(ev.date)
      newDate.setDate(newDate.getDate() + 1);
      checkout.setValue(newDate);
    }
    checkin.hide();
    $('#dpd2')[0].focus();
  }).data('datepicker');
  var checkout = $('#dpd2').datepicker({
    onRender: function(date) {
      return date.valueOf() <= checkin.date.valueOf() ? 'disabled' : '';
    }
  }).on('changeDate', function(ev) {
    checkout.hide();
  }).data('datepicker');
}
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
