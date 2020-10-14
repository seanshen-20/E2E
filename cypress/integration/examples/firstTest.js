/// <reference types="cypress" />

describe('MytestSuite', function() {
    it('Verify Title of the page', function() {
        cy.visit('https://demo.nopcommerce.com').then(o => {debugger; return o})
        cy.title().should('eq', 'nopCommerce demo store')
    })
})