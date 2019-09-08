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
    expect(recycledperson.mercuryAge()).toEqual(66.66666666666667);
  });

  it('should calculate Venus age', function() {
    expect(recycledperson.venusAge()).toEqual(25.806451612903228);
  });

  it('should calculate Mars age', function() {
    expect(recycledperson.marsAge()).toEqual(8.51063829787234);
  });

  it('should calculate Jupiter age', function() {
    expect(recycledperson.jupiterAge()).toEqual(1.349072512647555);
  });

  it('should calculate Earth time left to live', function() {
    expect(recycledperson.timeToLive("Earth")).toEqual(63);
  });

  it('should calculate Mercury time left to live', function() {
    expect(recycledperson.timeToLive("Mercury")).toEqual(262.5);
  });

  it('should calculate Venus time left to live', function() {
    expect(recycledperson.timeToLive("Venus")).toEqual(101.61290322580645);
  });

  it('should calculate Mars time left to live', function() {
    expect(recycledperson.timeToLive("Mars")).toEqual(33.51063829787234);
  });

  it('should calculate Jupiter time left to live', function() {
    expect(recycledperson.timeToLive("Jupiter")).toEqual(5.311973018549748);
  });
});
