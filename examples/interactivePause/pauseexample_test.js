Feature('pauseexample');

Scenario('pause a page after  opening', ({ I }) => {
 I.amOnPage('http://www.google.com');
  pause();
});
