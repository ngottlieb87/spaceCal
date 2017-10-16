import { Calculator } from './../js/spaceCal.js';

$(document).ready(function(){
  $('#planets').submit(function(){
    event.preventDefault();
    let age = parseInt($("#planetAge").val());
    let gender = $("#gender").val();
    let location = $("#location").val();
    let death = newCalc.lifeExpect(gender,location);
    let newCalc = new Calculator(age);

    $("#mer").text(newCalc.ageOnMercury());
    $("#ven").text(newCalc.ageOnVenus());
    $("#mars").text(newCalc.ageOnMars());
    $("#jup").text(newCalc.ageOnJupiter());

    $("#deathDisplay").text(newCalc.deathCheck(age,location));
  });
});
