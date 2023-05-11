/// <reference types="cypress"/>

import TestCase3 from '../support/TestCase3/TestCase3_Desenve'

describe('TestCase 3', () => {


    beforeEach(function () {
        cy.visit('/');
        cy.login();
    })

    context('Validate invoice list data', () => {
        it('Invoice data validation', () => {
            TestCase3.faturaRendezvousHotel()
            TestCase3.detalhesFatura110();
            TestCase3.detalhesReserva110();
            TestCase3.detalhesCliente110();
            TestCase3.detalhesCobrança110();
        })
    })
})