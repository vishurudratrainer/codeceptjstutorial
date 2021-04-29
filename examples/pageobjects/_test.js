Feature('');

Scenario('test something', ({ I, generalPage }) => {
    I.amOnPage("http://localhost:3001/datatestid")
    generalPage.fillform('john@doe.com', '123456');
    console.log(generalPage.retriveusername())
    pause()
});
