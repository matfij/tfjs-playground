describe('Test number prediction page', () => {

  beforeEach(() => {
    cy.visit('/');
    cy.wait(1000);
  });

  it('Should render canvas component', () => {
    cy.get('canvas').should('be.visible');
  });
});
