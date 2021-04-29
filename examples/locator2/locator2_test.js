Feature('locator2');

Scenario('test with  locator on id', ({ I }) => {
    I.amOnPage("http://localhost:3001/bootstrap")
    I.fillField({id:"form6Example1"}, "vishwa")
    I.fillField({id:"form6Example2"}, "nara")
    
});
