Feature('radiobutton and check box second example');

Scenario(' more than  one check box behaviour', ({ I }) => {
    I.amOnPage("https://www.seleniumeasy.com/test/basic-radiobutton-demo.html");
    I.see("Male");
    I.checkOption('Male')
    I.checkOption('#easycont > div > div.col-md-6.text-left > div:nth-child(5) > div.panel-body > div:nth-child(2) > label:nth-child(2) > input[type=radio]')
    I.checkOption('5 to 15')
  
});

