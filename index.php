
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
  		<div class="row">
      		<div class="col-md-12" id="line-list">
			  	<div class="col-md-1"><a style="border-color:#222;" class="bg" href="#/?line=all">Al</a></div>
			  	<div class="col-md-1"><a class="bg-bakerloo" href="#/?line=bakerloo">Ba</a></div>
			  	<div class="col-md-1"><a class="bg-central" href="#/?line=central">Ce</a></div>
			  	<div class="col-md-1"><a class="bg-circle" href="#/?line=circle">Ci</a></div>
			  	<div class="col-md-1"><a class="bg-district" href="#/?line=district">Di</a></div>
			  	<div class="col-md-1"><a class="bg-hammersmith-city" href="#/?line=hammersmith-city">Ha</a></div>
			  	<div class="col-md-1"><a class="bg-jubilee" href="#/?line=jubilee">Ju</a></div>
			  	<div class="col-md-1"><a class="bg-metropolitan" href="#/?line=metropolitan">Me</a></div>
			  	<div class="col-md-1"><a class="bg-northern" href="#/?line=northern">No</a></div>
			  	<div class="col-md-1"><a class="bg-piccadilly" href="#/?line=piccadilly">Pi</a></div>
			  	<div class="col-md-1"><a class="bg-victoria" href="#/?line=victoria">Vi</a></div>
			  	<div class="col-md-1"><a class="bg-waterloo-city" href="#/?line=waterloo-city">Wa</a></div>
			</div>
		</div>
	</nav>
    <div class="container" id="tfl-data">
    	<div class="row">
       		<div data-ng-view></div>
       	</div>
    </div>
    <script src="js/angular.min.js"></script>
    <script src="js/angular-route.min.js"></script>
    <script src="js/angular-sanitize.min.js"></script>
    <script src="js/tfl.js"></script>

</html>