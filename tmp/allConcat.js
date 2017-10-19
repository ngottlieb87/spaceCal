import { Calculator } from './../js/spaceCal.js';

$(document).ready(function(){
  $('#planets').submit(function(event){
    event.preventDefault();
    let birthday = parseInt($("#planetAge").val());
    let gender = $("#gender").val();
    let location = $("#location").val();
    let newCalc = new Calculator(birthday);
    let death = newCalc.lifeExpect(gender,location);

    newCalc.birthdayCal();

    $("#mer").text(newCalc.ageOnMercury());
    $("#ven").text(newCalc.ageOnVenus());
    $("#mars").text(newCalc.ageOnMars());
    $("#jup").text(newCalc.ageOnJupiter());
    $("#deathDisplay").text(newCalc.lifeExpectMer(death));
  });
});
