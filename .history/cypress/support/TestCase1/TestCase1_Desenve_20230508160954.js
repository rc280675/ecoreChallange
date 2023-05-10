const LoginScreen = require('../Elementos/Elements').ELEMENTOS

class TestCase1 {

    linkAccess() {

        cy.visit('/')
            .should('exist')

        cy.get(LoginScreen.LoginTitle)
            .should('have.text', 'Login', { timeout: 15000 })
    }


    informLogin() {

        /*CAMPO USERNAME */
        cy.get(LoginScreen.UserField)
            .should('be.visible').as('Campo UserName Visível').type('demouser')

        /*CAMPO PASSWORD */
        cy.get(LoginScreen.PasswordField)
            .should('be.visible').as('Campo Password Visível').type('abc123')
    }

    clickLoginBtn(){

          /*BOTÃO LOGIN */

          cy.get('button[id="LoginBtn"]')
          .should('be.visible').as('Botão Visível').click({ force: true })
    }

    checkAuthenticationLogin(){

             /*VERIFICAR SE EXISTE NA TELA INCIAL O TÍTULO INVOICE LIST*/

             cy.get('div[class="col"]').find('h2[class="mt-5"]')
             .should('have.text', 'Invoice List').as('Login Autenticado com Sucesso!')
    }

    logout(){
        
            /*REALIZAR O LOGOUT */

            cy.get('ul[class="nav justify-content-end"]').find('a[class="btn btn-outline-info my-2 my-sm-0"]')
                .should('be.visible').click({ force: true })

            /*VERIFICA O CAMPO USERNAME */

            cy.get(LoginScreen.UserField)
                .should('be.visible').as('Campo UserName Visível')

    }


}

export default new TestCase1();