/// <reference types="cypress" />
export function purgeTaxNotice(xhr) {
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
  tax_manage_notice_api : (clientid) => `https://tax-manager-svc-api.svc.platform.myobdev.com/taxmanager/api/clients-without-tax-notices?clientId=${clientid}`,
  tax_manage_notice_page : (clientid) => `https://shell.rogue.dev.myob.com/client/${clientid}/compliance/tax-notices`,
  tax_manager_data_reconciliation: (clientId) => `https://shell.rogue.dev.myob.com/client/${clientId}/compliance/data-reconciliation`,
} 

export const cssLocator = {
// tax notice css 
create_tax_notice : '.alert-msg > :nth-child(1) > .btn > .btn__container > .btn__content',

// dataReconciliation css 
period: '#period',
unreconciled_transactions_header: ':nth-child(1) > .flx-card__heading h1',
ird_statements_header: ':nth-child(2) > .flx-card__heading h1',
ird_transaction: ':nth-child(2) > .table-data__checkbox > .checkbox > .form-group__label-group > label',
myob_transaction: ':nth-child(3) > .table-data__checkbox > .checkbox > .form-group__label-group > label',
reconcile: ".sc-bZQynM > :nth-child(1)",
reconcileConfirm: "div.flx-btn-row .btn-primary",
selectUnreconcile: ".groupedRows:nth-of-type(1) .checkbox label",
}

