export class GalacticPerson {
  constructor(age, lifeexpectancy) {
    this.earthAge = age;
    this.lifeExpectancy = lifeexpectancy;
  }
  mercuryAge() {
    return Math.floor(this.earthAge / .24);
  }

  venusAge() {
    return Math.floor(this.earthAge / .62);
  }

  marsAge() {
    return Math.floor(this.earthAge / 1.88);
  }

  jupiterAge() {
    return Math.floor(this.earthAge / 11.86);
  }

  timeToLive(planetName) {
    if (planetName === "Mercury") {
      return Math.floor((this.lifeExpectancy - this.earthAge) / .24);

    } else if (planetName === "Venus") {
      return Math.floor((this.lifeExpectancy - this.earthAge) / .62);

    } else if (planetName === "Mars") {
      return Math.floor((this.lifeExpectancy - this.earthAge) / 1.88);

    } else if (planetName === "Jupiter") {
      return Math.floor((this.lifeExpectancy - this.earthAge) / 11.86);

    } else if (planetName === "Earth") {
      return Math.floor((this.lifeExpectancy - this.earthAge));
    }
  }
}
