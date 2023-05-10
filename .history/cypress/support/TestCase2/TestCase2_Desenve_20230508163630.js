const LoginScreen = require('../Elementos/Elements').ELEMENTOS

class TestCase2 {


    validateInput1Fail() {

        /*Validate Inputs 1*/

        /*USERNAME FIELD */
        cy.get(LoginScreen.UserField)
            .should('be.visible').type('Demouser')

        /*PASSWORD FIELD */
        cy.get(LoginScreen.PasswordField)
            .should('be.visible').type('abc123')

        /*LOGIN BUTTON*/

        cy.get(LoginScreen.LoginBtn)
            .should('be.visible').as('Botão Visível').click({ force: true })

        /*VALIDA FALHA NA AUTENTICAÇÃO */

        cy.get('div[class="alert alert-danger mt-3"]')
            .should('contain', 'Wrong username or password.')

    }

    validaDados2Fail() {


        /*DADOS 2 */

        /*CAMPO USERNAME */
        cy.get(LoginScreen.UserField)
            .should('be.visible').type('demouser_')

        /*CAMPO PASSWORD */
        cy.get(LoginScreen.PasswordField)
            .should('be.visible').type('xyz')

        /*BOTÃO LOGIN */

        cy.get(LoginScreen.LoginBtn)
            .should('be.visible').as('Botão Visível').click({ force: true })

        /*VALIDA FALHA NA AUTENTICAÇÃO */

        cy.get('div[class="alert alert-danger mt-3"]')
            .should('contain', 'Wrong username or password.')

    }

    validaDados3Fail() {


        /*DADOS 3 */

        /*CAMPO USERNAME */
        cy.get(LoginScreen.UserField)
            .should('be.visible').type('demouser')

        /*CAMPO PASSWORD */
        cy.get(LoginScreen.PasswordField)
            .should('be.visible').type('nananana')

        /*BOTÃO LOGIN */

        cy.get(LoginScreen.LoginBtn)
            .should('be.visible').as('Botão Visível').click({ force: true })

        /*VALIDA FALHA NA AUTENTICAÇÃO */

        cy.get('div[class="alert alert-danger mt-3"]')
            .should('contain', 'Wrong username or password.')

    }

    validaDados4Sucess(){

             
                /*DADOS 4 */

            /*CAMPO USERNAME */
            cy.get(LoginScreen.UserField)
                .should('be.visible').type('demouser')

            /*CAMPO PASSWORD */
            cy.get(LoginScreen.PasswordField)
                .should('be.visible').type('abc123')

            /*BOTÃO LOGIN */

            cy.get(LoginScreen.LoginBtn)
                .should('be.visible').as('Botão Visível').click({ force: true })

            /*VALIDA AUTENTICAÇÃO COM SUCESSO */

             cy.get('div[class="col"]').find('h2[class="mt-5"]')
             .should('have.text', 'Invoice List').as('Login Autenticado com Sucesso!')     
     
    }


}

export default new TestCase2();