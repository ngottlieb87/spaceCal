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
    value: function ageInSeconds(age) {
      var earthSeconds = 31557600;
      var ageSeconds = age * earthSeconds;
      this.age = ageSeconds;
      alert(this.age);
      return this.age;
    }

    //  currentAge(age, birthday){
    //
    // }

  }, {
    key: "ageOnMercury",
    value: function ageOnMercury(age) {
      alert(this.age);
      age = this.age;
      var merYear = 365 * .24;
      var userAgeOnMer = Math.round(age * 365 / merYear);
      var roundedMerYear = userAgeOnMer;
      this.age = roundedMerYear;
      alert(this.age);
      return this.age;
    }
  }, {
    key: "ageOnVenus",
    value: function ageOnVenus(age) {
      alert(this.age);
      age = this.age;
      var venYear = 365 * .62;
      var userAgeOnVen = Math.round(age * 365 / venYear);
      var roundedVenYear = userAgeOnVen;
      this.age = roundedVenYear;
      alert(this.age);
      return this.age;
    }
  }, {
    key: "ageOnMars",
    value: function ageOnMars(age) {
      alert(this.age);
      age = this.age;
      var marsYear = 365 * 1.88;
      var userAgeOnMars = Math.round(age * 365 / marsYear);
      var roundedMarsYear = userAgeOnMars;
      this.age = roundedMarsYear;
      alert(this.age);
      return this.age;
    }
  }, {
    key: "ageOnJupiter",
    value: function ageOnJupiter(age) {
      alert(this.age);
      age = this.age;
      var jupYear = 365 * 11.86;
      var userAgeOnJup = Math.round(age * 365 / jupYear);
      var roundedJupYear = userAgeOnJup;
      this.age = roundedJupYear;
      alert(this.age);
      return this.age;
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
    var age = $("#planetAge").val();

    var newCalc = new _spaceCal.Calculator(age);

    var mercury = newCalc.ageOnMercury();
    var venus = newCalc.ageOnVenus();
    var mars = newCalc.ageOnMars();
    var jupiter = newCalc.ageOnJupiter();
    $("#mer").text(mercury);
    $("#ven").text(venus);
    $("#mars").text(mars);
    $("#jup").text(jupiter);
  });
});

},{"./../js/spaceCal.js":1}]},{},[2]);
