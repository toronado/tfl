var tubeLines = ['bakerloo','central','circle','district','hammersmith-city','jubilee','metropolitan','northern','piccadilly','victoria','waterloo-city'];
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
        $scope.line = $routeParams.line;
        $scope.stations = data;
    });
});

tubeApp.controller('arrivalListCtrl', function ($scope, $routeParams, appData) {

    var params = {
        stopPointId : '940GZZLU' + $routeParams.station,
        ids : $routeParams.line || tubeLines.join()
    };
    appData.fetch('arrivals', params, false, function (data) {
        if (data.length === 0) {
            return null;
        }
        $scope.arrivals = {
            total : data.length,
            lineId : $routeParams.station,
            stationName : data[0].stationName.split('Underground')[0],
            data : data
        };
        //console.log($scope.arrivals);
    });
});

tubeApp.filter('arrToStr', function () {
    return function (input) {
        return input.join();
    };
});

//Change seconds to minutes
tubeApp.filter('convertTime', function () {
    return function (input) {
        var mins = Math.floor(input / 60);
        if (mins === 0) {
            return 'Now';
        }
        return mins + ' min';
    };
});
