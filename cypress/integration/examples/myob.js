/// <reference types="cypress" />
describe("real estate", function () {
  const clientid = "9abb0c90-6b72-42ce-98f7-277bd2e332be";

  it("Verify real estate login", function () {
      // login 
    cy.visit(
      "https://sit.login.myob.com/Account/Login?client_id=09f780c9-4873-4048-9fc5-f5943e91c817&redirect_uri=%2Foauth2%2Fauthorize%3Fresponse_type%3Dcode%2Bid_token%26client_id%3D09f780c9-4873-4048-9fc5-f5943e91c817%26resource%3D00000002-0000-0000-c000-000000000000%26scope%3Dopenid%26redirect_uri%3Dhttps%253a%252f%252ftest.secure.myob.com%252foauth2%252fAccount%252fLoginCallBack%26response_mode%3Dform_post%26state%3D2A823458DE1F42F08287BE12DB6610D5C943F8F1118668CEB618CD64EA7C2F3BB8748A72D60E77B5EAB7AE93CF5FC0B62006C1AE25AF80F5C3DA29E6F2055DFBCE1FBCD0CBB45B4A9AE87B1936BE9DF2617B10331BF39455D26357072C3F9418638E12597842BC093EC420B452526CAC4FDD77EEFFF1A828A0F374F54D9CDE13A6CB5AB0AA364BC5BCF2FCD41FB4E7367568CDD0E21155FA9F8CB57230FB6D29D43C9BB9F7A1A1E923B5297BE2699E7D7CCE906913BF0B10F7B79EEA17559E302395469F9002A9F8FF22835772F4A64059B906DFD95D4E93028ED88779009CB847A03CDB162963263D2AEA2D46C8268FE27ABB83E810AA831ADB2EC85DF051228FD53801F13C8C6785A71D9ACD9301728331FE3EFE41A58793AF9526C2D319FF851B8D4967B43D22375952ABF62361169F93F6EF6D060DC9F5055665F52A5AB5CC5F7E470FE1B51B1E04E9947E61E7F8E54AA3A7ADA739A99856A050D23CEFAFAF1FA23DBA3951E84AFA2F4E41E7C630977FE1CAE8266788D8B903ADDA1AC3FB154222DB"
    );

    cy.get('[type="email"]').type("archietest.user1propel@gmail.com");
    cy.get('[type="password"]').type("Myob1234");
    cy.get('[type="submit"]').click();
    cy.get("select").select("AONZDB1");
    cy.get('[type="submit"]').click();

    cy.server();
    cy.route(
      `https://tax-manager-svc-api.svc.platform.myobdev.com/taxmanager/api/clients-without-tax-notices?clientId=${clientid}`
    ).as("getNotice");
    cy.visit(
      `https://shell.rogue.dev.myob.com/client/${clientid}/compliance/tax-notices`
    );
    // cy.wait(5000)
    // cy.get('[data-testid=qa-topbar-submenu-taxNotices] > .shell3q').click()

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
      }).then(_ => {
        // ...
      });
    }

    // purge 
    cy.wait("@getNotice", { timeout: 15000 }).then((xhr) => {
    //   console.log(xhr.requestHeaders);
    //   console.log(xhr.requestHeaders["authorization"]);
    //   console.log(xhr.requestHeaders["x-myobapi-tenantid"]);
    //   console.log(xhr.requestHeaders["x-myobapi-clientid"]);
      
      purgeTaxNotice(xhr.requestHeaders["authorization"],xhr.requestHeaders["x-myobapi-tenantid"],xhr.requestHeaders["x-myobapi-clientid"] )
    });
  });
});

