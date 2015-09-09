'use strict';

/**
 * @ngdoc function
 * @name countriesSourcesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the countriesSourcesApp
 */
angular.module('countriesArrayApp')
  .controller('MainCtrl', function ($scope, languages) {
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
  });
