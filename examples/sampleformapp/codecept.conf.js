exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://localhost:3001',
      browser: 'chrome'
    },
    
      "ResembleHelper" : {
        "require": "codeceptjs-resemblehelper",
        "screenshotFolder" : "./tests/output/",
        "baseFolder": "./tests/screenshots/base/",
        "diffFolder": "./tests/screenshots/diff/"
      }
    
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'sampleformapp',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    allure: {
      enabled: true
    },

      customLocator: {
        enabled: true,
        attribute: 'data-testid'
        // prefix: '=',
      },
      mocha: {
        reporterOptions: {
            reportDir: 'output'
        }
      }
     
  }
}