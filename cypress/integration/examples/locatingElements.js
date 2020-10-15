/// <reference types="cypress" />

describe('Locating Elements', function() {
    it('Verify types of locators', function() {
        cy.visit('https://demo.nopcommerce.com');
        cy.get('#small-searchterms').type("Apple MacBook Pro 13-inch")

        cy.get('[type="submit"]').click()
        cy.get(".product-box-add-to-cart-button[value='Add to cart']").click()

        cy.get("#product_enteredQuantity_4").clear().type('2') // Quantity 
        cy.get("#add-to-cart-button-4").click() // Add to cart button after providing quantity 
        
        cy.wait(4000)
        cy.get("span.cart-label").click()

        cy.get(".product-unit-price").contains('$1,800.00') // validating point 
    })
})