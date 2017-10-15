export class Calculator{
  constructor(age){
    this.age = age;
  }

  ageInSeconds(){
    const earthSeconds = 31557600;
    let ageSeconds = this.age * earthSeconds;
    return ageSeconds;
  }

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

  lifeExpect(gender, location){
    let death = 0;
    if(gender === "male" && location === "north america"){
      return death = 77;
    } else if(gender === "female" && location === "north america"){
      return death = 81;
    } else if(gender === "male" && location === "europe"){
      return death = 75;
    } else if(gender === "female" && location === "europe"){
      return death = 81;
    } else if(gender === "male" && location === "oceania"){
      return death = 75;
    } else if(gender === "female" && location === "oceania"){
      return death = 79;
    } else if(gender === "male" && location === "latin america"){
      return death = 73;
    } else if(gender === "female" && location === "latin america"){
      return death = 79;
    } else if(gender === "male" && location === "asia"){
      return death = 71;
    } else if(gender === "female" && location === "asia"){
      return death = 74;
    } else if(gender === "male" && location === "africa"){
      return death = 61;
    } else if(gender === "female" && location === "africa"){
      return death = 64;
    }
    return death;
  };

};
