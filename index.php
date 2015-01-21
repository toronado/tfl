<!DOCTYPE html>
<head>
	<title>TFL Train Times</title>
	<?php include '../include/bootstrap_css.php'; ?>
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
		          		<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Dropdown <span class="caret"></span></a>
		          		<ul id="main-menu" class="dropdown-menu" role="menu">
		            		<li><a href="#one">Action</a></li>
		            		<li><a href="#two">Another action</a></li>
		            		<li><a href="#three">Something else here</a></li>
		          		</ul>
		        	</li>
		      	</ul>
		    </div><!-- /.navbar-collapse -->
  		</div><!-- /.container-fluid -->
	</nav>
	<div class="container">
		<div class="col-md-6">
			<h1 id="main-heading">Tube</h1>
			<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
			<h2>And then...</h2>
			<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
		</div>
		<div class="col-md-6">
			<h2>DLR</h2>
			<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
		</div>
	</div>
	<?php include '../include/jquery.php'; ?>
	<?php include '../include/bootstrap_js.php'; ?>
	<script type="text/javascript">
		var mainHeading = document.getElementById('main-heading');
		$('#main-menu').on('click', 'a', function() {
			var href = $(this).attr('href');
			mainHeading.innerHTML = href + ' selected!';
			return false;
		});
	</script>
</body>
</html>