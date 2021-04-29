Feature('radiobutton and check box');

Scenario('test radio button select', ({ I }) => {
    I.amOnPage("https://www.zkoss.org/zkdemo/input/radio_button");
    I.see("Web IDE Support");
    I.checkOption('Web IDE Support')
    I.checkOption('ZK Demo')
    I.checkOption('Developer Reference')
});


Scenario('test check box  select', ({ I }) => {
    I.amOnPage("https://www.zkoss.org/zkdemo/input/checkbox");
    I.see("Border");
    I.checkOption('Border')
    I.checkOption('Portal')
    I.checkOption('Table')
});


Scenario('test check box  second select', ({ I }) => {
    I.amOnPage("https://demos.jquerymobile.com/1.4.5/checkboxradio-radio/");
    I.see("One");
    I.checkOption('#ui-page-top > div.jqm-demos.ui-page.ui-page-theme-a.ui-page-footer-fixed.ui-page-active > div.ui-content.jqm-content > div:nth-child(6) > form > div:nth-child(1) > label')
    I.checkOption('#ui-page-top > div.jqm-demos.ui-page.ui-page-theme-a.ui-page-footer-fixed.ui-page-active > div.ui-content.jqm-content > div:nth-child(16) > form > fieldset > div.ui-controlgroup-controls > div:nth-child(2) > label')
    I.checkOption('#ui-page-top > div.jqm-demos.ui-page.ui-page-theme-a.ui-page-footer-fixed.ui-page-active > div.ui-content.jqm-content > div:nth-child(39) > div > label')
    
});
