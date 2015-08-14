/**
 * Night Components module.
 *
 * @module wolf.components.night
 */
(function () {
  'use strict';

  angular
    .module('wolf.components.night', [])
    .controller('NightController', NightController);

  NightController.$inject = [];

  /**
   * NightController
   *
   * @class NightController
   * @constructor
   */
  function NightController() {
    console.log('NightController Constructor');
  }

  /**
   * The controller activate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method activate
   */
  NightController.prototype.activate = function() {
    console.log('NightController activate Method');
    vm = this;
  };

  /**
   * Angular ViewModel
   *
   * @property vm
   * @type {Object}
   */
  var vm;
})();
