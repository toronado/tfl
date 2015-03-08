var tubeApp = angular.module('tubeApp', ['ngRoute', 'ngSanitize']);

tubeApp.config(function ($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'templates/station-list.html',
            controller: 'stationListCtrl'
        }).
        when('/:sid/:line?/', {
            templateUrl: 'templates/arrival-list.html',
            controller: 'arrivalListCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
});

tubeApp.factory('appData', function ($http) {
    return {
        urls : {
            stations : 'json/stations.json',
            arrivals : 'http://api.tfl.gov.uk/Line/%7Bids%7D/Arrivals'
        },
        fetch : function (url, params, cache, callback) {
            $http({
                method: 'GET',
                url: this.urls[url],
                cache: cache,
                params: params
            }).success(callback);
        }
    };
});

//Get the list of stations
tubeApp.controller('stationListCtrl', function ($scope, $routeParams, appData) {
    appData.fetch('stations', '', true, function (data) {
        $scope.stations = data;
    });
});

tubeApp.controller('arrivalListCtrl', function ($scope, $routeParams, appData) {
    appData.fetch('stations', '', true, function (data){
        var i;
        for (i = 0; i < 270; i++) {
            if (data[i].id === $routeParams.sid) {
                return $scope.station = data[i];
            }
        }
    });
    var params = {
        stopPointId : '940GZZLU' + $routeParams.sid,
        ids : $routeParams.line || 'bakerloo,central,circle,district,hammersmith-city,jubilee,metropolitan,northern,piccadilly,victoria,waterloo-city'
    };
    appData.fetch('arrivals', params, false, function (data) {
        $scope.arrivals = {
            filters : {},
            data : data
        };
    });
});

//Change seconds to minutes
tubeApp.filter('convertTime', function () {
    return function (input) {
        var mins = Math.floor(input / 60);
        if (mins) {
            return mins + ' min';
        }
        return 'Now';
    };
});
