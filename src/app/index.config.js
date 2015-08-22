(function() {
  'use strict';

  angular
    .module('countriesSources')
    .config(config);

  /** @ngInject */
  function config($logProvider, hljsServiceProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    hljsServiceProvider.setOptions({
    // replace tab with 4 spaces
    tabReplace: '    '
  });
  }

})();
