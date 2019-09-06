export function GalacticPerson(age, lifeexpectancy,) {
  this.earthAge = age;
  this.lifeExpectancy = lifeexpectancy;
}

GalacticPerson.prototype.mercuryAge = function() {
  return this.earthAge * .24;
}

GalacticPerson.prototype.venusAge = function() {
  return this.earthAge * .62;
}

GalacticPerson.prototype.marsAge = function() {
  return this.earthAge * 1.88;
}

GalacticPerson.prototype.jupiterAge = function() {
  return this.earthAge * 11.86;
}

GalacticPerson.prototype.timeToLive = function (planetName) {
  if (planetName === "Mercury") {
    return (this.lifeExpectancy - this.earthAge) * .24;

  } else if (planetName === "Venus") {
      return (this.lifeExpectancy - this.earthAge) * .62;

  } else if (planetName === "Mars") {
      return (this.lifeExpectancy - this.earthAge) * 1.88;

  } else if (planetName === "Jupiter") {
      return (this.lifeExpectancy - this.earthAge) * 11.86;

  } else if (planetName === "Earth") {
      return (this.lifeExpectancy - this.earthAge);
  }
};
