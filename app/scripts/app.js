'use strict';

angular
  .module('crtoolsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/repo/:name', {
        templateUrl: 'views/log.html',
        controller: 'SVNLogCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
