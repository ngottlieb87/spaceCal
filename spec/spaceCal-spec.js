import {Calculator} from './../js/spaceCal.js';

describe('Calculator', function() {

  let ageTest;

  beforeEach(function(){
    ageTest = new Calculator(25);
    });

  it("takes a user age and returns the age in seconds", function(){
    expect(ageTest.ageInSeconds()).toEqual(788940000);
    })

  // it("takes a user birthday and return their current age and age in seconds", function(){
  //   expect(ageTest.currentAge(ageTest.birthday)).toEqual("current age", "age in seconds");
  // })

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
  it("determines life expectancy based on location and gender.", function(){
    expect(ageTest.lifeExpect("europe", "female").toEqual(81));
  })

  it("determines how long the user has to live given their life expecatnacy or lets them know if they've lived passed it.", function(){
    expect(ageTest.deathCheck(25, 81).toEqaul("You have 56 Years Left. Enjoy Yourself!"));
  })
});
