import {Calculator} from './../js/spaceCal.js';

describe('Calculator', function() {

  let ageTest;

  beforeEach(function(){
    ageTest = new Calculator(25);
    });

  it("takes a user age and returns the age in seconds", function(){
    expect(ageTest.ageInSeconds()).toEqual(788940000);
  });

  it("takes a users age and returns there new age in years on Mercury", function(){
    expect(ageTest.ageOnMercury()).toEqual(104);
  });

  it("takes a users age and returns there new age in years on Venus", function(){
    expect(ageTest.ageOnVenus()).toEqual(40);
  });

  it("takes a users age and returns there new age in years on Mars", function(){
  });

  it("takes a users age and returns there new age in years on Jupiter", function(){
    expect(ageTest.ageOnJupiter()).toEqual(2);
  });

  // it("will take a birthday and determine age",function(){
  //   let bAge = new Calculator('04 09 1992');
  //   bAge.birthdayCal(bAge.birthday);
  //   expect(bAge.birthday).toEqual(25);
    //****not sure how to pass this test. get null value because im getting the value from the form field that then goes through the function.*****
  // });

  it("determines life expectancy based on location and gender and subtracts age to get difference", function(){
    expect(ageTest.lifeExpect("female", "europe")).toEqual(56);
  });

  it("determines your life expectancy of Mercury", function(){
    ageTest.birthday = 54;
    let lifeExp = ageTest.lifeExpect("male", "north america");
    expect(ageTest.lifeExpectMer(lifeExp)).toEqual(96 + ' years');
  });

  it("determines your life expectancy of Venus", function(){
    ageTest.birthday = 54;
    let lifeExp = ageTest.lifeExpect("male", "north america");
    expect(ageTest.lifeExpectVen(lifeExp)).toEqual(37 + ' years');
  });

  it("determines your life expectancy of Mars", function(){
    ageTest.birthday = 54;
    let lifeExp = ageTest.lifeExpect("male", "north america");
    expect(ageTest.lifeExpectMars(lifeExp)).toEqual(12 + ' years');
  });

  it("determines your life expectancy of Jupiter", function(){
    ageTest.birthday = 54;
    let lifeExp = ageTest.lifeExpect("male", "north america");
    expect(ageTest.lifeExpectJup(lifeExp)).toEqual(2 + ' years');
  });

  it("gives message if you're over the life expectancy for that planet", function(){
    ageTest.birthday = 99;
    let lifeExp = ageTest.lifeExpect("male", "north america");
    expect(ageTest.lifeExpectMer(lifeExp)).toEqual('You\'re too old for Mercury, son.');
  });
});
