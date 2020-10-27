/// <reference types="cypress" />
import { purgeTaxNotice, link, cssLocator } from '../../support/page';

describe('tax notice test', function() {
  const clientid = '15bc080d-f890-47ff-ac33-9a0f3d5ed583';
  const practice = 'KIWI_AONZDB';

  // because dom is modified, cypress needs to re-login. 
  // alternatively, save session. one login can test many senarios. not opt because of complexity 
  // beforeEach(() => {
  //   cy.login(practice);
  //   cy.server()
  //     .route(link.tax_manage_notice_api(clientid))
  //     .as('getNotice')
  //     .visit(link.tax_manage_notice_page(clientid));
  // });

  it('tax notice update', function() {
    // open provisional instalment 2
    // tricky part is table notices dom already exsit, which is not dynamically generated. 
    // wait children appears, then it is safe to click the notice and continue test 
    // cy.get(':nth-child(1) > [title="Customer Seven"]', {timeout: 20000});
    // cy.get('div.table-data__body > div > div:nth-child(2)').click();
    
    // // standard
    // cy.get('[name="TaxOption"]').select('Standard');
    // cy.get('input[name="TaxCredits"]').clear().type(100.00);
    // cy.get('[name="TaxableIncome"]').should('have.value', 357.14);
  });

  it('tax notice delete and create', function() {
    // cy.login(practice);
    // cy.server()
    //   .route(link.tax_manage_notice_api(clientid))
    //   .as('getNotice')
    //   .visit(link.tax_manage_notice_page(clientid));
    // // purge
    // cy.wait('@getNotice', { timeout: 30000 }).then(xhr => purgeTaxNotice(xhr));

    // // verify creation
    // cy.reload()
    //   .get(cssLocator.create_tax_notice, { timeout: 10000 })
    //   .contains('Create now')
    //   .click();
  });
});
