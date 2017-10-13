import { Calculator } from './../js/spaceCal.js';

$(document).ready(function(){
  $('#planets').submit(function(){
    event.preventDefault();
    let age = $("#planetAge").val();

    let newCalc = new Calculator(age);

    let mercury = newCalc.ageOnMercury();
    let venus = newCalc.ageOnVenus();
    let mars = newCalc.ageOnMars();
    let jupiter = newCalc.ageOnJupiter();
    $("#mer").text(mercury);
    $("#ven").text(venus);
    $("#mars").text(mars);
    $("#jup").text(jupiter);
  })
})
