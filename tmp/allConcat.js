import { Calculator } from './../js/spaceCal.js';

$(document).ready(function(){
  $('#planets').submit(function(){
    event.preventDefault();
    let age = parseInt($("#planetAge").val());

    let newCalc = new Calculator(age);

    $("#mer").text(newCalc.ageOnMercury());
    $("#ven").text(newCalc.ageOnVenus());
    $("#mars").text(newCalc.ageOnMars());
    $("#jup").text(newCalc.ageOnJupiter());
  });
});
