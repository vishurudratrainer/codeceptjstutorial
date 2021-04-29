Feature('');

Scenario('test something', ({ I }) => {
    I.amOnPage("http://localhost:3001/iframe1")
    within({locate(frame)}, () => {

        I.see('This page is displayed in an iframe');
      });
});
