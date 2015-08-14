(function() {
  'use strict';

  describe('Controller: DayController', function() {

    beforeEach(module('wolf.components.day'));

    var DayController;

    beforeEach(inject(function($controller) {
      DayController = $controller('DayController');
    }));

    describe('DayController', function() {
      it('Test Case', function() {
        DayController.activate();
      });
    });
  });
})();
