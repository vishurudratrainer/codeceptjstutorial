Feature('bootstrapform3');

Scenario('test bootstrap with dataid', async ({ I }) => {
    I.amOnPage("http://localhost:3001/datatestid")
    I.fillField({ css: '[data-testid=username]' }, 'vishwa')
    I.fillField({ css: '[data-testid=password]' }, secret('vishwa'))
    pause()
});

Scenario('test custom data id plugin with dataid', async ({ I }) => {
    I.amOnPage("http://localhost:3001/datatestid")
    I.fillField('$username', 'vishwa')
    I.fillField('$password', secret('vishwa'))
    pause()
});
