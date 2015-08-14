/**
 * Result Components module.
 *
 * @module wolf.components.result
 */
(function () {
  'use strict';

  angular
    .module('wolf.components.result', [])
    .controller('ResultController', ResultController);

  ResultController.$inject = [];

  /**
   * ResultController
   *
   * @class ResultController
   * @constructor
   */
  function ResultController() {
    console.log('ResultController Constructor');
  }

  /**
   * The controller activate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method activate
   */
  ResultController.prototype.activate = function() {
    console.log('ResultController activate Method');
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
