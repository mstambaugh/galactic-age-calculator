import { GalacticPerson } from './../src/galactic-age-calculator.js';
describe('GalacticPerson', function() {
  let recycledperson;

  beforeEach(function() {
    recycledperson = new GalacticPerson(16, 79);
  });

  it('should show how beforeEach() works', function() {
    console.log(recycledperson);
  });

  it('should check if person has age and life expectancy', function() {
    expect(recycledperson.earthAge).toEqual(16);
    expect(recycledperson.lifeExpectancy).toEqual(79);
    expect(recycledperson.earthAge).not.toEqual(17);
  });

  it('should calculate Mercury age', function() {
    expect(recycledperson.mercuryAge()).toEqual(3.84);
  });

  it('should calculate Venus age', function() {
    expect(recycledperson.venusAge()).toEqual(9.92);
  });

  it('should calculate Mars age', function() {
    expect(recycledperson.marsAge()).toEqual(30.08);
  });

  it('should calculate Jupiter age', function() {
    expect(recycledperson.jupiterAge()).toEqual(189.76);
  });

  it('should calculate Earth time left to live', function() {
    expect(recycledperson.timeToLive("Earth")).toEqual(63);
  });

  it('should calculate Mercury time left to live', function() {
    expect(recycledperson.timeToLive("Mercury")).toEqual(15.12);
  });

  it('should calculate Venus time left to live', function() {
    expect(recycledperson.timeToLive("Venus")).toEqual(39.06);
  });

  it('should calculate Mars time left to live', function() {
    expect(recycledperson.timeToLive("Mars")).toEqual(118.44);
  });

  it('should calculate Jupiter time left to live', function() {
    expect(recycledperson.timeToLive("Jupiter")).toEqual(747.18);
  });

});
