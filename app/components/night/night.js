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

  NightController.$inject = ['$routeParams'];

  /**
   * NightController
   *
   * @class NightController
   * @constructor
   */
  function NightController($routeParams) {
    console.log('NightController Constructor');
    this.storage = localStorage;
    vm = this;
    vm.players = JSON.parse(this.storage.getItem('wolf.players'));
    this.dayExpulsionType = $routeParams.type;
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
    vm.nightExpulsionName = '**';
  };

  NightController.prototype.expulsion = function(index) {
    console.log('PlayerController expulsion Method ', index);
    vm.players[index].alive = !vm.players[index].alive;
    vm.nightExpulsionName = vm.players[index].name;

    for (var i = vm.players.length - 1; i >= 0; i--) {
      if (i !== index) {
        vm.players[i].alive = true;
      }
    }
  };

  NightController.prototype.gotoDay = function() {
    console.log('PlayerController goodNight Method');
    var expulsion = '**';
    this.storage.removeItem('wolf.assign-players');
    this.storage.setItem('wolf.assign-players', JSON.stringify(vm.players));
    for (var i = vm.players.length - 1; i >= 0; i--) {
      if (!vm.players[i].alive) {
        expulsion = vm.players[i].name;
        vm.players.splice(i, 1);
      }
    }

    this.storage.removeItem('wolf.players');
    this.storage.setItem('wolf.players', JSON.stringify(vm.players));
    window.location.href = '/day/' + expulsion + '';
  };
  /**
   * Angular ViewModel
   *
   * @property vm
   * @type {Object}
   */
  var vm;
})();
