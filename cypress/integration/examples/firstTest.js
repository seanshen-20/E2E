/// <reference types="cypress" />

describe('MytestSuite', function() {
    it('Verify Title of the page', function() {
        cy.visit('https://demo.nopcommerce.com');
        console.log('heelo')
        console.log('heeloo')
        console.log(Cypress.env('aaa'))
        cy.debug().getCookie('app')
        cy.title().should('eq', 'nopCommerce demo store')
    })
})