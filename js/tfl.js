var tubeApp = angular.module('tubeApp', ['ngRoute', 'ngSanitize']);

tubeApp.config(function ($routeProvider){
    $routeProvider.
        when('/', {
            templateUrl: 'templates/station-list.html',
            controller: 'stationListCtrl'
        }).
        when('/arrivals/', {
            templateUrl: 'templates/arrival-list.html',
            controller: 'arrivalListCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
});

tubeApp.controller('stationListCtrl', function ($scope, $routeParams, stations){
    stations.list(function (data) {
        var i, stationsOnLine, totalStations;
        totalStations = data.length;
        stationsOnLine = [];
        $scope.lineName = $routeParams.line;
        if ($routeParams.line === 'all') {
            $scope.stations = data;
            return;
        }
        for (i=0; i<totalStations; i++) {
            if (data[i].lines[$routeParams.line]) {
                stationsOnLine.push(data[i]);
            }
        }
        $scope.stations = stationsOnLine;
    });
});

tubeApp.factory('stations', function ($http) {
    return {
        list : function (callback) {
            $http({
                method: 'GET',
                url: 'json/stations2.json',
                cache: true
            }).success(callback)
        }
    }
});

tubeApp.factory('arrivals', function ($http) {
    return {
        station : '',
        line : '',
        list : function (callback) {
            $http({
                method: 'GET',
                url: 'http://api.tfl.gov.uk/Line/%7Bids%7D/Arrivals?app_id=3a9a79b8&app_key=028f9bbc54baa89d77c46b9b2b5ba833&stopPointId=940GZZLU'+this.station+'&ids='+this.line
            }).success(callback)
        }
    }
});

tubeApp.controller('arrivalListCtrl', function ($scope, $routeParams, arrivals){
    arrivals.station = $routeParams.station;
    arrivals.line = $routeParams.line;
    arrivals.list(function (data){
        $scope.station = $routeParams.station + ' - ' + data[0].stationName.split('Underground')[0];;
        $scope.arrivals = data;
    });
});


tubeApp.filter('convertTime', function() {
    return function(input) {
        return Math.round(input/60);
    }
});
