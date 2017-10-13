export class Calculator{
  constructor(age){
    this.age = age;
  }

  ageInSeconds(age){
    const earthSeconds = 31557600;
    age = this.age;
    age = age * earthSeconds;
    return age;
  }
}
