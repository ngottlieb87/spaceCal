import {Calculator} from './../js/spaceCal.js';

describe('Calculator', function() {

let ageTest;

beforeEach(function(){
  ageTest = new Calculator(25, 4/18/1992);
});

it("takes a user age and returns the age in seconds", function(){
  expect(ageTest.ageInSeconds(ageTest.age)).toEqual(788940000);
  })

it("takes a users age and returns there new age in years on Mercury", function(){
  let userAge = ageTest.ageInSeconds(ageTest.age);
  expect(ageTest.ageOnMercury(userAge)).toEqual("age on mercury")
  })
});
