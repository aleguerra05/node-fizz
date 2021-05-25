module.exports = {
      // Automatically clear mock calls and instances between every test
    clearMocks: true,
    
    // Use this configuration option to add custom reporters to Jest
    reporters: [
      'default',
      './dist/index.js'
    ],
  
    testEnvironment: "node",
  };