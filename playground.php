<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Playground</title>
        <style type="text/css">
            #google-map { position:absolute; top:0; bottom:0; right: 0; left: 0;}
            #map-canvas { height:100%; width:100%; background:none !important; }
        </style>
    </head>
    <body>
        <div id="google-map">
            <div id="map-canvas"></div>
        </div>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
        <script src="tfl/js/google-api.min.js"></script>
        <script type="text/javascript">

            function LatLon(lat, lon) {
                // allow instantiation without 'new'
                if (!(this instanceof LatLon)) return new LatLon(lat, lon);
                this.lat = Number(lat);
                this.lon = Number(lon);
            }
            Number.prototype.toRadians = function() { return this * Math.PI / 180; };
            LatLon.prototype.distanceTo = function(point, radius) {
                if (!(point instanceof LatLon)) throw new TypeError('point is not LatLon object');
                radius = (radius === undefined) ? 6371e3 : Number(radius);

                var R = radius;
                var φ1 = this.lat.toRadians(),  λ1 = this.lon.toRadians();
                var φ2 = point.lat.toRadians(), λ2 = point.lon.toRadians();
                var Δφ = φ2 - φ1;
                var Δλ = λ2 - λ1;

                var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
                        Math.cos(φ1) * Math.cos(φ2) *
                        Math.sin(Δλ/2) * Math.sin(Δλ/2);
                var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
                var d = R * c;

                return d;
            };



            function loadMap() {
                google.load('maps', '3', { callback: function() {
                    var myLatlng = new google.maps.LatLng(51.517585,-0.12047);
                    var mapOptions = {
                            zoom: 15,
                            center: myLatlng,
                            styles : myStyles1
                        };
                    map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
                    }
                });
            }
            //loadMap();
            function marker(train, lat, lon) {
                var myLatlng = new google.maps.LatLng(lat,lon);
                var marker = new google.maps.Marker({position: myLatlng, map: map, title: train});
            }

            var stations = ['bakerloo','central','circle','district','hammersmith-city','jubilee','metropolitan','northern','piccadilly','victoria','waterloo-city'];
            var stnsObj = null;
            var jqxhr = $.ajax( "tfl/data/stations.min.json").done(function (data) {
                stnsObj = data;
                getArrivals('KSX');
            });


            function lookup(stnName) {
                var key;
                for (key in stnsObj) {
                    if (stnName.indexOf(stnsObj[key]["name"]) > -1) {
                        return stnsObj[key]["name"] + '-' + stnName;
                        return [stnsObj[key]["lat"],stnsObj[key]["lon"]];
                    }
                }
                return 'xxxxxxx' + stnName;
            }

            function getArrivals(stn) {
                //Between, At, Approaching, Left, Departed
                //Latitude: 1 deg = 110.574 km
                //Longitude: 1 deg = 111.320*cos(latitude) km

                var location = [];
                var timeArr = [];
                var distance = [];
                var jqxhr = $.ajax( "http://api.tfl.gov.uk/StopPoint/%7Bids%7D/Arrivals?ids=940GZZLU"+stn ).done(function(data) {
                    console.log('complete');
                    var stnObj = stnsObj[stn];
                    for (var i=0; i<data.length; i++) {
                        var currentLocation = data[i]["currentLocation"];
                        var time = data[i]["timeToStation"];
                        switch (time) {
                            case 0:
                                current = stnObj['lat'];
                                break;
                            default:
                                switch (currentLocation.substring(0,2)) {
                                    case 'At':
                                        current = lookup(currentLocation.slice(3).split(' Platform')[0]);
                                        break;
                                    //case 'Between':
                                        //break;
                                    default:
                                        current = currentLocation;
                                }
                        }
                        timeArr.push(time);
                        location.push(current);
                        distance.push(Math.round(time * 9.17));
                    }
                    console.log(location);
                    console.log(timeArr);
                    console.log(distance);
                });
            }

            //getArrivals();
            var myStyles1 = [{"featureType":"administrative.country","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative.neighborhood","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative.neighborhood","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative.land_parcel","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"landscape.man_made","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural.landcover","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"all","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"off"}]},{"featureType":"poi.attraction","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","elementType":"all","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","elementType":"all","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"transit.line","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]}];
            var myStyles2 = [{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"color":"#f7f1df"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"color":"#d0e3b4"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.medical","elementType":"geometry","stylers":[{"color":"#fbd3da"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#bde6ab"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffe15f"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#efd151"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"black"}]},{"featureType":"transit.station.airport","elementType":"geometry.fill","stylers":[{"color":"#cfb2db"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#a2daf2"}]}];

        </script>
    </body>
</html>