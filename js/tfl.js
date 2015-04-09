var tubeApp = angular.module('tubeApp', ['ngRoute', 'ngSanitize']);

tubeApp.config(function ($routeProvider) {
    $routeProvider.
        when('/:sid/:line?/', {
            templateUrl: 'templates/arrival-list.php',
            controller: 'arrivalListCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
});

tubeApp.factory('appData', function ($http) {
    return {
        urls : {
            arrivals : 'http://api.tfl.gov.uk/Line/%7Bids%7D/Arrivals',
            stations : 'data/json/stationsObj.json'
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

tubeApp.controller('arrivalListCtrl', function ($scope, $routeParams, $timeout, appData) {

    appData.fetch('stations', null, true, function (data) {
        $scope.station = data[$routeParams.sid];
        $scope.stationId = $routeParams.sid;
    });

    $scope.filters = {
        lineName : '',
        platformName : '',
        setFilters : function (lineName, platformName) {
            this.lineName = lineName;
            this.platformName = platformName;
        }
    }

    var params, counter;
    params = {
        stopPointId : '940GZZLU' + $routeParams.sid,
        ids : 'bakerloo,central,circle,district,hammersmith-city,jubilee,metropolitan,northern,piccadilly,victoria,waterloo-city'
    };
    $scope.getCount = 0;
    function getArrivals() {
        appData.fetch('arrivals', params, false, function (data) {
            $scope.arrivals = data;
            $scope.timestamp = new Date();
            $scope.getCount++;
            liveArrivals.start();
        });
    }
    getArrivals();

    var liveArrivals = {
        start : function () {
            $scope.count = 60;
            $scope.liveStatus = 1;         
            this.countdown();
        },
        countdown : function () {
            $scope.count--;
            if (!$scope.count) {
                getArrivals();
                return;
            }
            counter = $timeout(liveArrivals.countdown, 1000);
        },
        stop : function () {
            $timeout.cancel(counter);
            $scope.liveStatus = 0;
        }
    }

    $scope.switchLive = function (n) {
        n ? getArrivals() : liveArrivals.stop();
    }
    $scope.$on("$destroy",function (event) { 
        liveArrivals.stop();
    });

    $scope.custom = true;
    $scope.toggleCustom = function() {
        $scope.custom = $scope.custom === false ? true: false;
    };

});


tubeApp.directive('filterList', function () {
    return {
        link: function (scope, element, attrs) {
            
            var li = Array.prototype.slice.call(element[0].children);
            
            function filterBy (value) {
                li.forEach(function (el) {
                    if (el.children[0].textContent.toLowerCase().indexOf(value.toLowerCase()) !== -1) {
                        el.className = '';
                    } else {
                        el.className = 'ng-hide';
                    }
                });
            }
            
            scope.$watch(attrs.filterList, function(newVal, oldVal) {
                if (newVal !== oldVal) {
                    filterBy(newVal);
                }
            });
        }
    };
});

tubeApp.filter('stnName', function () {
    return function (name) {
        name = name.toLowerCase();
        var stnName = {
            'hammersmith & city':'hammersmith-city',
            'waterloo & city':'waterloo-city'
        }
        return stnName[name] ? stnName[name] : name;
    }
});

//Change seconds to minutes
tubeApp.filter('convertTime', function () {
    return function (input) {
        var mins = Math.floor(input / 60);
        if (mins) {
            return mins + ' min';// + ' ('+input+'s)';
        }
        return 'Now';
    };
});