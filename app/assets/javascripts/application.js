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

function updateCourseBtn() {
  var btn1 = document.getElementsByName("commit")[0].disabled = true;
  window.setTimeout(btn1, 350)
}

function hideLastRow() {
  document.getElementsByClassName("associations")[0].lastElementChild.style.display = "none";}

function showLastRow() {
  document.getElementsByClassName("associations")[0].lastElementChild.style.display="block";
}

function deleteRow() {
this.parentElement.parentElement.parentElement.style.display = "none";
this.parentElement.lastElementChild.checked = true;
}
