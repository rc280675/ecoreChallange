Cypress.Commands.add('login', () => {
    /*CAMPO USERNAME */
    cy.get('input[type="text"]')
        .should('be.visible').as('Campo UserName Visível').type('demouser')

    /*CAMPO PASSWORD */
    cy.get('input[type="password"]')
        .should('be.visible').as('Campo Password Visível').type('abc123')

    /*BOTÃO LOGIN */
    cy.get('button[id="LoginBtn"]')
        .should('be.visible').as('Botão Visível').click({ force: true })
})