Feature('');

Scenario('test something', async({ I }) => {
    I.amOnPage('http://localhost:3001/');
    I.fillField('customer_name', 'User');
    I.fillField('phone_number', '98922277227');
    I.fillField('email_address', '1234@eee.com');
    I.click('body > form > fieldset:nth-child(4) > p:nth-child(3) > label > input[type=radio]')
    I.click('body > form > fieldset:nth-child(5) > p:nth-child(3) > label > input[type=checkbox]')
   // I.click('body > form > p:nth-child(6) > label > input[type=datetime-local]')
   I.fillField("#datetime-local",'22-04-2020')
    I.fillField('comments', 'Hello how r u ?')
   
    I.click('button')
    let data = await I.grabHTMLFrom()
    console.log(data)
});


