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

  DayController.$inject = ['$routeParams'];

  /**
   * DayController
   *
   * @class DayController
   * @constructor
   */
  function DayController($routeParams) {
    console.log('DayController Constructor');
    this.storage = localStorage;
    this.nightExpulsionName = $routeParams.name;
    this.guard = false;
    if (this.nightExpulsionName === '**') {
      this.guard = true;
    }
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
    vm.dayExpulsionName = '**';
    vm.dayExpulsionType = '人間';
    window.scrollTo(0, 0)
  };

  DayController.prototype.expulsion = function(index) {
    console.log('PlayerController expulsion Method ', index);
    vm.players[index].alive = !vm.players[index].alive;
    vm.dayExpulsionName = vm.players[index].name;
    if (vm.players[index].job === '人　狼') {
      vm.dayExpulsionType = '人狼';
    }
    for (var i = vm.players.length - 1; i >= 0; i--) {
      if (i !== index) {
        vm.players[i].alive = true;
      }
    }
  };

  DayController.prototype.goodNight = function() {
    console.log('PlayerController goodNight Method');
    for (var i = vm.players.length - 1; i >= 0; i--) {
      if (!vm.players[i].alive) {
        vm.players.splice(i, 1);
      }
    }

    this.storage.removeItem('wolf.players');
    this.storage.setItem('wolf.players', JSON.stringify(vm.players));

    // 残り人数取得
    var wolfCount = 0;
    var humanCount = 0;
    for (var l = vm.players.length - 1; l >= 0; l--) {
      if (vm.players[l].job === '人　狼') {
        wolfCount++;
      } else {
        humanCount++;
      }
    }

    // 結果判定
    if (wolfCount === 0) {
      window.location.href = '#/result/人間';
    } else {
      if (wolfCount >= humanCount) {
        window.location.href = '#/result/人狼';
      } else {
        window.location.href = '#/night/' + vm.dayExpulsionType + '';
      }
    }
  };
  /**
   * Angular ViewModel
   *
   * @property vm
   * @type {Object}
   */
  var vm;
})();
