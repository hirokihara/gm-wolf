(function() {
  'use strict';

  describe('Controller: JobController', function() {

    beforeEach(module('wolf.components.job'));

    var JobController;

    beforeEach(inject(function($controller) {
      JobController = $controller('JobController');
    }));

    describe('JobController', function() {
      it('Test Case', function() {
        JobController.activate();
      });
    });
  });
})();
