require('chromedriver')
const chrome = require("selenium-webdriver/chrome");
const { By, until, Builder} = require("selenium-webdriver");
const {login, selectPractice} = require('./driverhelper');

// arrow function is discouraged 
describe('add or delete', function() {
  this.timeout(50000);

  // do not need to set position and size, it was done by default 
  let driver = new Builder().forBrowser("chrome")
    .setChromeOptions(new chrome.Options().headless())  
    .build();

  // https://mochajs.org/#root-hook-plugins
  // login once 
  beforeEach(async function () {
    console.log('object')
 
  });

  after(async function () {
    await driver.quit();
  });

  it("works with mocha", async () => {
    await login(driver);
    await selectPractice(driver);
  });
});




