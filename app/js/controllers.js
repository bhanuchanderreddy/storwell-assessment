'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('ContactListCtrl', function($scope, $http) {
		 $http.get('jsondata/data.json').success(function(data) {
    $scope.contacts = data;
  });
	
  });
  