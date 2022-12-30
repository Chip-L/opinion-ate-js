const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: 'bups7t',
  e2e: {
    baseUrl: 'http://localhost:3000',
  },
});
