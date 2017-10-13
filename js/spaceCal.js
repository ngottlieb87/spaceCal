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

   compareDates(age,birthday){
    let moment = moment();
     console.log(moment);
  }

  ageOnMercury(age){
    age = this.age;
    let merYear = 365 * .24;
    let userAgeOnMer = Math.round((age*365)/merYear);
    let roundedMerYear = userAgeOnMer;
    return this.roundedMerYear;
  }

  ageOnVenus(age){
    age = this.age;
    let venYear = 365 * .62;
    let userAgeOnVen = Math.round((age*365)/venYear);
    let roundedVenYear = userAgeOnVen;
    return this.roundedVenYear;
  }

  ageOnMars(age){
    age = this.age;
    let marsYear = 365 * 1.88;
    let userAgeOnMars = Math.round((age*365)/marsYear);
    let roundedMarsYear = userAgeOnMars;
    return this.roundedMarsYear;
  }

  ageOnJupiter(age){
    age = this.age;
    let jupYear = 365 * 11.86;
    let userAgeOnJup = Math.round((age*365)/jupYear);
    let roundedJupYear = userAgeOnJup;
    return this.roundedJupYear;
  }
};
