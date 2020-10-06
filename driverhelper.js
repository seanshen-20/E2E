const { By, until } = require("selenium-webdriver");

async function login(driver) {
  await driver.get(
    "https://sit.login.myob.com/Account/Login?client_id=09f780c9-4873-4048-9fc5-f5943e91c817&redirect_uri=%2Foauth2%2Fauthorize%3Fresponse_type%3Dcode%2Bid_token%26client_id%3D09f780c9-4873-4048-9fc5-f5943e91c817%26resource%3D00000002-0000-0000-c000-000000000000%26scope%3Dopenid%26redirect_uri%3Dhttps%253a%252f%252ftest.secure.myob.com%252foauth2%252fAccount%252fLoginCallBack%26response_mode%3Dform_post%26state%3DBD31853097AA90528ED8AE8EA2B7808CB76024E7863646A8DEFCBE4CBE140927EA32ED5F66ED11550DF575C6346A0D1C030141A6ADC9315E4F2AC27BA31092998FA791B65888AEDD6AA0E1D25BE11B4D430A90F939524BB42892856CAF305236D95BE71B87365931F33A800BD5432702EB42E175B5458912AB0BE60ED1E746F0322B418256435F303FCF74731078477A67A08A0381540687F8B8DD50BD6F1956F62EB1212BCC34FE5995705624B913A54561B4951337003680084D94D427574DA5E06809C5919D5FB5F8D516F3E01A32B81DCAEC8086CBD1FAB4B99652B0F7DC7B088A0D8168E7197E3C86B4C04DE7B6F068D59A46733AC0C05CC56E595302B05C1823BF2491F25C760E5000B514B2FB3B72C2894CFCB3DABE91CEDDF339FD4D8913B74BF48032AAD48ED72C83BDFF7AF4C3C4F08DB9817403BE2DFFC309F51F27D9418D8E8E81E33C92FED964019EEF96FDB2DD60B94285EA0CDE6C188AE4B91D214D8EAD62178D372A35D64C8B1887F7ED84C164BF60F8A320ED2C490E13A06F9359C6"
  );
  await driver.manage().window().setRect({ width: 1588, height: 944 });
  console.log(process.env.SIT_EMAIL);
  // Login screen
  await driver.findElement(By.id("UserName")).sendKeys(process.env.SIT_EMAIL);
  await driver
    .findElement(By.id("Password"))
    .sendKeys(process.env.SIT_PASSWORD);
  await driver.findElement(By.css(".btn-block")).click();
}

async function selectPractice(driver) {
  //   await login();
  let dropdown = await driver.wait(
    until.elementLocated(By.css(".form-control"))
  );
  await dropdown.findElement(By.xpath("//option[.='AONZDB1']")).click();
  await driver.findElement(By.css(".btn")).click();
}

module.exports = {
  login,
  selectPractice,
};
