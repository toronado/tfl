function mobile() {
    var check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
}
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
    if (!mobile()) {
        $scope.mobile = false;
        getMap();
    } else {
        $scope.mobile = true;
    }

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
];
var myStyles2 = [{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"color":"#f7f1df"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"color":"#d0e3b4"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.medical","elementType":"geometry","stylers":[{"color":"#fbd3da"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#bde6ab"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffe15f"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#efd151"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"black"}]},{"featureType":"transit.station.airport","elementType":"geometry.fill","stylers":[{"color":"#cfb2db"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#a2daf2"}]}];
