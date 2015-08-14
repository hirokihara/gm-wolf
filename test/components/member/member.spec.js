(function() {
  'use strict';

  describe('Controller: MemberController', function() {

    beforeEach(module('wolf.components.member'));

    var MemberController;

    beforeEach(inject(function($controller) {
      MemberController = $controller('MemberController');
    }));

    describe('MemberController', function() {
      it('Test Case', function() {
        MemberController.activate();
      });
    });
  });
})();
