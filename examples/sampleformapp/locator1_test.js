Feature('locator1');

Scenario('test with css locator', ({ I }) => {
    I.amOnPage("http://localhost:3001/bootstrap")
    I.fillField({name:"form6Example1"}, "vishwa")
    I.fillField({name:"form6Example2"}, "nara")
    I.fillField({name:"form6Example3"}, "XYZ")
    I.fillField({name:"form6Example4"}, " Chembur Mumbai")
    I.fillField({name:"form6Example5"}, "ss@ss.com")
    I.fillField({name:"form6Example6"}, "9892426745")
    I.fillField({name:"form6Example7"}, "Hello how are u")
    I.selectOption("sel1","3")
    I.click("#form6Example8")
    I.click("Place order")

    I.see("form6Example1")
});
