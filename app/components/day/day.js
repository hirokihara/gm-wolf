/**
 * Day Components module.
 *
 * @module wolf.components.day
 */
(function () {
  'use strict';

  angular
    .module('wolf.components.day', [])
    .controller('DayController', DayController);

  DayController.$inject = [];

  /**
   * DayController
   *
   * @class DayController
   * @constructor
   */
  function DayController() {
    console.log('DayController Constructor');
    this.storage = sessionStorage;
  }

  /**
   * The controller activate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method activate
   */
  DayController.prototype.activate = function() {
    console.log('DayController activate Method');
    vm = this;
    vm.players = JSON.parse(this.storage.getItem('wolf.players'));
  };

  /**
   * Angular ViewModel
   *
   * @property vm
   * @type {Object}
   */
  var vm;
})();
