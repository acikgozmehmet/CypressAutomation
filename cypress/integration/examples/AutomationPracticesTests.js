// cypress - Spec
/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

import PracticePage from "../../pages/PracticePage"
import 'cypress-iframe'
import 'cypress-xpath'

describe('Automation Practice Page', () => {

  beforeEach(function() {
    cy.visit(Cypress.env('practice'))
  })

    it('Radio Button Tests', () => {

      cy.SelectRadioButton('radio1')
      cy.SelectRadioButton('radio2')
    }),

    it('Check Boxes Tests', () => {
      // cy.log(PracticePage.getOption1())
      // cy.CheckBox2(PracticePage.getOption1(), 'option1')
      // cy.CheckBox2('#checkBoxOption1', 'option1')
      
      PracticePage.getOption1().click()
      cy.CheckBox('option1')

      cy.UncheckBox('option1')
      cy.CheckMultipleBoxes(['option1', 'option2', 'option3'])
      cy.UncheckBoxes()
    }),

    it('Dropdown Tests', () => {    
      // Static Dropdown
      cy.SelectFromStaticDropdown('option1')
  

      // Dynamic Dropdown
      cy.SelectFromDynamicDropdown('#autocomplete', "India")
    }),

    it('Visibility Tests', () => {    
      cy.get('#show-textbox').click()
      cy.IsVisible('#displayed-text')
      cy.get('#hide-textbox').click()
      cy.IsInvisible('#displayed-text')
    }),

    it.skip('Alert Tests', () => {    
      cy.get('#alertbtn').click()
      // cy.ValidateAlertMessage('Hello , share this practice page and share your knowledge')
      // cy.get('[value="Confirm"]').click()
      cy.on('window:alert', (theMessage)=> 
      {
          // cy.log(theMessage)
          expect(theMessage).to.equal('Hello , share this practice page and share your knowledge')
      })

      cy.get('#confirmbtn').click()
      cy.on('window:confirm', (theMessage)=> 
      {
          // cy.log(theMessage)
          expect(theMessage).to.equal('Hello , Are you sure you want to confirm?')
      })
    }),

    it.skip('SwitchTab Tests', () => {    
      // cy.SwitchToTab('[id=opentab]')
      
      cy.get('#opentab').invoke('removeAttr','target').click()


      // cy.wait(6000)
      cy.log(cy.url().title())
      cy.log(cy.location('host'))
      cy.url().should('include','qa')
  
      cy.go('back')

      cy.url().should('eq', 'https://www.qaclickacademy.com/')
    }),

    it('SwitchTab2 Test', () => {    
      cy.get('#opentab').then(function(el) 
      {
        const url = el.prop('href')
        cy.visit(url) //.should('include','qa') 
        cy.origin(url, ()=> {
          cy.get("div.sub-menu-bar a[href*='about']").click()
          cy.url().should('include','qa') 
        })
      })   
    })

    it('MouseOver Test', () => {    
      cy.MouseOver('.mouse-hover-content', 'Top')
      cy.url().should('include','top')
    }),

    it('Table Value Test', () => {    
      cy.get('.table-display tr td:nth-child(2)').each(($el, index, $list) => {

        const t = $el.text()
        if (t.includes('Python'))
        {
          cy.get('.table-display tr td:nth-child(2)').eq(index).next().then(function(price)
          {
            const priceText = price.text()
            expect(priceText).to.equal('25') 
          })
        }
      })
    }),
    
    it('Iframe Test', () => {
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find("a[href*='mentorship']").eq(0).click()
    })

}) // describe