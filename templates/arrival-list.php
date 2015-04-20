<nav class="navbar navbar-fixed-top navbar-inverse">
  	<div class="container-fluid">
    	<div class="navbar-header">
      		<a class="navbar-brand" href="" data-ng-click="toggleCustom()">
        		TFLive
      		</a>
    	</div>
		<a href="" class="navbar-right live status-{{liveStatus}}" data-ng-click="switchLive(1-liveStatus)">
			<span data-ng-bind="count"></span>
		</a>
  	</div>
</nav>
<iframe ng-src="{{mapUrl}}" width="100%" height="450" frameborder="0" style="border:0 background: #000000;" allowtransparency="true"></iframe>
<div class="container-fluid" id="tfl-data">
	<div class="col-md-4" style="padding:0;">
		<div id="stations" class="slideInLeft animated" data-ng-hide="custom">
			<input id="station-search" type="text" data-ng-model="search" class="form-control" placeholder="Search"/>
			<?php include 'stations.html' ?>
		</div>
		<div id="station">
			<h2 data-ng-click="filters.setFilters('','')">
				{{arrivals.length}}
				<small>
					arrivals @
					{{timestamp | date:'h:mma'}}
				</small>
			</h2>
			<ul class="line list-group list-unstyled">
				<li class="list-group-item" data-ng-repeat="(line,platforms) in station.lines">
					<a href="" data-ng-click="filters.setFilters(line,'')">
						<span  class="{{line | stnName}}" style="padding:1px 3px; background-color:#1c2026; text-transform: uppercase; font-weight: 500; font-size: 85%; letter-spacing: 1px;">{{line}}</span>
						<!--<span class="badge">{{(arrivals|filter:{lineName:line}).length}}</span>-->
					</a>
					<ul class="platforms list-unstyled">
						<li data-ng-repeat="platform in platforms">
							<a href="" class="platform" data-ng-click="filters.setFilters(line,platform)">
								{{platform}} 
								<span class="badge">{{(arrivals|filter:{lineName:line, platformName:platform}).length}}</span>
							</a>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
	<div class="col-md-8" id="arrivals">
		<h2>
			<span>{{station.name}}</span>
			<small>
				{{filtered.length}} arrivals
				<span data-ng-show="filters.lineName">
					/ <span class="filter">{{filters.lineName}}</span>
					<sup>
						<a class="clear-filter" href="" data-ng-click="filters.setFilters('', false)">x</a>
					</sup>
				</span>
				<span data-ng-show="filters.platformName">
					/ <span class="filter">{{filters.platformName}}</span>
					<sup>
						<a class="clear-filter" href="" data-ng-click="filters.setFilters(false, '')">x</a>
					</sup>
				</span>
			</small>
		</h2>
		<ul id="arrival-list">
			<li class="arrival fadeIn animated" data-ng-repeat="arrival in filtered = (arrivals | orderBy:'-timeToStation':true | filter:filters )">
				<a href="" class="bd-{{arrival.lineId}}" style="border-left:5px solid #222;">
					<!--<span class="line-badge-wrapper">
						<span class="line-badge bg-{{arrival.lineId}}">&nbsp;</span>
					</span>-->
					<span class="badge" style="text-align:right;">
						{{arrival.timeToStation | convertTime}}
					</span>
					{{arrival.towards}}
					<small>
						{{arrival.platformName.split('-')[0].trim()}}, {{arrival.currentLocation}}
					</small>
				</a>
			</li>
		</ul>
	</div>
</div>