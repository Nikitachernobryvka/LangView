import { defineConfig } from 'cypress';

export default defineConfig({
  component: {
    devServer: { framework: 'react', bundler: 'vite' },
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config);
      return config;
    },
    supportFile: 'cypress/support/component.js',
  },
  e2e: {
    baseUrl: "http://localhost:5173",
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config);
      return config;
    },
    supportFile: 'cypress/support/e2e.js',
  },
});