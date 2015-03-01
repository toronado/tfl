var tubeLines = [
    'bakerloo',
    'central',
    'circle',
    'hammersmith-city',
    'jubilee',
    'metropolitan',
    'northern',
    'piccadilly',
    'victoria',
    'waterloo-city'
];

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
        if ($routeParams.line) {
            var i, stations, totalStations;
            totalStations = data.length;
            stations = [];
            for (i=0; i<totalStations; i++) {
                if (data[i].lines[$routeParams.line]) {
                    stations.push(data[i]);
                }
            }
            $scope.lineName = $routeParams.line;
            $scope.stations = stations;
        } else {
            $scope.lineName = '';
            $scope.stations = data;
        }
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
        stationId : null,
        line : null,
        list : function (callback) {
            $http({
                method: 'GET',
                url: 'http://api.tfl.gov.uk/Line/%7Bids%7D/Arrivals/?stopPointId=940GZZLU'+this.stationId+'&ids='+this.line
            }).success(callback)
        }
    }
});

tubeApp.controller('arrivalListCtrl', function ($scope, $routeParams, arrivals) {

    //Set arrivals factory query parameters
    arrivals.stationId = $routeParams.station;
    if ($routeParams.line) {
        arrivals.line = $routeParams.line;
    } else {
        arrivals.line = tubeLines.join();
    }

    //Fetch the data
    arrivals.list(function (data){
        if (data.length === 0) return null;
        var trains, total, i;
        trains = {
            lineName : data[0].lineName,
            lineId : $routeParams.station,
            stationName : data[0].stationName.split('Underground')[0],
            inbound : {
                platform : 'Inbound',
                trains : []
            },
            outbound : {
                platform : 'Outbound',
                trains : []
            }
        }
        total = data.length;
        for (i=0; i<total; i++) {
            if (data[i].direction === 'inbound') {
                trains.inbound.trains.push(data[i]);
            } else {
                trains.outbound.trains.push(data[i]);
            }
        }
        $scope.arrivals = trains;
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

tubeApp.filter('trimStr', function() {
    return function (input) {
        return input.charAt(0);
    }
});
