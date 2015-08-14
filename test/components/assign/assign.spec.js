(function() {
  'use strict';

  describe('Controller: AssignController', function() {

    beforeEach(module('wolf.components.assign'));

    var AssignController;

    beforeEach(inject(function($controller) {
      AssignController = $controller('AssignController');
    }));

    describe('AssignController', function() {
      it('Test Case', function() {
        AssignController.activate();
      });
    });
  });
})();
