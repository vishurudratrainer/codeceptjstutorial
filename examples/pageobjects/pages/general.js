const { I } = inject();

module.exports = {

  // setting locators
  fields: {
    username: '[data-testid=username]',
    password: '[data-testid=password]'
  },
  submitButton: '[data-testid=signup]',

  // introducing methods
  fillform(username, password) {
    I.fillField({ css: this.fields.username }, username);
    I.fillField({ css: this.fields.password }, password);

  }
  ,
  submitform() {
    I.click({ css: this.submitButton });

  }
  ,
  async retriveusername() {
    I.seeElement({css:'[data-testid=username]'})
    let fetched = await I.grabValueFrom({css:'[data-testid=username]'});
    console.log(fetched)
    return fetched
   
  }



}