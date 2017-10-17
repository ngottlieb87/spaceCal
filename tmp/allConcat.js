import { Calculator } from './../js/spaceCal.js';

$(document).ready(function(){
  $('#planets').submit(function(){
    event.preventDefault();
    let age = parseInt($("#planetAge").val());
    let gender = $("#gender").val();
    console.log(gender);
    let location = $("#location").val();
    console.log(location);
    let newCalc = new Calculator(age,birthday);
    let death = newCalc.lifeExpect(gender,location);

    $("#mer").text(newCalc.ageOnMercury());
    $("#ven").text(newCalc.ageOnVenus());
    $("#mars").text(newCalc.ageOnMars());
    $("#jup").text(newCalc.ageOnJupiter());
    $("#deathDisplay").text(newCalc.deathCheck(age,death));
  });
});
