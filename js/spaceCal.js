export class Calculator{
  constructor(birthday){
    this.birthday = birthday;
  }

  birthdayCal(){
      let dateControl = document.querySelector('input[type="date"]');
      // debugger;
      this.birthday = dateControl.value;
      let currentSeconds = Math.floor(new Date() / 1000);
      let bdayMS = new Date(this.birthday)/1000;
      let ageInSec = currentSeconds - bdayMS;
      this.birthday = Math.round(ageInSec / 31536000);
      console.log(this.birthday);
      return this.birthday;

    }

  ageInSeconds(){
    const earthSeconds = 31557600;
    let ageSeconds = this.birthday * earthSeconds;
    return ageSeconds;
  }

  ageOnMercury(){
    let merYear = (365 * .24);
    let roundedMerYear = Math.round((this.birthday*365)/merYear);
    return roundedMerYear;

  }

  ageOnVenus(){
    let venYear = (365 * .62);
    let roundedVenYear = Math.round((this.birthday*365)/venYear);
    return roundedVenYear;
  }

  ageOnMars(){
    let marsYear = (365 * 1.88);
    let roundedMarsYear = Math.round((this.birthday*365)/marsYear);
    return roundedMarsYear;
  }

  ageOnJupiter(){
    let jupYear = (365 * 11.86);
    let roundedJupYear = Math.round((this.birthday*365)/jupYear);
    return roundedJupYear;
  }

  lifeExpect(gender, location){
    let death = 0;
    if(gender === "male" && location === "north america"){
      return death = 77-this.birthday;
    } else if(gender === "female" && location === "north america"){

      death = 81 - this.birthday;
      debugger;
      return death;
    } else if(gender === "male" && location === "europe"){
      return death = 75-this.birthday;
    } else if(gender === "female" && location === "europe"){
      return death = 81-this.birthday;
    } else if(gender === "male" && location === "oceania"){
      return death = 75-this.birthday;
    } else if(gender === "female" && location === "oceania"){
      return death = 79-this.birthday;
    } else if(gender === "male" && location === "latin america"){
      return death = 73-this.birthday;
    } else if(gender === "female" && location === "latin america"){
      return death = 79-this.birthday;
    } else if(gender === "male" && location === "asia"){
      return death = 71-this.birthday;
    } else if(gender === "female" && location === "asia"){
      return death = 74-this.birthday;
    } else if(gender === "male" && location === "africa"){
      return death = 61-this.birthday;
    } else if(gender === "female" && location === "africa"){
      return death = 64-this.birthday;
    }
    return death;
  }

  lifeExpectMer(death){
    let lifeExpMer = Math.round(death / .24);
    if (lifeExpMer <= 0) {
      return 'You\'re too old for Mercury, son.'
    } else {
      return lifeExpMer  + " years";
    }
  }

  lifeExpectVen(death){
    let lifeExpVen = Math.round(death / .62);
    if(lifeExpVen <=0){
      return 'You\'re over the life expectancy of Venus...WHOA!'
    } else {
    return lifeExpVen + " years";
    }
  }

  lifeExpectMars(death){
    let lifeExpMars = Math.round(death / 1.88);
    if(lifeExpMars <= 0){
      return'You\'re up there in years! Your over the life expectancy on Mars. Congrats!';
    } else {
    return lifeExpMars + ' years';
    }
  }

  lifeExpectJup(death){
    let lifeExpJup = Math.round(death / 11.86);
    if(lifeExpJup <= 0){
      return 'You\'re over the life expectancy of Jupiter!'
    } else{
      return lifeExpJup + ' years';
    }
  }
}
