Feature('bootstrapform');

Scenario('test bootstrap', async ({ I }) => {
    I.amOnPage("http://localhost:3001/bootstrap")
    I.fillField("#form6Example1", "vishwa")
    I.fillField("#form6Example2", "nara")
    I.fillField("#form6Example3", "XYZ")
    I.fillField("#form6Example4", " Chembur Mumbai")
    I.fillField("#form6Example5", "ss@ss.com")
    I.fillField("#form6Example6", "9892426745")
    I.fillField("#form6Example7", "Hello how are u")
    I.selectOption("sel1","3")
    I.click("#form6Example8")
    I.click("Place order")

    I.see("form6Example1")
});
