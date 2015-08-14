/**
 * Member Components module.
 *
 * @module wolf.components.member
 */
(function () {
  'use strict';

  angular
    .module('wolf.components.member', [])
    .controller('MemberController', MemberController);

  MemberController.$inject = [];

  /**
   * MemberController
   *
   * @class MemberController
   * @constructor
   */
  function MemberController() {
    console.log('MemberController Constructor');
  }

  /**
   * The controller activate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method activate
   */
  MemberController.prototype.activate = function() {
    console.log('MemberController activate Method');
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
