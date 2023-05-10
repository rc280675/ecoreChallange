const LoginScreen = require('../Element/Elements').ELEMENTS


class TestCase3 {

    RendezvousHotelInvoice() {

        cy.get('div[class="container"]').find('div[class="row"]')
            .contains('Rendezvous Hotel')

        cy.get('a[href="/invoice/0"]')
            .should('be.visible')

        cy.visit('https://automation-sandbox-python-mpywqjbdza-uc.a.run.app/invoice/0')
            .should('exist')

        /*VERIFICA A TELA DETALHES DE FATURAS */

        cy.get('div[class="container"]').find('h4[class="mt-5"]')
            .should('have.text', 'Rendezvous Hotel')



    }

    detalhesFatura110() {


        /*Detalhes da Fatura 110 */

        cy.get('div[class="container"]').find('h6[class="mt-2"]')
            .should('have.text', 'Invoice #110 details')

        cy.get('span[class="font-weight-bold"]')
            .contains('Invoice Date:')

        cy.get('li')
            .contains('14/01/2018').should('be.visible')

        /*DUE DATA */

        cy.get('span[class="font-weight-bold"]')
            .contains('Due Date:'),

            cy.get('li')
                .contains('15/01/2018').should('be.visible')
    }

    detalhesReserva110() {
        /*Detalhes da reserva/estadia */

        cy.get('h5[class="mt-5"]')
            .contains('Booking/Stay details')

        cy.get('table[class="table"]').find('td[class="font-weight-bold"]')
            .contains('Booking Code')
        cy.get('td')
            .contains('0875')

        cy.get('table[class="table"]').find('td[class="font-weight-bold"]')
            .contains('Room')
        cy.get('td')
            .contains('Superior Double')

        cy.get('table[class="table"]').find('td[class="font-weight-bold"]')
            .contains('Total Stay Count')
        cy.get('td')
            .contains('1')


        cy.get('table[class="table"]').find('td[class="font-weight-bold"]')
            .contains('Total Stay Amount')
        cy.get('td')
            .contains('$150')


        cy.get('table[class="table"]').find('td[class="font-weight-bold"]')
            .contains('Check-In')
        cy.get('td')
            .contains('14/01/2018')



        cy.get('table[class="table"]').find('td[class="font-weight-bold"]')
            .contains('Check-Out')
        cy.get('td')
            .contains('15/01/2018')
    }

    detalhesCliente110() {

        /*Detalhes do cliente */

        cy.get('h5[class="mt-5"]')
            .should('be.visible', 'Customer Details')

        cy.get('div')
            .contains('JOHNY SMITH')
        cy.contains('R2, AVENUE DU MAROC')
        cy.contains('123456')

    }

    detalhesCobrança110() {


        /*Detalhes de cobrança */

        cy.get('h5[class="mt-5"]')
            .contains('Billing Details').should('be.visible')

        cy.get('table[class="table"]').find('tr[class="font-weight-bold"]').find('td')
            .contains('Deposit Nowt')
        cy.contains('Tax&VAT')
        cy.contains('Total Amount')


        cy.get('table[class="table"]').eq(1).find('tr')
            .should('contain', 'USD $20.90').should('contain', 'USD $19').should('contain', 'USD $209')



    }




}

export default new TestCase3();