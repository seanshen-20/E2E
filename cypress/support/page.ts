/// <reference types="cypress" />
export function purgeTaxNotice(xhr: Cypress.WaitXHR) {
    cy.request({
      method: "POST",
      url:
        "https://tax-manager-svc-api.svc.platform.myobdev.com/taxmanager/api/admin/client/taxnotices/purge",
      headers: {
        Authorization: `${xhr.requestHeaders["authorization"]}`,
        "x-myobapi-tenantid": `${xhr.requestHeaders["x-myobapi-tenantid"]}`,
        "x-myobapi-clientid": `${xhr.requestHeaders["x-myobapi-clientid"]}`,
        "Content-Type": "application/json",
        Connection: "keep-alive",
        Accept: "*/*",
      },
    }).then((_) => {
      // ...
    });
  }

export const link = {
    tax_manage_notice_api : (clientid: string) => `https://tax-manager-svc-api.svc.platform.myobdev.com/taxmanager/api/clients-without-tax-notices?clientId=${clientid}`,
    tax_manage_notice_page : (clientid: string) => `https://shell.rogue.dev.myob.com/client/${clientid}/compliance/tax-notices`
} 

export const cssLocator = {
  create_tax_notice : '.alert-msg > :nth-child(1) > .btn > .btn__container > .btn__content'
}

