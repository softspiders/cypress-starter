describe('Sample Tests', () => {
  it('loads the homepage', () => {
    cy.visit('/')
    cy.get('h1').contains('Welcome to the-internet') // Implicit assertion
  })
})
