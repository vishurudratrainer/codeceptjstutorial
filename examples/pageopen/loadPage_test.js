Feature('loadPage');

Scenario('test page open', ({ I }) => {
  I.amOnPage('https://www.google.com');
  I.see('Google');
 
});
