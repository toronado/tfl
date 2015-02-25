
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
            <div class="col-md-12">
                <ul class="list-unstyled" id="tube-lines">
    				<li class="col-md-1 line">
				    	<a style="border-color:#222;" class="bg" href="#/?line=all">All</a>
				  	</li>
				  	<li class="col-md-1 line">
				    	<a class="bd-bakerloo" href="#/?line=bakerloo">Ba</a>
				  	</li>
				  	<li class="col-md-1 line">
				    	<a class="bd-central" href="#/?line=central">Ce</a>
				  	</li>
				  	<li class="col-md-1 line">
				    	<a class="bd-circle" href="#/?line=circle">Ci</a>
				  	</li>
				  	<li class="col-md-1 line">
				    	<a class="bd-district" href="#/?line=district">Di</a>
				  	</li>
				  	<li class="col-md-1 line">
				    	<a class="bd-hammersmith" href="#/?line=hammersmith">Ha</a>
				  	</li>
				  	<li class="col-md-1 line">
				    	<a class="bd-jubilee" href="#/?line=jubilee">Ju</a>
				  	</li>
				  	<li class="col-md-1 line">
				    	<a class="bd-metropolitan" href="#/?line=metropolitan">Me</a>
				  	</li>
				  	<li class="col-md-1 line">
				    	<a class="bd-northern" href="#/?line=northern">No</a>
				  	</li>
				  	<li class="col-md-1 line">
				    	<a class="bd-piccadilly" href="#/?line=piccadilly">Pi</a>
				  	</li>
				  	<li class="col-md-1 line">
				    	<a class="bd-victoria" href="#/?line=victoria">Vi</a>
				  	</li>
				  	<li class="col-md-1 line">
				    	<a class="bd-waterloo" href="#/?line=waterloo">Wa</a>
				  	</li>
				</ul>
            </div>
        </div>
    </nav>
    <div class="container">
    	<div class="row">
    		<div class="col-md-3">
    			
    		</div>
       		<div class="col-md-12" id="data" data-ng-view></div>
       	</div>
    </div>
    <script src="js/angular.min.js"></script>
    <script src="js/angular-route.min.js"></script>
    <script src="js/angular-sanitize.min.js"></script>
    <script src="js/tfl.js"></script>

</html>