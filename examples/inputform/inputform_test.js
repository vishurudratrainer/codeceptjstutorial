var assert = require('assert')
Feature('inputform');

Scenario('test input user message', async({ I }) => {

    I.amOnPage('https://www.seleniumeasy.com/test/basic-first-form-demo.html')
    I.fillField('#user-message','Vishwa')
    I.click('Show Message')
    let text = await I.grabTextFrom("//*[@id='display']")
    console.log(text)
    assert.equal(text,"Vishwa")
});



Scenario('test input number  add', async({ I }) => {

    I.amOnPage('https://www.seleniumeasy.com/test/basic-first-form-demo.html')
    I.fillField('#sum1','23')
    I.fillField('#sum2','23')
    I.click('Get Total')
    let text = await I.grabTextFrom("//*[@id='displayvalue']")
    console.log(text)
    assert.equal(text,"46")
});
