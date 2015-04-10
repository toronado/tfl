<nav class="navbar navbar-fixed-top navbar-inverse">
  	<div class="container-fluid">
    	<div class="navbar-header">
      		<a class="navbar-brand" href="" data-ng-click="toggleCustom()">
        		TFLive
      		</a>
    	</div>
		<a href="" class="navbar-right live status-{{liveStatus}}" data-ng-click="switchLive(1-liveStatus)">
			LIVE: <span data-ng-bind="count"></span>
		</a>
  	</div>
</nav>
<div class="container-fluid" id="tfl-data">
	<div class="col-md-3">
		<div class="row">
			<div id="stations" class="slideInLeft animated" data-ng-hide="custom">
				<input id="station-search" type="text" data-ng-model="search" class="form-control" placeholder="Search"/>
				<?php include 'stations.html' ?>
			</div>
			<div id="station">
				<h2 data-ng-click="filters.setFilters('','')">{{station.name}}<small> / {{stationId}} / {{arrivals.length}}</small> </h2>
				<ul>
					<li data-ng-repeat="(line,platforms) in station.lines">
						<a href="" class="line" data-ng-click="filters.setFilters(line,'')">
							{{line}} ({{(arrivals|filter:{lineName: line}).length}})
						</a>
						<ul class="platforms">
							<li data-ng-repeat="platform in platforms">
								<a href="" class="platform" data-ng-click="filters.setFilters(line,platform)">
									{{platform}} ({{(arrivals|filter:{lineName: line,platformName: platform}).length}})
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<div class="col-md-9" id="arrivals">
		<h2>{{filtered.length}}<small> arrivals, {{timestamp | date:'h:mma'}}</small></h2>
		<ul id="arrival-list">
			<li class="arrival" data-ng-repeat="arrival in filtered = (arrivals | orderBy:'-timeToStation':true | filter:filters )">
				<a href="">
					<span class="line-badge-wrapper">
						<span class="line-badge bg-{{arrival.lineId}}">&nbsp;</span>
					</span>
					<span class="badge">
						{{arrival.timeToStation | convertTime}}
					</span>
					{{arrival.towards}}
					<small>
						{{arrival.platformName.split('-')[0].trim()}}, {{arrival.currentLocation}} / {{arrival.timeToStation}}s
					</small>
				</a>
			</li>
		</ul>
	</div>
</div>