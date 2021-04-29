Feature('filedownload');
const Helper = codecept_helper;
/*
Scenario('test direct download', async ({ I }) => {
    const res = await I.sendGetRequest('');
    I.writeToFile('test.pdf', res.data);
    I.seeFile('test.pdf');

});

*/
Scenario('test indirect', async ({ I }) => {
    I.amOnPage('http://cart.ebalbharati.in/BalBooks/ebook12.aspx')
    I.seeElement('//*[@id="btnAddtoCart"]/div')
    I.grabAttributeFrom
    I.click('//*[@id="btnAddtoCart"]/div')
    I.switchToNextTab()
    let url =  await I.grabCurrentUrl()
    console.log(url)
    const res = await I.sendGetRequest(url);
    I.writeToFile('1.pdf', res.data);
    I.seeFile('1.pdf');
   



});

