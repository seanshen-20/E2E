require('chromedriver')
const chrome = require("selenium-webdriver/chrome");
const { By, until, Builder } = require("selenium-webdriver");
const {login, selectPractice} = require('./driverhelper');

// arrow function is discouraged 
describe('add or delete', function() {
  this.timeout(50000);
  let driver;

  beforeEach(async function () {
    // login and select practice
    driver = new Builder().forBrowser("chrome")
    .setChromeOptions(new chrome.Options().headless())  
    .build();
  });

  afterEach(async function () {
    await driver.quit();
  });

  it("works with mocha", async () => {
    await login(driver);
    await selectPractice(driver);
  });
});




