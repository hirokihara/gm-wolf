(function() {
  'use strict';

  describe('Controller: PlayerController', function() {

    beforeEach(module('wolf.components.player'));

    var PlayerController;

    beforeEach(inject(function($controller) {
      PlayerController = $controller('PlayerController');
    }));

    describe('PlayerController', function() {
      it('Test Case', function() {
        PlayerController.activate();
      });
    });
  });
})();
