// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/docs/referenceConf.js

/*global jasmine */
var SpecReporter = require('jasmine-spec-reporter');

var config = {
    allScriptsTimeout: 11000,
    specs: [
        '../e2e/**/*.e2e-spec.ts'
    ],
    capabilities: {
        'browserName': 'chrome'
    },
    directConnect: true,
    baseUrl: 'http://localhost:4200/',
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        print: function() {
        }
    },
    useAllAngular2AppRoots: true,
    beforeLaunch: function() {
        require('ts-node').register({
            project: 'e2e'
        });
    },
    onPrepare: function() {
        jasmine.getEnv().addReporter(new SpecReporter());
    }
};


if (process.env.TRAVIS) {
    console.log("BUILDING ON TRAVIS");
    config.sauceUser = process.env.SAUCE_USERNAME;
    config.sauceKey = process.env.SAUCE_ACCESS_KEY;
    config.capabilities = {
        'browserName': 'chrome',
        'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
        'build': process.env.TRAVIS_BUILD_NUMBER
    };
}

exports.config = config;