export class Tamagotchi {

  constructor(name) {
    this.name = name,
    this.ageLevel = 1;
    this.foodLevel = 10,
    this.poopLevel = 0,
    this.loveLevel = 10;
    this.restLevel = 10;
  }

  //hunger--
  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 10000);
  }

  starvedToDeath() {
    if (this.foodLevel <= 0) {
      alert(`${this.name} is dead! You are the worst parent ever!`);
      return true;
    } else if (this.foodLevel > 0 && this.foodLevel <= 4) {
      alert(`${this.name} is getting hungry! Time to feed them.`);
      return false;
    } else {
      return false;
    }
  }

  feed() {
    this.foodLevel = 10;
  }

  //bathroom--
  setBathroom() {
    setInterval(() => {
      this.poopLevel++;
    }, 2000);
  }

  poopedToDeath() {
    if (this.poopLevel >= 4) {
      alert(`${this.name} is dead! Check your parenting skills!`);
      return true;
    } else if (this.poopLevel > 0 && this.poopLevel <= 2) {
      alert(`${this.name} is getting dirty! Time to clean up!`);
      return false;
    } else {
      return false;
    }
  }
  clean() {
    this.poopLevel = 0;
  }

  //love--
  setLove() {
    setInterval(() => {
      this.loveLevel--;
    }, 4000);
  }

  unlovedToDeath() {
    if (this.loveLevel <= 0) {
      alert(`${this.name} is dead! We're calling CPS!`);
      return true
    } else if (this.loveLevel > 0 && this.loveLevel <= 10) {
      alert(`${this.name} is feeling neglected! Time to show some love!`);
      return false;
    } else {
      return false;
    }
  }

  love() {
    this.loveLevel = 10;
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
      return true
    } else if (this.restLevel > 0 && this.restLevel <= 4) {
      alert(`${this.name} is feeling sleepy! Time to put them to bed!`);
      return false;
    } else {
      return false;
    }
  }

  rest() {
    this.restLevel = 10;
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
