var tubeApp = angular.module('tubeApp', ['ngRoute']);

tubeApp.config(function ($routeProvider) {
    $routeProvider.
        when('/:sid/:line?/', {
            templateUrl: 'templates/arrivals.php',
            controller: 'arrivalsCtrl'
        }).
        otherwise({
            templateUrl: 'templates/stations.php'
        });
});

tubeApp.factory('appData', function ($http) {
    return {
        urls : {
            arrivals : 'http://api.tfl.gov.uk/Line/%7Bids%7D/Arrivals',
            stopPoint : 'http://api.tfl.gov.uk/StopPoint/%7Bids%7D',
            stations : 'data/stationsObj.json'
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

tubeApp.controller('arrivalsCtrl', function ($scope, $routeParams, $timeout, appData) {

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

    function getArrivals() {
        appData.fetch('arrivals', params, false, function (data) {
            $scope.arrivals = data;
            $scope.timestamp = new Date();
            liveArrivals.start();
        });
    }
    getArrivals();
    getMap();

    var liveArrivals = {
        start : function () {
            $scope.count = 40;
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

    function getMap() {
        appData.fetch('stopPoint', {ids:params.stopPointId}, true, function (data) {
            console.log(data.lat + '-' + data.lon);
            google.load('maps', '3', { callback: function() {
                var myLatlng = new google.maps.LatLng(data.lat,data.lon);
                var mapOptions = {
                    zoom: 15,
                    center: myLatlng,
                    styles : myStyles             
                };
                var map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
                var marker = new google.maps.Marker({position: myLatlng, map: map, title: $routeParams.sid});
                }
            });
        });
    }

});


tubeApp.directive('filterList', function () {
    return {
        link: function (scope, element, attrs) {
            var li = Array.prototype.slice.call(element[0].children);
            function filterBy (value) {
                li.forEach(function (el) {
                    if (el.children[0].textContent.toLowerCase().indexOf(value.toLowerCase()) !== -1) {
                        el.className = 'station';
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

tubeApp.filter('arrowDirection', function() {
    return function (bound) {
        var glyph = 'fa-arrow-';
        switch (bound.charAt(0)) {
            case 'E':
            case 'I':
                return glyph+'right';
            case 'W':
            case 'O':
                return glyph+'left';
            case 'N':
                return glyph+'up';
            case 'S':
                return glyph+'down';
        }
    }
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

myStyles = [
    {
        "featureType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#363D47"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "transit.station.rail",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#262A30"
            }
        ]
    },
    {
        "featureType": "poi.attraction",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#999999"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#262A30"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#eeeeee"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#2f353f"
            }
        ]
    }
]
