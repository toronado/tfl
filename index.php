<!DOCTYPE html>
<?php
$mysqli = new mysqli("localhost", "toro", "nado", "tfl");
if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
} else {
	$result = $mysqli->query("SELECT id FROM stations LIMIT 10");
	printf("Select returned %d rows.\n", $result->num_rows);

    /* free result set */
    $result->close();
}
?>
<head>
	<title>TFL Train Times</title>
	<link rel="stylesheet" type="text/css" href="/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="css/tfl.css">
</head>
<body>
	<nav class="navbar navbar-default">
  		<div class="container-fluid">
  			<div class="navbar-header">
      			<a class="navbar-brand" href="#">
        			TFL
      			</a>
    		</div>	
		    <!-- Collect the nav links, forms, and other content for toggling -->
		    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
		      	<ul class="nav navbar-nav">
		        	<li class="dropdown">
		          		<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Lines <span class="caret"></span></a>
		          		<ul id="main-menu" class="dropdown-menu" role="menu">
		            		<li><a href="#bakerloo">bakerloo</a></li>
		            		<li><a href="#central">central</a></li>
		            		<li><a href="#circle">circle</a></li>
		            		<li><a href="#district">district</a></li>
		            		<li><a href="#hammersmith-city">hammersmith-city</a></li>
		            		<li><a href="#jubilee">jubilee</a></li>
		            		<li><a href="#metropolitan">metropolitan</a></li>
		            		<li><a href="#northern">northern</a></li>
		            		<li><a href="#piccadilly">piccadilly</a></li>
		            		<li><a href="#victoria">victoria</a></li>
		            		<li><a href="#waterloo-city">waterloo-city</a></li>
		          		</ul>
		        	</li>
		      	</ul>
		    </div><!-- /.navbar-collapse -->
  		</div><!-- /.container-fluid -->
	</nav>
	<div class="container">
		<div class="col-md-12">
			<div id="stations"></div>
		</div>
	</div>
	<script src="/js/jquery-2.1.3.min.js"></script>
	<script src="/js/bootstrap.min.js"></script>
	<script src="js/tfl.js"></script>
</body>
</html>