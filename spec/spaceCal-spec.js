import {Calculator} from './../js/spaceCal.js';

describe('Calculator', function() {

it("takes a user age and returns the age in seconds", function(){
  let ageTest = new Calculator(25);
  expect(ageTest.seconds()).toEqaul(ageInSeconds);
  })
});
