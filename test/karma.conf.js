// Karma configuration
// Generated on Mon Apr 20 2015 20:03:02 GMT+0900 (JST)
'use strict';

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    //frameworks: ['mocha','chai','sinon'],
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      // bower:js
      'bower_components/jquery/dist/jquery.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-new-router/dist/router.es5.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-touch/angular-touch.js',
      'bower_components/angular-mocks/angular-mocks.js',
      // endbower
      // injector:js
      'app/components/assign/assign.js',
      'app/components/day/day.js',
      'app/components/night/night.js',
      'app/components/register/register.js',
      'app/components/result/result.js',
      'app/directives/mydirective.js',
      'app/scripts/config.js',
      'app/service/gruntfiles/gruntfiles.js',
      'test/components/about/about.spec.js',
      'test/components/assign/assign.spec.js',
      'test/components/contact/contact.spec.js',
      'test/components/day/day.spec.js',
      'test/components/home/home.spec.js',
      'test/components/job/job.spec.js',
      'test/components/member/member.spec.js',
      'test/components/night/night.spec.js',
      'test/components/player/player.spec.js',
      'test/components/register/register.spec.js',
      'test/components/result/result.spec.js',
      'test/main.spec.js',
      'test/service/gruntfiles/gruntfiles.mock.js',
      'test/service/gruntfiles/gruntfiles.spec.js',
      // endinjector
      'app/scripts/main.js',
      'test/main.spec.js'
    ],

    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'app/**/*.js': ['coverage']
    },

    coverageReporter: {
      type : 'html',
      dir : 'report',
      subdir: 'coverage'
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
