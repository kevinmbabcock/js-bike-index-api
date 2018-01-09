(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

$(document).ready(function () {

  $("#frame-color").submit(function (event) {
    event.preventDefault();

    var color = $("#color").val();

    var request = new XMLHttpRequest();
    var url = "https://bikeindex.org:443/api/v3/search?per_page=25&location=IP&distance=10&stolenness=stolen&frame_colors=" + color;

    request.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        var response = JSON.parse(this.responseText);
        getElements(response);
      }
    };

    request.open("GET", url, true);
    request.send();

    var getElements = function getElements(response) {
      console.log(response);
      response.bikes.forEach(function (bike) {
        $("#result").prepend("<li>" + bike.date_stolen + "</li>");
      });
    };
  });
});

},{}]},{},[1]);
