var tubeApp = angular.module('tubeApp', ['ngRoute', 'ngSanitize']);

tubeApp.config(function ($routeProvider) {
    $routeProvider.
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

tubeApp.controller('arrivalListCtrl', function ($scope, $routeParams, appData) {
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

tubeApp.directive('filterList', function ($timeout) {
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