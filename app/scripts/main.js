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
      'wolf.config',
      'wolf.components.home',
      'wolf.components.about',
      'wolf.components.contact',
      'wolf.components.register',
      'wolf.components.assign',
      'wolf.components.day'
    ])
    .controller('AppController', AppController);

  AppController.$routeConfig = [
    {path: '/',       redirectTo: '/home'},
    {path: '/home',    component: 'home'},
    {path: '/about',   component: 'about'},
    {path: '/contact', component: 'contact'},
    {path: '/register', component: 'register'},
    {path: '/assign', component: 'assign'},
    {path: '/day', component: 'day'},
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
