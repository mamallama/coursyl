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
function updateCourse() {
  var el = document.getElementsByClassName("btn")[6];
  el.disabled = true;
}
// function hideLast() {
//   var invisLast = document.getElementsByClassName("row").hideLast;
//   invisLast. = true
// }
function showHideRow() {
  var invisLast = document.getElementsByClassName("row")
  invisLast[invisLast.length-1].style.display = 'none';
}

function showLastRow() {
  var invisLast = document.getElementsByClassName("row")
  invisLast[invisLast.length-1].style.display = 'block';
}

function showDeleteRow() {
  var killRow = document.getElementsByClassName("row")
  killRow.style.display = 'none';
}

function hideDeleteRow() {
  var elhide = document.getElementsByClassName("row");
  elhide.style.display = 'none';
  document.getElementsByClassName("destroy").checked = true
}
