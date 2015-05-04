<nav class="navbar navbar-fixed-top" id="nav-stations">
    <input id="station-search" type="text" data-ng-model="search" placeholder="station search">
</nav>
<div class="container-fluid" id="stations">
	<div class="row">
		<div class="col-md-12">
			<ul id="station-list" class="list-unstyled fadeIn animated" filter-list="search">
				<?php include 'station-list.html'; ?>
			</ul>
		</div>
	</div>
</div>