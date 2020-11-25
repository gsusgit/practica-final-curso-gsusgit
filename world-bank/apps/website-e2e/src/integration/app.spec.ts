import { cargaRegiones } from '../support/app.po';

describe('GIVEN: the website', () => {
  beforeEach(() => cy.visit('/'));
  context('WHEN: user visits home page', () => {
  it('THEN: should display the regions', () => {
    cargaRegiones();
  });
  });
 });
