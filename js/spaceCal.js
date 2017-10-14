export class Calculator{
  constructor(age){
    this.age = age;
  }

  ageInSeconds(){
    const earthSeconds = 31557600;
    let ageSeconds = this.age * earthSeconds;
    this.age = ageSeconds;
    return this.age;
  }

   currentAge(age){

  }

  ageOnMercury(){
    let merYear = 365 * .24;
    let userAgeOnMer = Math.round((this.age*365)/merYear);
    let roundedMerYear = userAgeOnMer;
    this.age = roundedMerYear;
    return this.age;
  }

  ageOnVenus(){
    alert(this.age)
    let venYear = 365 * .62;
    let userAgeOnVen = Math.round((this.age*365)/venYear);
    let roundedVenYear = userAgeOnVen;
    this.age = roundedVenYear;
    return this.age;
  }

  ageOnMars(){
    let marsYear = 365 * 1.88;
    let userAgeOnMars = Math.round((this.age*365)/marsYear);
    let roundedMarsYear = userAgeOnMars;
    this.age = roundedMarsYear;
    return this.age;
  }

  ageOnJupiter(){
    let jupYear = 365 * 11.86;
    let userAgeOnJup = Math.round((this.age*365)/jupYear);
    let roundedJupYear = userAgeOnJup;
    this.age = roundedJupYear;
    return this.age;
  }
};
