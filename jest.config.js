const path = require('path');
module.exports = {
    // testEnvironment: 'jest-environment-node',
    testEnvironment: 'jest-environment-jsdom',
      moduleNameMapper: {
        '\\.css': require.resolve('./style-mock.js'), 
    },
    moduleDirectories: [
        'node_modules', path.join(__dirname, 'src'), path.join(__dirname, 'test'),
    ],
};
    