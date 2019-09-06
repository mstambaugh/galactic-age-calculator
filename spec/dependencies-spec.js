import { GalacticPerson } from './../src/galactic-age-calculator.js';
describe('GalacticPerson', function() {
  let recycledperson;

  beforeEach(function() {
    recycledperson = new GalacticPerson(16);
  });

  it('should show how beforeEach() works', function() {
    console.log(recycledperson);
  });
});
