(function() {
  'use strict';

  angular
    .module('countriesSources')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, languages) {
    var vm = this;

    // vm.awesomeThings = [];
    // vm.classAnimation = '';
    $scope.creationDate = 1440193879925;
    // vm.showToastr = showToastr;

    $scope.languages = languages.getLanguages();

    function selectLanguage (language) {

      if (language) {

        languages.renderLanguage(language.code).then(function (code) {

          console.log('Apply template to text area');

          $scope.code = code;

        });

      }

    };

    // $scope.selectLanguage($scope.languages.js);

    $scope.$watch('currentLanguage', function (language) {
      console.log("seleziono ", language);

      selectLanguage(language);

    });

    // function activate() {
    //   getWebDevTec();
    //   $timeout(function() {
    //     vm.classAnimation = 'rubberBand';
    //   }, 4000);
    // }
    //
    // function showToastr() {
    //   toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
    //   vm.classAnimation = '';
    // }
    //
    // function getWebDevTec() {
    //   vm.awesomeThings = webDevTec.getTec();
    //
    //   angular.forEach(vm.awesomeThings, function(awesomeThing) {
    //     awesomeThing.rank = Math.random();
    //   });
    // }
  }
})();
