import {Calculator} from './../js/spaceCal.js';

describe('Calculator', function() {

  let ageTest;

  beforeEach(function(){
    ageTest = new Calculator(25, 4/18/1992);
    });

  it("takes a user age and returns the age in seconds", function(){
    expect(ageTest.ageInSeconds(ageTest.age)).toEqual(ageTest.ageSeconds);
    })

  it("takes a users age and returns there new age in years on Mercury", function(){
    expect(ageTest.ageOnMercury(ageTest.age)).toEqual(ageTest.roundedMerYear);
    })

  it("takes a users age and returns there new age in years on Venus", function(){
    expect(ageTest.ageOnVenus(ageTest.age)).toEqual(ageTest.roundedVenYear);
    })

  it("takes a users age and returns there new age in years on Mars", function(){
    expect(ageTest.ageOnMars(ageTest.age)).toEqual(ageTest.roundedMarYear);
    })

  it("takes a users age and returns there new age in years on Jupiter", function(){
    expect(ageTest.ageOnJupiter(ageTest.age)).toEqual(ageTest.roundedJupYear);
    })
});
