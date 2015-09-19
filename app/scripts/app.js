'use strict';

/**
 * @ngdoc overview
 * @name countriesSourcesApp
 * @description
 * # countriesSourcesApp
 *
 * Main module of the application.
 */
angular
  .module('countriesArrayApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'hljs'
  ])
  .config(function ($routeProvider, hljsServiceProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });

    hljsServiceProvider.setOptions({
      // replace tab with 4 spaces
      tabReplace: '    '
    });
  });
