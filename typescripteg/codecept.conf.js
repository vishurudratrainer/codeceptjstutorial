require('ts-node/register')
const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './**_test.ts',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://github.com',
      browser: 'chrome'
    },
    CustomHelper: {
      require: './CustomHelper.ts'
    }
  },
  include: {

    loginPage: './loginPage.ts',
    homePage: './homePage.ts'
  },
  bootstrap: null,
  mocha: {},
  name: 'typescripteg',
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
    }
  }
}