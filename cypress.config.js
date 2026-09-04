const { defineConfig } = require('cypress');

const setupNodeEvents = async (on, config) => {

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
  e2e: {
    setupNodeEvents,
    chromeWebSecurity: true,
    screenshotOnRunFailure: true,
    viewportWidth: 1920,
    viewportHeight: 1080,
  },
});
