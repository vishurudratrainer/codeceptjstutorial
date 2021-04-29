exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://localhost',
      show: true,
      browser: 'chromium'
    },
	MockRequestHelper: {
     require: '@codeceptjs/mock-request',
     mode: 'record',
     recordIfMissing: true,
     recordFailedRequests: false,
     expiresIn: null,
     persisterOptions: {
       keepUnusedRequests: false,
       fs: {
         recordingsDir: './data/requests',
       },
    },
  }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'githubeg',
  plugins: {
	stepByStepReport: {
     enabled: true,
	 deleteSuccessful:false
   },
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