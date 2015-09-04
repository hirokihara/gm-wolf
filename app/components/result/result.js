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

  ResultController.$inject = ['$routeParams'];

  /**
   * ResultController
   *
   * @class ResultController
   * @constructor
   */
  function ResultController($routeParams) {
    console.log('ResultController Constructor');
    this.storage = localStorage;
    this.winner = $routeParams.winner;
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
    vm.players = JSON.parse(this.storage.getItem('wolf.assign-players'));
    window.scrollTo(0, 0)
  };

  ResultController.prototype.gameOver = function() {
    console.log('ResultController gameOver Method');
    this.storage.removeItem('wolf.players');
    this.storage.removeItem('wolf.assign-players');
    window.location.href = '#/register';
  };
  /**
   * Angular ViewModel
   *
   * @property vm
   * @type {Object}
   */
  var vm;
})();
