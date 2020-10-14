require('chromedriver')
const chrome = require("selenium-webdriver/chrome");
const { By, until, Builder} = require("selenium-webdriver")
const { Proxy } = require('browsermob-proxy');
const selfproxy = require('selenium-webdriver/proxy')
const express = require('express');
const app = express();
const mobproxy = new Proxy();
const BrowserMob = require('browsermob-proxy-client');


// app.use(express.static('html'))

app.listen(3333, () => console.log('Listening on port 3333'));
const defaultProxy = BrowserMob.createClient();
defaultProxy.createHar();

defaultProxy.start();

let driver = new Builder().forBrowser("chrome")
    .setProxy(selfproxy.manual({https: `host: 3333`}))
    // .setChromeOptions(new chrome.Options().headless())  
    .build()
driver.get("https://www.google.com");
var har = defaultProxy.getHar();
console.log(har)
defaultProxy.end();