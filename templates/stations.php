<nav class="navbar navbar-fixed-top" id="nav-stations">
    <input id="station-search" type="text" data-ng-model="search" placeholder="search">
</nav>
<div class="container-fluid" id="stations">
	<ul id="station-list" class="list-unstyled fadeIn animated" filter-list="search">
		<?php include 'station-list.html'; ?>
	</ul>
</div>