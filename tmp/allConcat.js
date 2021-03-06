import { Calculator } from './../js/spaceCal.js';

$(document).ready(function(){
  $('#planets').submit(function(event){
    event.preventDefault();
    let birthday = parseInt($("#planetAge").val());
    let gender = $("#gender").val();
    let location = $("#location").val();
    let newCalc = new Calculator(birthday);

    newCalc.birthdayCal();

    let death = newCalc.lifeExpect(gender,location);

    $("#display").fadeIn(2000);
    $("#sub").fadeOut(1000);
    $("#all").slideUp(2000);
    
    $("#mer").text(newCalc.ageOnMercury());
    $("#ven").text(newCalc.ageOnVenus());
    $("#mars").text(newCalc.ageOnMars());
    $("#jup").text(newCalc.ageOnJupiter());

    $("#lifeExpMer").text(newCalc.lifeExpectMer(death));
    $("#lifeExpVen").text(newCalc.lifeExpectVen(death));
    $("#lifeExpMars").text(newCalc.lifeExpectMars(death));
    $("#lifeExpJup").text(newCalc.lifeExpectJup(death));
  });
});
