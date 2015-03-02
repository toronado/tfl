var tubeApp = angular.module('tubeApp', ['ngRoute', 'ngSanitize']);

tubeApp.config(function ($routeProvider) {
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
tubeApp.controller('stationListCtrl', function ($scope, $routeParams, stations) {
    stations.list(function (data) {
        $scope.line = $routeParams.line;
        $scope.stations = data;
    });
});

tubeApp.factory('stations', function ($http) {
    return {
        list : function (callback) {
            $http({
                method: 'GET',
                url: 'json/stations.json',
                cache: true
            }).success(callback)
        }
    }
});


//Get arrival times
tubeApp.factory('arrivals', function ($http) {
    return {
        list : function (line, station, callback) {
            if (!line) line = 'bakerloo,central,circle,district,hammersmith-city,jubilee,metropolitan,northern,piccadilly,victoria,waterloo-city';
            $http({
                method: 'GET',
                url: 'http://api.tfl.gov.uk/Line/%7Bids%7D/Arrivals/?stopPointId=940GZZLU'+station+'&ids='+line
            }).success(callback)
        }
    }
});

tubeApp.controller('arrivalListCtrl', function ($scope, $routeParams, arrivals) {

    //Fetch the data
    arrivals.list($routeParams.line, $routeParams.station, function (data) {
        $scope.arrivals = {
            lineId : $routeParams.station,
            stationName : data[0].stationName.split('Underground')[0],
            data : data
        }
    });

});

//Change seconds to minutes
tubeApp.filter('convertTime', function() {
    return function (input) {
        var mins = Math.floor(input/60);
        if (mins === 0) {
            return 'Now';
        }
        return mins + ' min';
    }
});
