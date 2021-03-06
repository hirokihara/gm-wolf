/**
 * This is wolf module.
 *
 * @module wolf
 */
(function () {
  'use strict';

  angular
    .module('wolf', [
      'ngNewRouter',
      'ngTouch',
      'wolf.config',
      'wolf.mydirective',
      'wolf.components.register',
      'wolf.components.assign',
      'wolf.components.day',
      'wolf.components.night',
      'wolf.components.result'
    ])
    .controller('AppController', AppController);

  AppController.$routeConfig = [
    {path: '/',       redirectTo: '/register'},
    {path: '/register', component: 'register'},
    {path: '/assign', component: 'assign'},
    {path: '/day/:name', component: 'day'},
    {path: '/day', component: 'day'},
    {path: '/night/:type', component: 'night'},
    {path: '/night', component: 'night'},
    {path: '/result/:winner', component: 'result'}
  ];

  AppController.$inject = [];

  /**
   * AppController
   *
   * @class AppController
   * @main wolf
   * @constructor
   */
  function AppController () {}
})();
