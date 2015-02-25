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

tubeApp.controller('stationListCtrl', function ($scope, $routeParams, dataFetch){
    dataFetch.query.line = $routeParams.line;
    dataFetch.list('stations', function (data) {
        if (!data) return;
        $scope.totalStations = data.line.stops;
        $scope.lineName = data.line.name;
        $scope.stations = data.line.stations;
    });
});

tubeApp.factory('dataFetch', function ($http) {
    return {
        query: {
            url: '',
            base: {
                arrivals: 'http://api.tfl.gov.uk/Line/%7Bids%7D/Arrivals?app_id=3a9a79b8&app_key=028f9bbc54baa89d77c46b9b2b5ba833&stopPointId=940GZZLU',
                stations: 'sql.php?q='
            },
            station: '',
            line: ''
        },
        list: function (url, callback) {
            switch (url) {
                case 'arrivals':
                    this.query.url = this.query.base.arrivals+this.query.station+'&ids='+this.query.line;
                    break;
                case 'stations':
                    this.query.url = this.query.base.stations+this.query.line;
                    break;
            }
            $http({
                method: 'GET',
                url: this.query.url
                //cache: true
            }).success(callback)
        }
    }
});

tubeApp.controller('arrivalListCtrl', function ($scope, $routeParams, dataFetch){
    dataFetch.query.station = $routeParams.station;
    dataFetch.query.line = $routeParams.line;
    dataFetch.list('arrivals', function (data){
        $scope.arrivals = data;
    });
});


tubeApp.filter('convertTime', function() {
    return function(input) {
        return Math.round(input/60) + ' min';
    }
});

