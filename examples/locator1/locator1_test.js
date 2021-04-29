Feature('locator1');

Scenario('test with css locator', ({ I }) => {
    I.amOnPage("http://localhost:3001/bootstrap")
    I.fillField({name:"form6Example1"}, "vishwa")
    I.fillField({name:"form6Example2"}, "nara")
});
