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
  });

  });

});
