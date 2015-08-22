(function() {
  'use strict';

  angular
    .module('countriesSources')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
