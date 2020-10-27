/// <reference types="cypress" />
import { link, cssLocator } from "../../support/page";

describe("data reconciliation test", function () {
  const clientid = "15bc080d-f890-47ff-ac33-9a0f3d5ed583";
  const practice = "KIWI_AONZDB";

  before(() => {
    cy.login(practice);
    cy.visit(link.tax_manager_data_reconciliation(clientid));
    cy.get(cssLocator.period, { timeout: 60000 }).select("2020-03-31T00:00:00");
  });

  it("display the transations and statement cards for the client", function () {
    // choosing the required period with unreconciled transaction
    cy.get(cssLocator.ird_statements_header).contains("IRD statements");
  });

  it("reconcil validation", function () {
    // select ird and myob transaction 
    cy.get(cssLocator.ird_transaction).click();
    cy.get(cssLocator.myob_transaction).click();
   
    cy.get(cssLocator.reconcile).click();

    // confirm reconcile 
    cy.get(cssLocator.reconcileConfirm).click();
    
    // unconcile
    cy.get(cssLocator.selectUnreconcile).click();
    cy.contains("[type='button']" ,"Unreconcile").click().wait(1000);
  });
});
