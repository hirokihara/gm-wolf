/**
 * Register Components module.
 *
 * @module wolf.components.register
 */
(function () {
  'use strict';

  angular
    .module('wolf.components.register', [])
    .controller('RegisterController', RegisterController);

  RegisterController.$inject = [];

  /**
   * RegisterController
   *
   * @class RegisterController
   * @constructor
   */
  function RegisterController() {
    console.log('RegisterController Constructor');
    this.storage = localStorage;
  }

  /**
   * The controller activate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method activate
   */
  RegisterController.prototype.activate = function() {
    console.log('RegisterController activate Method');
    vm = this;
    vm.players = [];

    // sessionStorageにプレイヤー情報があれば表示する
    if (this.storage.getItem('wolf.initial-players')) {
      vm.players = JSON.parse(this.storage.getItem('wolf.initial-players'));
    }
  };

  RegisterController.prototype.remove = function(index) {
    console.log('RegisterController remove Method');
    vm.players.splice(index, 1);
  };

  RegisterController.prototype.add = function() {
    console.log('RegisterController add Method');
    var newPlayer = {
      name: '',
      job: '市　民',
      alive: true
    };
    vm.players.push(newPlayer);
  };

  RegisterController.prototype.gotoAssign = function() {
    console.log('RegisterController gotoAssign Method');
    this.storage.removeItem('wolf.initial-players');
    this.storage.setItem('wolf.initial-players', JSON.stringify(vm.players));
    this.storage.removeItem('wolf.players');
    this.storage.setItem('wolf.players', JSON.stringify(vm.players));
    window.location.href = '/assign';
  };

  /**
   * Angular ViewModel
   *
   * @property vm
   * @type {Object}
   */
  var vm;
})();
