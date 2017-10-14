(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Calculator = exports.Calculator = function () {
  function Calculator(age) {
    _classCallCheck(this, Calculator);

    this.age = age;
  }

  _createClass(Calculator, [{
    key: "ageInSeconds",
    value: function ageInSeconds() {
      var earthSeconds = 31557600;
      var ageSeconds = this.age * earthSeconds;
      return ageSeconds;
    }

    //  currentAge(age){
    //
    // }

  }, {
    key: "ageOnMercury",
    value: function ageOnMercury() {
      console.log(this.age);
      var merYear = 365 * .24;
      var roundedMerYear = Math.round(this.age * 365 / merYear);
      alert(roundedMerYear);
      return roundedMerYear;
    }
  }, {
    key: "ageOnVenus",
    value: function ageOnVenus() {
      console.log(this.age);
      var venYear = 365 * .62;
      var roundedVenYear = Math.round(this.age * 365 / venYear);
      alert(roundedVenYear);
      return roundedVenYear;
    }
  }, {
    key: "ageOnMars",
    value: function ageOnMars() {
      console.log(this.age);
      var marsYear = 365 * 1.88;
      var roundedMarsYear = Math.round(this.age * 365 / marsYear);
      alert(roundedMarsYear);
      return roundedMarsYear;
    }
  }, {
    key: "ageOnJupiter",
    value: function ageOnJupiter() {
      console.log(this.age);
      var jupYear = 365 * 11.86;
      var roundedJupYear = Math.round(this.age * 365 / jupYear);
      alert(roundedJupYear);
      return roundedJupYear;
    }
  }]);

  return Calculator;
}();

;

},{}],2:[function(require,module,exports){
'use strict';

var _spaceCal = require('./../js/spaceCal.js');

$(document).ready(function () {
  $('#planets').submit(function () {
    event.preventDefault();
    var age = parseInt($("#planetAge").val());

    var newCalc = new _spaceCal.Calculator(age);

    $("#mer").text(newCalc.ageOnMercury());
    $("#ven").text(newCalc.ageOnVenus());
    $("#mars").text(newCalc.ageOnMars());
    $("#jup").text(newCalc.ageOnJupiter());
  });
});

},{"./../js/spaceCal.js":1}]},{},[2]);
