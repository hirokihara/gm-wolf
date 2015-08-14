(function() {
  'use strict';

  describe('Controller: ResultController', function() {

    beforeEach(module('wolf.components.result'));

    var ResultController;

    beforeEach(inject(function($controller) {
      ResultController = $controller('ResultController');
    }));

    describe('ResultController', function() {
      it('Test Case', function() {
        ResultController.activate();
      });
    });
  });
})();
