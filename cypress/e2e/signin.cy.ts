describe('Basic Test', () => {
  it('signs in successfully', () => {
    cy.visit('/')
    cy.get('[data-cy="login-input"]').type('Noodle')
    cy.get('[data-cy="login-button"]').click()

    cy.get('[data-cy="user-list"]').should('be.visible')
    cy.get('[data-cy="chat-window"]').should('be.visible')
  })
})
