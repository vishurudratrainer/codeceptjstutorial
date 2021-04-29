Feature('inputform');

Scenario('form fill', ({ I }) => {
    I.amOnPage('https://www.seleniumeasy.com/test/input-form-demo.html')
    I.fillField('#contact_form > fieldset > div:nth-child(2) > div > div > input', 'vishwa')
    I.fillField('//*[@id="contact_form"]/fieldset/div[2]/div/div/input', 'nara')
    I.fillField('#contact_form > fieldset > div:nth-child(4) > div > div > input', 'vishurudra@yahoo.com')
    I.fillField('#contact_form > fieldset > div:nth-child(5) > div > div > input', '9892425745')
    I.fillField('#contact_form > fieldset > div:nth-child(6) > div > div > input','Alabama State boatd')
    I.fillField('#contact_form > fieldset > div:nth-child(7) > div > div > input','Alabama')
    I.selectOption('#contact_form > fieldset > div:nth-child(8) > div > div > select','Alabama')
    I.fillField('#contact_form > fieldset > div:nth-child(9) > div > div > input','35242')
    I.fillField('#contact_form > fieldset > div:nth-child(10) > div > div > input','www.google.com')
    I.checkOption("#contact_form > fieldset > div:nth-child(11) > div > div:nth-child(1) > label > input[type=radio]")
    I.fillField('#contact_form > fieldset > div:nth-child(12) > div > div > textarea','This is a ample example')
    pause()
});
