Feature('locator2');
var assert = require('assert')
Scenario.skip('test iframe', async ({ I }) => {
  I.amOnPage("http://localhost:3001/iframe1")
  I.click(locate("button"))
  const allHandlesAfterPopup = await I.grabAllWindowHandles();

  await I.switchToWindow(allHandlesAfterPopup[1]);
  const urlAfterPopup = await I.grabCurrentUrl();
  console.log("url" + urlAfterPopup)
  assert.strictEqual("https://www.google.com/", urlAfterPopup)
}).tag("@iframetest")


Scenario('test alert', async ({ I }) => {
  I.amOnPage("http://localhost:3001/alert")
  I.click(locate("button"))

  I.seeInPopup("Hello! I am an alert box")

  I.acceptPopup()
  pause()

});


Scenario('test confirm', async ({ I }) => {
  I.amOnPage("http://localhost:3001/confirm")
  I.click(locate("button"))

  I.seeInPopup("Press a button!")

  I.acceptPopup()

  I.click(locate("button"))

  I.seeInPopup("Press a button!")

  I.cancelPopup()
  pause()

});


let accounts = new DataTable(['login', 'password']); //
accounts.add(['davert', '123456']); // adding records to a table
accounts.add(['admin', '123456']);

// You can skip some data. But add them to report as skipped (just like with usual scenarios):
accounts.xadd(['admin', '23456'])

// Pass dataTable to Data()
// Use special param `current` to get current data set
Data(accounts).Scenario('Test Login', ({ I, current }) => {
  I.amOnPage("http://localhost:3001/admin")
  I.fillField('username', current.login); // current is reserved!
  I.fillField('password', current.password);
  I.click('Login');
  I.see('Hello'+ current.login);
}).tag('@slow').tag('important');

Scenario('Compare CodeceptIO Home Page @visual-test', async ({ I }) => {
  I.amOnPage("https://codecept.io/");
  I.saveScreenshot("Codecept_IO_Screenshot_Image.png");
  I.seeVisualDiff("Codecept_IO_Screenshot_Image.png", {tolerance: 2, prepareBaseImage: false});
});