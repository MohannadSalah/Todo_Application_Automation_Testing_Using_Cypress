const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'drrd5p',
  e2e: {
    baseUrl: "https://qacart-todo.herokuapp.com/",
    videoUploadOnPasses : false , 
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

});
