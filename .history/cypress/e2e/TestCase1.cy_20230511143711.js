/// <reference types="cypress"/>

import TestCase1 from '../support/TestCase1/TestCase1_Desenve'


describe('TestCase 1', () => {
    context('Validate Login Authentication and Field Verification', () => {
        it('Validates UserName, Password, LoginBtn and Login fields', () => {
            TestCase1.LinkAccess();
            TestCase1.informLogin();
            TestCase1.clickLoginBtn();
            TestCase1.checkAuthenticationLogin();
            TestCase1.logout();
        })
    })
})