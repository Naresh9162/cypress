const { defineConfig } = require('cypress')

module.exports = defineConfig({
  defaultCommandTimeout: 15000,
  pageLoadTimeout: 15000,
  watchForFileChanges: true,
  chromeWebSecurity: false,
  trashAssetsBeforeRuns: true,
  screenshotsFolder: 'cypress/results/screenshots',
  video: true,
  videoUploadOnPasses: false,
  videoCompression: false,
  videosFolder: 'cypress/results/videos',
  reporter: 'mochawesome',
  reporterOptions: {
    reportFilename: 'finalhtmlreport',
    reportDir: 'cypress/results/reports',
    overwrite: false,
    html: true,
    json: true,
    charts: true,
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://10.71.36.97',
  },
})
