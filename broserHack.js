require("chromedriver");
require("geckodriver");
const chrome = require("selenium-webdriver/chrome");
const firefox = require("selenium-webdriver/firefox");
const { By, until, Builder } = require("selenium-webdriver");
const { Proxy } = require("browsermob-proxy");
const selfproxy = require("selenium-webdriver/proxy");
const express = require("express");
const app = express();
const browserMobProxy = new Proxy();
const BrowserMob = require("browsermob-proxy-client");


// app.use(express.static("html"));

// app.listen(3333, () => console.log("Listening on port 3333"));

async function HaveAgo() {
  //   const defaultProxy = BrowserMob.createClient();
  //   defaultProxy.start();
  //   defaultProxy.createHar();
  let driver = new Builder()
    .forBrowser("chrome")
    // .setProxy(selfproxy.manual({ https: `host: 3333` }))
    // .setChromeOptions(new chrome.Options().headless())
    .build();
await driver.get('https:www.google.com')
 var a = await driver.executeScript("return window.performance.timing.navigationStart");
 console.log(`${a}`)
}

// HaveAgo();
function HaveATry() {
    browserMobProxy.selFunc()
}

// var har = defaultProxy.getHar();
// console.log(har)
// defaultProxy.end();
// mobproxy.start()
// // mobproxy.doHAR('http://yahoo.com', function(err, data) {
// //     if (err) {
// //         console.error('ERROR: ' + err);
// //     } else {
// //         fs.writeFileSync('yahoo.com.har', data, 'utf8');
// //     }
// // });
// mobproxy.stop()
