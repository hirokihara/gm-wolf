/**
 * Job Components module.
 *
 * @module wolf.components.job
 */
(function () {
  'use strict';

  angular
    .module('wolf.components.job', [])
    .controller('JobController', JobController);

  JobController.$inject = [];

  /**
   * JobController
   *
   * @class JobController
   * @constructor
   */
  function JobController() {
    console.log('JobController Constructor');
  }

  /**
   * The controller activate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method activate
   */
  JobController.prototype.activate = function() {
    console.log('JobController activate Method');
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
