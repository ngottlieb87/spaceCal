export class Calculator{
  constructor(age, birthday){
    this.age = age;
    this.birthday = birthday;
  }

  ageInSeconds(age){
    const earthSeconds = 31557600;
    let ageSeconds = age * earthSeconds;
    return this.ageSeconds;
  }

  // compareDates(age,birthday){
  //   //not sure what is asked of me
  // }

  ageOnMercury(age){
    age = this.age;
    let merYear = 365 * .24;
    let userAgeOnMer = (age*365)/merYear;
    let roundedMerYear=userAgeOnMer.toFixed(2);
    return this.roundedMerYear;
  }

  ageOnVenus(age){
    age = this.age;
    let venYear = 365 * .62;
    let userAgeOnVen = (age*365)/venYear;
    let roundedVenYear=userAgeOnVen.toFixed(2);
    alert(roundedVenYear);
    return this.roundedVenYear;
  }

  ageOnMars(age){
    age = this.age;
    let marsYear = 365 * 1.88;
    let userAgeOnMars = (age*365)/marsYear;
    let roundedMarsYear=userAgeOnMars.toFixed(2);
    return this.roundedMarsYear;
  }
  //
  // ageOnMercury(age){
  //   age = this.age;
  //   let merYear = 365 * .24;
  //   let userAgeOnMer = (age*365)/merYear;
  //   let roundedMerYear=userAgeOnMer.toFixed(2);
  //   return this.roundedMerYear;
  // }
};
