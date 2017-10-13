export class Calculator{
  constructor(age){
    this.age = age;
  }

  ageInSeconds(age){
    const earthSeconds = 31557600;
    let ageSeconds = age * earthSeconds;
    this.age = ageSeconds;
    alert(this.age);
    return this.age;
  }

  //  currentAge(age, birthday){
  //
  // }

  ageOnMercury(age){
    alert(this.age)
    age = this.age;
    let merYear = 365 * .24;
    let userAgeOnMer = Math.round((age*365)/merYear);
    let roundedMerYear = userAgeOnMer;
    this.age = roundedMerYear;
    alert(this.age)
    return this.age;
  }

  ageOnVenus(age){
    alert(this.age);
    age = this.age;
    let venYear = 365 * .62;
    let userAgeOnVen = Math.round((age*365)/venYear);
    let roundedVenYear = userAgeOnVen;
    this.age = roundedVenYear;
    alert(this.age)
    return this.age;
  }

  ageOnMars(age){
    alert(this.age);
    age = this.age;
    let marsYear = 365 * 1.88;
    let userAgeOnMars = Math.round((age*365)/marsYear);
    let roundedMarsYear = userAgeOnMars;
    this.age = roundedMarsYear;
    alert(this.age)
    return this.age;
  }

  ageOnJupiter(age){
    alert(this.age)
    age = this.age;
    let jupYear = 365 * 11.86;
    let userAgeOnJup = Math.round((age*365)/jupYear);
    let roundedJupYear = userAgeOnJup;
    this.age = roundedJupYear;
    alert(this.age)
    return this.age;
  }
};
