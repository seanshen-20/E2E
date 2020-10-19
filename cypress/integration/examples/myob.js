/// <reference types="cypress" />
import { purgeTaxNotice, link, cssLocator } from "../../support/page";

describe("tax notice delete and create", function () {
  const clientid = "15bc080d-f890-47ff-ac33-9a0f3d5ed583";
  const practice = "KIWI_AONZDB";

  before(() => cy.login(practice));

  it("Verify real estate logic", function () {
    cy.server()
      .route(link.tax_manage_notice_api(clientid))
      .as("getNotice")
      .visit(link.tax_manage_notice_page(clientid));

    // purge
    cy.wait("@getNotice", { timeout: 30000 }).then((xhr) => purgeTaxNotice(xhr));

    // verify creation
    cy.reload()
      .get(cssLocator.create_tax_notice, { timeout: 10000 })
      .contains("Create now")
      .click();
  });
});

// do not want to override standard timeout
