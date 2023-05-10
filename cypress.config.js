const { defineConfig } = require("cypress");
const  allureWriter  =  require ( '@shelex/cypress-allure-plugin/writer' ) ; 



module.exports = defineConfig({
  e2e: {

    baseUrl: "https://automation-sandbox-python-mpywqjbdza-uc.a.run.app/",
    viewportWidth: 1440,
    viewportHeight: 900,
    video: false,


    setupNodeEvents(on, config) {
      allureWriter ( on ,  config ) ; 
      return  config ; 
    },
  },
});
