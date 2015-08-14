/**
 * Player Components module.
 *
 * @module wolf.components.player
 */
(function () {
  'use strict';

  angular
    .module('wolf.components.player', [])
    .controller('PlayerController', PlayerController);

  PlayerController.$inject = [];

  /**
   * PlayerController
   *
   * @class PlayerController
   * @constructor
   */
  function PlayerController() {
    console.log('PlayerController Constructor');
    this.storage = sessionStorage;
  }

  /**
   * The controller activate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method activate
   */
  PlayerController.prototype.activate = function() {
    console.log('PlayerController activate Method');
    vm = this;
    vm.players = [];

    // sessionStorageにプレイヤー情報があれば表示する
    if (this.storage.getItem('wolf.players')) {
      vm.players = JSON.parse(this.storage.getItem('wolf.players'));
    }
    // this.storage.removeItem('players');
  };

  PlayerController.prototype.remove = function() {
    console.log('PlayerController remove Method');
    // vm.players.splice(index, 1);
  };

  PlayerController.prototype.add = function() {
    console.log('PlayerController add Method');
    var newPlayer = {
      name: '',
      job: '市民',
      alive: true
    };
    vm.players.push(newPlayer);
  };

  PlayerController.prototype.gotoAssign = function() {
    console.log('PlayerController gotoAssign Method');
    this.storage.setItem('wolf.players', JSON.stringify(vm.players));
    this.storage.setItem('test', 'hoge');
    window.location.href = '/assign';
  };

  // PlayerController.prototype.setstorage = function() {
  //   console.log('PlayerController setstorage Method');
  //   this.storage.setItem('players', JSON.stringify(vm.players));
  //   this.storage.setItem('test', 'hoge');
  // };

  // PlayerController.prototype.getstorage = function() {
  //   console.log('PlayerController getstorage Method');

  //   var players1 = JSON.parse(this.storage.getItem('players'));
  //   console.log(players1[0].name);
  //   console.log(this.storage.getItem('test'));
  // };

  /**
   * Angular ViewModel
   *
   * @property vm
   * @type {Object}
   */
  var vm;
})();
