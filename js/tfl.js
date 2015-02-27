var tubeLines = ['bakerloo', 'central', 'circle', 'district', 'ammersmith-city', 'jubilee', 'metropolitan', 'northern', 'piccadilly', 'victoria', 'waterloo-city'];
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


//Get the list of stations
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


//Get arrival times
tubeApp.factory('arrivals', function ($http) {
    return {
        station : '',
        line : '',
        list : function (callback) {
            $http({
                method: 'GET',
                url: 'http://api.tfl.gov.uk/Line/%7Bids%7D/Arrivals/?stopPointId=940GZZLU'+this.station+'&ids='+tubeLines.join()
            }).success(callback)
        }
    }
});

tubeApp.controller('arrivalListCtrl', function ($scope, $routeParams, arrivals) {
    var inbound, outbound, prop;
    arrivals.station = $routeParams.station;
    arrivals.line = $routeParams.line;
    arrivalsObj = {
        inbound : [],
        outbound : []
    }
    arrivals.list(function (data){
        for (var i=0; i<data.length; i++) {
            if (data[i].direction === 'inbound') {
                arrivalsObj.inbound.push(data[i]);
            } else {
                arrivalsObj.outbound.push(data[i]);
            }
        }
        $scope.station = data[0].stationName.split('Underground')[0];;
        $scope.inbound = arrivalsObj.inbound;
        $scope.outbound = arrivalsObj.outbound;
    });
});

//Change seconds to minutes
tubeApp.filter('convertTime', function() {
    return function(input) {
        var mins = Math.floor(input/60);
        if (mins === 0) {
            return 'Now'
        }
        return mins + ' min';
    }
});
