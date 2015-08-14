(function() {
  'use strict';

  describe('Controller: RegisterController', function() {

    beforeEach(module('wolf.components.register'));

    var RegisterController;

    beforeEach(inject(function($controller) {
      RegisterController = $controller('RegisterController');
    }));

    describe('RegisterController', function() {
      it('Test Case', function() {
        RegisterController.activate();
      });
    });
  });
})();
