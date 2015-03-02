var tubeLines = [
    'bakerloo',
    'central',
    'circle',
    'district',
    'hammersmith-city',
    'jubilee',
    'metropolitan',
    'northern',
    'piccadilly',
    'victoria',
    'waterloo-city'
];

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
        var lineObj = {
            name : '',
            stations : []
        };
        if ($routeParams.line) {
            var i, arrLen;
            arrLen = data.length;
            lineObj.name = $routeParams.line;
            for (i=0; i<arrLen; i++) {
                if (data[i].lines[$routeParams.line]) {
                    lineObj.stations.push(data[i]);
                }
            }
        } else {
            lineObj.stations = data;
        }
        $scope.line = lineObj;
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
        var arrLen = data.length;
        if (arrLen === 0) return null;

        var arrivalObj, i;
        arrivalObj = {
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

        for (i=0; i<arrLen; i++) {
            if (data[i].direction === 'inbound') {
                arrivalObj.inbound.trains.push(data[i]);
            } else {
                arrivalObj.outbound.trains.push(data[i]);
            }
        }
        $scope.arrivals = arrivalObj;
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
