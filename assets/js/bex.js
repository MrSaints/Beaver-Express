'use strict';

var tpl = 'tpl/';
var lse_library_loans = 'https://moodle.lse.ac.uk/blocks/lswt/loans.php';
var lse_library_renew = 'https://moodle.lse.ac.uk/blocks/lswt/renew.php';
var lse_library_search = 'http://lse.summon.serialssolutions.com/search';
var self;
var i = 0;
var subi = 0;

// Bootstrap
angular.module('beaver', ['ngRoute', 'ngResource'])
		// Routes
		.config(function ($routeProvider) {
			$routeProvider
				.when('/', { controller: IndexCtrl, templateUrl: tpl + 'index.html' })
				.when('/search', { controller: SearchCtrl, templateUrl: tpl + 'search.html' })
				.otherwise({redirectTo:'/'});
		})
		.factory('Loans', function ($resource) {
			return $resource(lse_library_loans);
		})
		.factory('RenewLoans', function ($resource) {
			return $resource(lse_library_renew);
		})
		.factory('Search', function ($resource) {
			return $resource(lse_library_search, {
				'format': 'json',
				's.hl': false
			});
		});

// Debug
var log = function (data) {
	console.log(data);
}

// Controllers
function IndexCtrl ($scope, Loans, RenewLoans)
{
	self = this;
	self.fetch = function (callback) {
		Loans.get(function (data) {
			return callback(data);
		});
	}

	self.build = function (data) {
		if (!data.summary) return false;

		$scope.authenticated = true;
		$scope.summary = data.summary;
		$scope.items = data.items;

		if (parseFloat(data.balance) > 0) $scope.fines = data.balance;

		return true;
	}

	self.renew = function (callback) {
		RenewLoans.get(function (data) {
			return callback(data);
		});
	}

	self.rebuild = function (data) {
		for (i = 0; i < data.items.length; i++) {
			for (subi = 0; subi < $scope.items.length; subi++) {
				if (data.items[i].bibid == $scope.items[subi].bibid) {
					if (data.items[i].wasRenewed)
						$scope.items[subi].dueDate.status = 'Renewed';
					else
						$scope.items[subi].dueDate.status = 'Not Renewed';

					$scope.items[subi].dueDate['DD-MM-YY'] = data.items[i].dueDate['DD-MM-YY'];
					$scope.items[subi].dueDate['HH:MM'] = data.items[i].dueDate['HH:MM'];
				}
			}
		}
	}

	$scope.authenticated = false;

	$scope.renew = function () {
		return self.renew(self.rebuild);
	}

	self.fetch(self.build);
}

// TODO
function SearchCtrl ($scope, Search) {
	self = this;

	self.fetch = function (query, callback) {
		Search.get({ 's.q': query || '' }, function (data) {
			return callback(data);
		});
	}

	self.build = function (data) {
		log(data);
		$scope.documents = data.documents;
	}

	$scope.search = function () {
		self.fetch($scope.query, self.build);
	}
}