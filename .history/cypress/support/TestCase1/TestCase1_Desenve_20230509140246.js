const LoginScreen = require('../Element/Elements').ELEMENTS

class TestCase1 {

    LinkAccess() {

        cy.visit('/')
            .should('exist')

        cy.get(LoginScreen.LoginTitle)
            .should('have.text', 'Login', { timeout: 15000 })
    }


    informLogin() {

        /*USERNAME FIELD*/
        cy.get(LoginScreen.UserField)
            .should('be.visible').as('Campo UserName Visível').type('demouser')

        /*PASSWORD FIELD*/
        cy.get(LoginScreen.PasswordField)
            .should('be.visible').type('abc123')
    }

    clickLoginBtn(){
          /*LOGIN BUTTON */

          cy.get('button[id="LoginBtn"]')
          .should('be.visible').as('Botão Visível').click({ force: true })
    }

    checkAuthenticationLogin(){

             /*CHECK IF THE TITLE INVOICE LIST IS IN THE HOME SCREEN*/

             cy.get('div[class="col"]').find('h2[class="mt-5"]')
             .should('have.text', 'Invoice List').as('Login Autenticado com Sucesso!')
    }

    logout(){
        
            /*PERFORM THE LOGOUT */

            cy.get('ul[class="nav justify-content-end"]').find('a[class="btn btn-outline-info my-2 my-sm-0"]')
                .should('be.visible').click({ force: true })

            /*CHECK USERNAME FIELD */

            cy.get(LoginScreen.UserField)
                .should('be.visible').as('Campo UserName Visível')

    }


}

export default new TestCase1();