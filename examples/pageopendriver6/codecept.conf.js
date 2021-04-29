exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Protractor: {
      url: 'http://localhost',
      driver: 'hosted',
      browser: 'chrome',
      rootElement: 'body',
      angular: false
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'pageopendriver6',
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