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

    $scope.creationDate = 1440193879925;
    $scope.languages = languages.getLanguages();

    function selectLanguage (language) {

      if (language) {

        languages.renderLanguage(language.code).then(function (code) {

          $scope.ll = language.language;
          $scope.code = code;

        });

      }

    }

    $scope.ll = 'js';

    $scope.$watch('currentLanguage', function (language) {
      selectLanguage(language);
    });

    selectLanguage($scope.languages.jsa);
  });
