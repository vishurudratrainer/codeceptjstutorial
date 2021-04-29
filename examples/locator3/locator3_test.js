Feature('bootstrapform3');

Scenario('test bootstrap', async ({ I }) => {
    I.amOnPage("http://localhost:3001/bootstrap")
    I.fillField({css:"#form6Example1"}, "vishwa")
    I.fillField({css:"#form6Example2"},"nara")
    
});
