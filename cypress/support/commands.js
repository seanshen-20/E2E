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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
//     const opts = Object.assign({}, options, {
//       onBeforeLoad: (window, ...args) => {
//         window.fetch = null;
//         if (options.onBeforeLoad) {
//           return options.onBeforeLoad(window, ...args);
//         }
//       },
//     });
//     return originalFn(url, opts);
//   });
Cypress.Commands.add(
  "login",
  (
    practice,
    email = Cypress.env("TAX_EMAIL"),
    password = Cypress.env("TAX_PASSWORD")
  ) => {
    cy.visit(
      "https://sit.login.myob.com/Account/Login?client_id=09f780c9-4873-4048-9fc5-f5943e91c817&redirect_uri=%2Foauth2%2Fauthorize%3Fresponse_type%3Dcode%2Bid_token%26client_id%3D09f780c9-4873-4048-9fc5-f5943e91c817%26resource%3D00000002-0000-0000-c000-000000000000%26scope%3Dopenid%26redirect_uri%3Dhttps%253a%252f%252ftest.secure.myob.com%252foauth2%252fAccount%252fLoginCallBack%26response_mode%3Dform_post%26state%3D2A823458DE1F42F08287BE12DB6610D5C943F8F1118668CEB618CD64EA7C2F3BB8748A72D60E77B5EAB7AE93CF5FC0B62006C1AE25AF80F5C3DA29E6F2055DFBCE1FBCD0CBB45B4A9AE87B1936BE9DF2617B10331BF39455D26357072C3F9418638E12597842BC093EC420B452526CAC4FDD77EEFFF1A828A0F374F54D9CDE13A6CB5AB0AA364BC5BCF2FCD41FB4E7367568CDD0E21155FA9F8CB57230FB6D29D43C9BB9F7A1A1E923B5297BE2699E7D7CCE906913BF0B10F7B79EEA17559E302395469F9002A9F8FF22835772F4A64059B906DFD95D4E93028ED88779009CB847A03CDB162963263D2AEA2D46C8268FE27ABB83E810AA831ADB2EC85DF051228FD53801F13C8C6785A71D9ACD9301728331FE3EFE41A58793AF9526C2D319FF851B8D4967B43D22375952ABF62361169F93F6EF6D060DC9F5055665F52A5AB5CC5F7E470FE1B51B1E04E9947E61E7F8E54AA3A7ADA739A99856A050D23CEFAFAF1FA23DBA3951E84AFA2F4E41E7C630977FE1CAE8266788D8B903ADDA1AC3FB154222DB"
    );

    cy.get('[type="email"]').type(email);
    cy.get('[type="password"]').type(password);
    cy.get('[type="submit"]').click();
    cy.get("select").select(practice);
    cy.get('[type="submit"]').click();
    return cy 
  }
);
