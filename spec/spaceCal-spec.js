import {Calculator} from './../js/spaceCal.js';

describe('Calculator', function() {

  let ageTest;

  beforeEach(function(){
    ageTest = new Calculator(1992-11-09);
    });

  it("takes a user age and returns the age in seconds", function(){
    expect(ageTest.ageInSeconds()).toEqual(788940000);
    })

  it("takes a users age and returns there new age in years on Mercury", function(){
    expect(ageTest.ageOnMercury()).toEqual(104);
    })

  it("takes a users age and returns there new age in years on Venus", function(){
    expect(ageTest.ageOnVenus()).toEqual(40);
    })

  it("takes a users age and returns there new age in years on Mars", function(){
    expect(ageTest.ageOnMars()).toEqual(13);
    })

  it("takes a users age and returns there new age in years on Jupiter", function(){
    expect(ageTest.ageOnJupiter()).toEqual(2);
  })

  it("will take a birthday and determine age",function(){
    expect(ageTest.birthdayCal(this.birthday)).toEqual(25);
  })

  it("determines life expectancy based on location and gender.", function(){
    expect(ageTest.lifeExpect("female", "europe")).toEqual(81);
  })

  it("determines how long the user has to live given their life expectancy", function(){
    expect(ageTest.deathCheck(ageTest.age, 81)).toEqual(56);
  })

  it("determines their age over life expectancy", function(){
    let borrowTime = new Calculator(90,"1992-04-09 00:00:00");
    expect(borrowTime.deathCheck(borrowTime.age, 81)).toEqual(9);
  })
});
