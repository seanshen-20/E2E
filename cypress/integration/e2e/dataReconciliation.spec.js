/// <reference types="cypress" />
import { link, cssLocator } from "../../support/page";

describe("data reconciliation test", function () {
  const clientid = "15bc080d-f890-47ff-ac33-9a0f3d5ed583";
  const practice = "KIWI_AONZDB";

  before(() => {
    cy.login(practice);
    cy.visit(link.tax_manager_data_reconciliation(clientid));
    cy.get(cssLocator.period, { timeout: 50000 }).select("2020-03-31T00:00:00");
  });

  it("display the transations and statement cards for the client", function () {
    // chossing the required period with unreconciled transaction
    cy.get(cssLocator.ird_statements_header).contains("IRD statements");
  });

  it("reconcil validation", function () {
    // create
    cy.get( ".table-data__body .table-data__row:nth-child(2) .checkbox label").click();
    cy.get( ".table-data__body .table-data__row:nth-child(3) .checkbox label").click();
  
    cy.contains("[type='button']", "Reconcile").click();
    cy.get("div.flx-btn-row .btn-primary").click();
    
    // unconcile
    cy.get(".groupedRows:nth-of-type(1) .checkbox label").click();
    cy.contains("[type='button']" ,"Unreconcile").click();
    cy.wait(2000);
  });
});
