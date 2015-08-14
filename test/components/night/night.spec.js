(function() {
  'use strict';

  describe('Controller: NightController', function() {

    beforeEach(module('wolf.components.night'));

    var NightController;

    beforeEach(inject(function($controller) {
      NightController = $controller('NightController');
    }));

    describe('NightController', function() {
      it('Test Case', function() {
        NightController.activate();
      });
    });
  });
})();
