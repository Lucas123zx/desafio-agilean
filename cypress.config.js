const { defineConfig } = require('cypress');

const setupNodeEvents = async (on, config) => {
  require('cypress-mochawesome-reporter/plugin')(on);

  const enviroment = config.env.version || 'dev';
  const envConfig = config.env[enviroment];

  if (envConfig === undefined) {
    throw new Error('Environment configuration file is missing or empty');
  } else {
    Object.entries(envConfig).forEach(([key, value]) => {
      if (value === '' || value === undefined || value === null) {
        throw new Error(`Environment: ${enviroment}, key: ${key} is empty.`);
      }
      
      console.log(`${key} loaded! successfully!`);
    });
  }

  config.expose = {
    ...envConfig
  };

  return config;
};

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Relatório - Gerenciado de Atividades',
    embeddedScreenshots: true,
    overwrite: true,
    inlineAssets: true,
    saveAllAttempts: true,
  },
  e2e: {
    setupNodeEvents,
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
    chromeWebSecurity: true,
    screenshotOnRunFailure: true,
    viewportWidth: 1920,
    viewportHeight: 1080,
    requestTimeout: 10000,
    pageLoadTimeout: 10000,
    taskTimeout: 10000,
    defaultCommandTimeout: 10000,
    watchForFileChanges: false
  },
});
