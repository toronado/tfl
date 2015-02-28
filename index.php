<!DOCTYPE html>
<html data-ng-app="tubeApp">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>TFL BETA</title>
    <link href="/css/bootstrap.min.css" rel="stylesheet">
    <link href="css/tfl.css" rel="stylesheet">
</head>
<body>
    <nav class="navbar navbar-default navbar-fixed-top">
    	<!--<div class="navbar-header">
      		<a class="navbar-brand" href="#">
        		TFLive
      		</a>
    	</div>-->
        <ul class="nav nav-tabs nav-justified" id="line-list">
            <li><a style="background-color:#2f353f; color:#70C3CE" href="#/">+</a></li>
            <li><a class="bg-bakerloo" href="#/?line=bakerloo">Ba</a></li>
            <li><a class="bg-central" href="#/?line=central">Ce</a></li>
            <li><a class="bg-circle" href="#/?line=circle">Ci</a></li>
            <li><a class="bg-district" href="#/?line=district">Di</a></li>
            <li><a class="bg-hammersmith-city" href="#/?line=hammersmith-city">Ha</a></li>
            <li><a class="bg-jubilee" href="#/?line=jubilee">Ju</a></li>
            <li><a class="bg-metropolitan" href="#/?line=metropolitan">Me</a></li>
            <li><a class="bg-northern" href="#/?line=northern">No</a></li>
            <li><a class="bg-piccadilly" href="#/?line=piccadilly">Pi</a></li>
            <li><a class="bg-victoria" href="#/?line=victoria">Vi</a></li>
            <li><a class="bg-waterloo-city" href="#/?line=waterloo-city">Wa</a></li>
        </ul>
		<!--<input id="station-search" type="text" class="form-control" placeholder="Station Search" aria-describedby="basic-addon1">-->
	</nav>
    <div class="container" id="tfl-data">
       	<div data-ng-view></div>
    </div>
    <script src="js/angular.min.js"></script>
    <script src="js/angular-route.min.js"></script>
    <script src="js/angular-sanitize.min.js"></script>
    <script src="js/tfl.js"></script>

</html>