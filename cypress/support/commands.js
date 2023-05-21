// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

// RadioButton
Cypress.Commands.add('SelectRadioButton', (val) => {
    cy.log(val)
    // cy.get('input[value='.concat(val).concat(']')).check().should('be.checked')
    cy.get('input[type="radio"]').check(val).should('be.checked')
})


// CheckBox
Cypress.Commands.add('CheckBox', (searchedValue) => {
    cy.get('input[type="checkbox"]').check(searchedValue).should('be.checked')
})

Cypress.Commands.add('CheckBox2', (locator, searchedValue) => {
    cy.get(locator)  .check(searchedValue).should('be.checked')
})

Cypress.Commands.add('UncheckBox', (searchedValue) => {
    cy.get('input[type="checkbox"]').uncheck(searchedValue).should('not.be.checked')
})

Cypress.Commands.add('CheckMultipleBoxes', (searchedValues) => {
    cy.get('input[type="checkbox"]').check(searchedValues).should('be.checked')
})

Cypress.Commands.add('UncheckBoxes', ()=>{
    cy.get('input[type="checkbox"]').uncheck().should('not.be.checked')
})

// Static Dropdown
Cypress.Commands.add('SelectFromStaticDropdown', (value) => {
    cy.get('select').select(value).should('have.value', value)
})

// Static Dropdown
Cypress.Commands.add('SelectFromDynamicDropdown', (locator, value) => {
    const ele = cy.get(locator).type(value)
    cy.get('.ui-menu-item div').each(($el, index, $list) => {
        if ($el.text() === value)
        {
            cy.wrap($el).click().should('have.text', value)
        }
    })
})

// IsVisible
Cypress.Commands.add('IsVisible', (locator) => {
    cy.get(locator).should('be.visible')
})

// IsInvisible
Cypress.Commands.add('IsInvisible', (locator) => {
    cy.get(locator).should('not.be.visible')
})

// Alert Message - @wip
Cypress.Commands.add('ValidateAlertMessage', ( message) => {
    cy.on('window:alert', (theMessage)=> 
    {
        cy.log(theMessage)
        expect(theMessage).to.equal(message)
    })
})

// SwitchTab - @wip
Cypress.Commands.add('SwitchToTab', (locator) => {
    cy.get(locator).invoke('removeAttr','target').click()
})


// MouseOver
Cypress.Commands.add('MouseOver', (locator, item) => {
    cy.get(locator).invoke('show')
    cy.contains(item).click()
})

Cypress.Commands.add('selectProduct', (productName) => {

    cy.get('h4.card-title').each(($el, index, $list) =>{
        if ($el.text().includes(productName))
        {
            cy.get('button.btn.btn-info').eq(index).click()
        }
    })
})       


//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })