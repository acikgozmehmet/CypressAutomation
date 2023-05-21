// cypress - Spec
/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

import PracticePage from "../../pages/PracticePage"
import 'cypress-iframe'
import 'cypress-xpath'


describe('Angular Automation Practice Page', () => {

    let data; // closure variable

    before(function() {
        cy.fixture('angular_test_data').then(function(fdata)
        {
            data = fdata
        })
    }),   

    beforeEach(function() {
        cy.visit(Cypress.env('angularpractice'))
    }),

    it('Form Fillout', () => {
       cy.get('input[name="name"]:nth-child(2)').type(data.name)
       cy.get('input[name="name"]:nth-child(2)').should('have.value', data.name)
       cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength', 2)
       cy.get('#inlineRadio3').should('be.disabled')
    }),

    it('Adding products to Cart', () => {

        cy.xpath("//*[contains(text(),'Shop')]").click()
        
        data.products.forEach(function(element){
            cy.selectProduct(element)
        })
    })
 

    

})