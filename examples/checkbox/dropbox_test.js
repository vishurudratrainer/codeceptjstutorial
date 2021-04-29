var assert = require('assert');
Feature('dropbox');

Scenario('test list demo', async ({ I }) => {
    I.amOnPage('https://www.seleniumeasy.com/test/basic-select-dropdown-demo.html')
    I.selectOption('#select-demo', 'Sunday')
    I.click('#multi-select > option:nth-child(5)') //select has issue
    I.click('Get All Selected')
    
    let textData = await I.grabTextFrom('#easycont > div > div.col-md-6.text-left > div:nth-child(5) > div.panel-body > p.getall-selected')
    console.log(textData)
  
    assert.equal(textData, 'Options selected are : Ohio');
});
