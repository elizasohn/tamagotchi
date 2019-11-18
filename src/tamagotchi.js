export class Tamagotchi {

  constructor(name) {
    this.name = name,
    this.foodLevel = 10,
    this.poopLevel = 0,
    this.loveLevel = 10;
  }

//hunger--
  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 1000);
  }

  starvedToDeath() {
    if (this.foodLevel > 0) {
      return false;
    } else {
      return true;
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
    if (this.poopLevel < 5) {
      return false;
    } else {
      return true;
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
  if (this.loveLevel > 0) {
    return false;
  } else {
    return true;
  }
}

love() {
  this.loveLevel = 10;
}
}
