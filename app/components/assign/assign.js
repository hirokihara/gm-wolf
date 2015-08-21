/**
 * Assign Components module.
 *
 * @module wolf.components.assign
 */
(function () {
  'use strict';

  angular
    .module('wolf.components.assign', [])
    .controller('AssignController', AssignController);

  AssignController.$inject = [];

  /**
   * AssignController
   *
   * @class AssignController
   * @constructor
   */
  function AssignController() {
    console.log('AssignController Constructor');
    this.storage = localStorage;
  }

  /**
   * The controller activate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method activate
   */
  AssignController.prototype.activate = function() {
    console.log('AssignController activate Method');
    vm = this;
    vm.players = JSON.parse(this.storage.getItem('wolf.players'));
    // vm.jobCycle = {'市民':'人狼', '人狼':'予言者', '予言者':'霊媒師', '霊媒師':'ボディーガード', 'ボディーガード':'裏切り者', '裏切り者':'市民'};
    vm.jobCycle = {'市　民':'人　狼', '人　狼':'予言者', '予言者':'霊媒師', '霊媒師':'ボディ', 'ボディ':'裏切り', '裏切り':'市　民'};
  };

  AssignController.prototype.changeJob = function(index) {
    console.log('PlayerController changeJob Method ', index);
    var currentJob = vm.players[index].job;
    vm.players[index].job = vm.jobCycle[currentJob];
  };

  AssignController.prototype.backtoRegister = function() {
    console.log('PlayerController backtoRegister Method');
    this.storage.removeItem('wolf.players');
    this.storage.setItem('wolf.players', JSON.stringify(vm.players));
    window.location.href = '/register';
  };

  AssignController.prototype.gotoDay = function() {
    console.log('PlayerController gotoDay Method');
    this.storage.removeItem('wolf.assign-players');
    this.storage.setItem('wolf.assign-players', JSON.stringify(vm.players));
    this.storage.removeItem('wolf.players');
    this.storage.setItem('wolf.players', JSON.stringify(vm.players));
    window.location.href = '/day';
  };

  /**
   * Angular ViewModel
   *
   * @property vm
   * @type {Object}
   */
  var vm;
})();
