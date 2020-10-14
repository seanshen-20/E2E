const chrome = require("selenium-webdriver/chrome");
const { By, until, Builder } = require("selenium-webdriver");
exports.mochaHooks = {
  beforeEach: [
      function a() {
          console.log('abc')
      },
    async function () {
      // login and select practice
      this.driver = new Builder()
        .forBrowser("chrome")
        .setChromeOptions(new chrome.Options().headless())
        .build();
        
      
    },
  ],
  afterEach: [
    async function () {
      await this.driver.quit();
    },
  ]
};
//
