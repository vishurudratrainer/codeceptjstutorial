Feature('React Apps');

Scenario('try react app', ({ I }) => {
  I.amOnPage('https://ahfarmer.github.io/calculator/');
  I.click('7');
  I.click('+');
  I.click('2');
  I.click('=');
  I.seeElement({ react: 't', props: { value: '9' } });
});