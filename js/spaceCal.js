export class Calculator{
  constructor(birthday){
    this.birthday = birthday;
  }

  birthdayCal(){
      let dateControl = document.querySelector('input[type="date"]');
      this.birthday = dateControl.value;
      let currentSeconds = Math.floor(new Date() / 1000);
      let bdayMS = new Date(this.birthday)/1000;
      let ageInSec = currentSeconds - bdayMS;
      this.birthday = Math.round(ageInSec / 31536000);
    }

  ageInSeconds(){
    const earthSeconds = 31557600;
    let ageSeconds = this.birthday * earthSeconds;
    return ageSeconds;
  }

  ageOnMercury(){
    let merYear = 365 * .24;
    let roundedMerYear = Math.round((this.birthday*365)/merYear);
    return roundedMerYear;

  }

  ageOnVenus(){
    let venYear = 365 * .62;
    let roundedVenYear = Math.round((this.birthday*365)/venYear);
    return roundedVenYear;
  }

  ageOnMars(){
    let marsYear = 365 * 1.88;
    let roundedMarsYear = Math.round((this.birthday*365)/marsYear);
    return roundedMarsYear;
  }

  ageOnJupiter(){
    let jupYear = 365 * 11.86;
    let roundedJupYear = Math.round((this.birthday*365)/jupYear);
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

  // deathCheck(birthday, death){
  //   let tillDeath = death - birthday;
  //   if(tillDeath > 0){
  //     return tillDeath;
  //   }else if(tillDeath < 0){
  //     let yearsAfter = -tillDeath;
  //     return yearsAfter;
  //   }
  // };

  lifeExpectMer(death){
    let lifeExpMer = Math.round(death / .24);
    return lifeExpMer;
  }

  lifeExpectVen(death){
    let lifeExpVen = Math.round(death / .62);
    return lifeExpVen;
  }

  lifeExpectMars(death){
    let lifeExpMars = Math.round(death / 1.88);
    return lifeExpMars;
  }

  lifeExpectJup(death){
    let lifeExpJup = Math.round(death / 11.86);
    return lifeExpJup;

  }
};
