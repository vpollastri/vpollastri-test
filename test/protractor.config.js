const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

const frameworkPath = require.resolve('protractor-cucumber-framework');

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    getPageTimeout: 60000,
    allScriptsTimeout: 50000,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        browserName: 'chrome',
    },

    specs: [
        'features/*.feature'
    ],

    baseUrl: 'https://app.signaturit.com',

    cucumberOpts: {
        require: [
            'features/step_definitions/*.js',
            'support/*.js'
        ],
        format: ['pretty','json:results.json'],
        tags: ['@automatic'],
    }
};
