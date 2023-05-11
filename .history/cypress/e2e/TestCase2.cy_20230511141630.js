/// <reference types="cypress"/>

import TestCase2 from '../support/TestCase2/TestCase2_Desenve'

describe('TestCase 2', () => {

    const LoginScreen = require('../../cypress/support/Element/Elements').ELEMENTS


    beforeEach(function () {
        cy.visit('/')
    })

    context('Validate Fail Authentication with Invalid UserName and Password', () => {

        it('Insert random data and certify authentication failure', () => {

            TestCase2.validateInput1Fail();
            TestCase2.validaDados2Fail();
            TestCase2.validaDados3Fail();
            TestCase2.validaDados4Sucess();



        })





    })



})