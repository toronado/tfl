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
            stopPoint : 'http://api.tfl.gov.uk/StopPoint/%7Bids%7D',
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

tubeApp.controller('arrivalListCtrl', function ($scope, $routeParams, $timeout, $sce, appData) {

    appData.fetch('stations', null, true, function (data) {
        $scope.station = data[$routeParams.sid];
        $scope.stationId = $routeParams.sid;
    });

    $scope.filters = {
        lineName : '',
        platformName : '',
        setFilters : function (lineName, platformName) {
            if (lineName !== false) {
                this.lineName = lineName;
            }
            if (platformName !== false) {
                this.platformName = platformName;
            }
        }
    }

    var params, counter;
    params = {
        stopPointId : '940GZZLU' + $routeParams.sid,
        ids : 'bakerloo,central,circle,district,hammersmith-city,jubilee,metropolitan,northern,piccadilly,victoria,waterloo-city'
    };

    appData.fetch('stopPoint', {ids:params.stopPointId}, true, function (data) {
        $scope.coord = [data.lat,data.lon];
        //var src = 'http://maps.googleapis.com/maps/api/streetview?scale=2&size=640x640&location='+lat+',%20'+lon+'&key=AIzaSyAimk7IRO6oecHWOQv5bIhlrdf8B3P0eNI';
        //var src = 'https://maps.googleapis.com/maps/api/staticmap?scale=2&center='+lat+','+lon+'&zoom=17&markers=color:blue%7Clabel:X%7C'+lat+','+lon+'&markers=size:tiny&size=640x640&key=AIzaSyAimk7IRO6oecHWOQv5bIhlrdf8B3P0eNI';
        //$scope.mapUrl = src;
        $scope.getMap('road');

    });

    $scope.getMap = function(type) {
        var lat = $scope.coord[0];
        var lon = $scope.coord[1];
        var key = 'AIzaSyAimk7IRO6oecHWOQv5bIhlrdf8B3P0eNI';
        var opts = {
            'live' : 'https://www.google.com/maps/embed/v1/view?maptype=satellite&zoom=18&center='+lat+'%2C'+lon+'&key='+key,
            'street' : 'http://maps.googleapis.com/maps/api/streetview?scale=2&size=640x640&location='+lat+',%20'+lon+'&key='+key,
            'road' : 'https://maps.googleapis.com/maps/api/staticmap?scale=2&zoom=17&markers=size:tiny&size=640x640&center='+lat+','+lon+'&markers=color:blue%7Clabel:X%7C'+lat+','+lon+'&key='+key
        }
        $scope.iframe = false;
        if (type === 'live') {
            $scope.iframe = true;
            $scope.mapUrl = $sce.trustAsResourceUrl(opts[type]);
        } else {
            $scope.mapData = opts[type];
            $scope.iframe = false;
        }
    }

    function getArrivals() {
        appData.fetch('arrivals', params, false, function (data) {
            $scope.arrivals = data;
            $scope.timestamp = new Date();
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
        $scope.custom = $scope.custom ? false : true;
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
        if (input < 10) {
            return 'Now';
        }
        if (input < 60) {
            return input + 's';
        }
        return Math.floor(input / 60) + ' min';
    };
});