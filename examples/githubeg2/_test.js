Feature('Git');

Scenario('Demo Test Github', ({ I }) => {
	I.startMocking();
  I.amOnPage('https://github.com/login');
  I.see('GitHub');
  I.fillField('login', 'randomuser_kmk');
  I.fillField('password', 'randomuser_kmk');
  I.click('Sign in');
  I.see('Incorrect username or password.');
 I.stopMocking();

});

Scenario('Demo Test GitLab', ({ I }) => {
  I.amOnPage('https://gitlab.com');
  I.dontSee('GitHub');
  I.see('GitLab');
});