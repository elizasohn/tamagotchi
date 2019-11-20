export class Tamagotchi {

  constructor(name) {
    this.name = name,
    this.ageLevel = 1;
    this.foodLevel = 10,
    this.poopLevel = 10,
    this.loveLevel = 10,
    this.restLevel = 10,
    this.warningLevel = "happy";
  }

  //death check --
  isDead() {
    if (this.foodLevel <= 0 || this.poopLevel <= 0 || this.loveLevel <= 0 || this.restLevel <= 0){
      return true;
    } else {
      return false;
    }
  }

  //warnings--
  warning() {
    if (this.foodLevel == 8) {
      this.warningLevel = `I'm hungry!`
    } else if (this.poopLevel == 5){
      this.warningLevel = `I'm dirty!`
    } else if (this.loveLevel == 5 ){
      this.warningLevel = `I'm lonely!`
    } else if (this.restLevel == 5){
      this.warningLevel = `I'm sleepy!`
    }
    return this.warningLevel;
  }
  //hunger--
  setHunger() {
    setInterval(() => {
      this.foodLevel--;
      console.log(this.foodLevel)
    }, 10000);
  }

  feed() {
    this.foodLevel = 10;
    this.warningLevel = "happy";

  }

  //bathroom--
  setBathroom() {
    setInterval(() => {
      this.poopLevel--;
    }, 2000);
  }

  clean() {
    this.poopLevel = 10;
    this.warningLevel = "happy";
  }

  //love--
  setLove() {
    setInterval(() => {
      this.loveLevel--;
    }, 4000);
  }


  love() {
    this.loveLevel = 10;
    this.warningLevel = "happy";
  }

  //rest--
  setRest() {
    setInterval(() => {
      this.restLevel--;
    }, 20000);
  }

  tiredToDeath() {
    if (this.restLevel <= 0) {
      alert(`${this.name} is dead! They died of exhaustion!`);
      return true;
    } else if (this.restLevel > 0 && this.restLevel <= 4) {
      alert(`${this.name} is feeling sleepy! Time to put them to bed!`);
      return false;
    } else {
      return false;
    }
  }

  rest() {
    this.restLevel = 10;
    this.warningLevel = "happy";
  }

  setEvolve() {
    setTimeout(() => {
      this.ageLevel ++;
      alert(`${this.name} has grown into a beautiful young child!`);
    }, 800000);
  }

  age() {
    this.ageLevel = 1;
  }

}
