export class Calculator{
  constructor(age, birthday){
    this.age = age;
    this.birthday = birthday;
  }

  ageInSeconds(age){
    const earthSeconds = 31557600;
    age = this.age;
    age = age * earthSeconds;
    return age;
  }

  compareDates(age,birthday){
    //not sure what is asked of me
  }

  // ageOnMercury(age){
  //   merYear = 365 * .24;
  // }
};
