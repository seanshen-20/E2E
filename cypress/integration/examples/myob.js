/// <reference types="cypress" />

describe("tax notice delete and create", function () {
  const clientid = "15bc080d-f890-47ff-ac33-9a0f3d5ed583";
  const practice = "KIWI_AONZDB";

  before(() => cy.login(practice).log("cypress test start!"));
  
  it("Verify real estate login", function () {
    cy.server();
    cy.route(
      `https://tax-manager-svc-api.svc.platform.myobdev.com/taxmanager/api/clients-without-tax-notices?clientId=${clientid}`
    ).as("getNotice");
    cy.visit(
      `https://shell.rogue.dev.myob.com/client/${clientid}/compliance/tax-notices`
    );

    // purge
    cy.wait("@getNotice", { timeout: 15000 }).then((xhr) => {
      purgeTaxNotice(
        xhr.requestHeaders["authorization"],
        xhr.requestHeaders["x-myobapi-tenantid"],
        xhr.requestHeaders["x-myobapi-clientid"]
      );
    });

    // verify creation
    cy.reload()
      .get(
        ".alert-msg > :nth-child(1) > .btn > .btn__container > .btn__content",
        { timeout: 10000 }
      )
      .contains("Create now")
      .click();
  });
});

// do not want to override standard timeout
function purgeTaxNotice(token, tennatid, clientid) {
  cy.request({
    method: "POST",
    url:
      "https://tax-manager-svc-api.svc.platform.myobdev.com/taxmanager/api/admin/client/taxnotices/purge",
    headers: {
      Authorization: `${token}`,
      "x-myobapi-tenantid": `${tennatid}`,
      "x-myobapi-clientid": `${clientid}`,
      "Content-Type": "application/json",
      Connection: "keep-alive",
      Accept: "*/*",
    },
  }).then((_) => {
    // ...
  });
}
