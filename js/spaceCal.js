export class Calculator{
  constructor(age){
    this.age = age;
  }

  ageInSeconds(){
    const earthSeconds = 31557600;
    let ageSeconds = this.age * earthSeconds;
    return ageSeconds;
  }

  //  currentAge(age){
  //
  // }

  ageOnMercury(){
    console.log(this.age);
    let merYear = 365 * .24;
    let roundedMerYear = Math.round((this.age*365)/merYear);
    alert(roundedMerYear);
    return roundedMerYear;

  }

  ageOnVenus(){
    console.log(this.age);
    let venYear = 365 * .62;
    let roundedVenYear = Math.round((this.age*365)/venYear);
    alert(roundedVenYear);
    return roundedVenYear;
  }

  ageOnMars(){
    console.log(this.age);
    let marsYear = 365 * 1.88;
    let roundedMarsYear = Math.round((this.age*365)/marsYear);
    alert(roundedMarsYear);
    return roundedMarsYear;
  }

  ageOnJupiter(){
    console.log(this.age);
    let jupYear = 365 * 11.86;
    let roundedJupYear = Math.round((this.age*365)/jupYear);
    alert(roundedJupYear);
    return roundedJupYear;
  }
};
