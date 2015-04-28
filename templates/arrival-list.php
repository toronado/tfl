<nav class="navbar fadeInDown animated">
  	<div class="container-fluid">
      		<!--<a class="navbar-brand" href="" data-ng-click="toggleCustom()">
        		TFLive
      		</a>
      		<p class="navbar-text navbar-right">Signed in as <a href="#" class="navbar-link">Mark Otto</a></p>-->
      		<h2 class="navbar-text">
				<span data-ng-click="toggleCustom()">{{station.name}}</span> <small>{{timestamp | date:'h:mma'}}</small>
				<sup>
					<a href="" id="counter" class="status-{{liveStatus}}" data-ng-click="switchLive(1-liveStatus)">
						<span data-ng-bind="count"></span>
					</a>
				</sup>
				<small>
					<!--{{filtered.length}}
					of <span data-ng-click="filters.setFilters('','')">{{arrivals.length}}</span>=-->
					
					<span data-ng-show="filters.lineName"> / 
						<span class="filter">{{filters.lineName}}</span>
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
  	</div>
</nav>
<!--<div class="col-md-12" style="padding:0;">
		<ul class="nav nav-pills nav-justified">
			<li class="active"><a href="" data-ng-click="getMap('road')">Arrivals</a></li>
  			<li><a href="" data-ng-click="getMap('street')">GoogleM</a></li>
		</ul>
	</div>-->
<div class="container-fluid" id="tfl-data">
	
	<div class="col-md-8" id="arrivals">
		
		<ul class="lines nav nav-pills nav-justified">
			<li class="line" data-ng-repeat="(line,platforms) in station.lines">
				<!--<a href="" data-ng-click="filters.setFilters(line,'')">
					<span  class="{{line | stnName}}" style="background-color:#1c2026; text-transform: uppercase; font-weight: 500; font-size: 85%; letter-spacing: 1px;">{{line}}</span>
					<span class="badge">{{(arrivals|filter:{lineName:line}).length}}</span>
					<span class="line-badge-wrapper">
						<span class="line-badge ">&nbsp;</span>
					</span>
					&nbsp;
				</a>-->
				<!--<ul class="platforms list-unstyled">
					<li data-ng-repeat="platform in platforms">
						<a href="" class="platform" data-ng-click="filters.setFilters(line,platform)">
							{{platform}} 
							<span class="badge">{{(arrivals|filter:{lineName:line, platformName:platform}).length}}</span>
						</a>
					</li>
				</ul>-->
				<span data-ng-click="filters.setFilters(line,'')">{{line.substr(0,2)}}</span>
				<ul class="platforms nav nav-pills nav-justified">
					<li class="platform" data-ng-repeat="platform in platforms" class="platform c-{{platform.charAt(0).toLowerCase()}}">
						<a href="" class="{{line | stnName}}" data-ng-click="filters.setFilters(line,platform)">
							{{(arrivals|filter:{lineName:line, platformName:platform}).length}}
						</a>
					</li>
				</ul>
			</li>
		</ul>
		<ul id="arrival-list">
			<li class="bd-{{arrival.lineId}} arrival fadeInUp animated" style="border-left:10px solid #222;" data-ng-repeat="arrival in filtered = (arrivals | orderBy:'-timeToStation':true | filter:filters )">
				<!--<a href="" class="">
					<span class="line-badge-wrapper">
						<span class="line-badge bg-{{arrival.lineId}}">&nbsp;</span>
					</span>
				</a>-->
				<span class="badge" style="text-align:right;">
					{{arrival.timeToStation | convertTime}}
				</span>
				{{arrival.towards}}
				<small>
					{{arrival.platformName.split('-')[0].trim()}}, {{arrival.currentLocation}}
				</small>
			</li>
		</ul>
	</div>
	<div class="col-md-4 fadeInRight animated" style="padding:0;" id="station-data">
			<div id="google-map-image" style="position:absolute; top:0; right:0; left:0; bottom:0;">.</div>
		<ul class="nav nav-pills nav-justified">
			<li class="active"><a href="" data-ng-click="getMap('road')">M</a></li>
  			<li><a href="" data-ng-click="getMap('street')">S</a> </li>
  			<li><a href="" data-ng-click="getMap('live')">I</a> </li>
		</ul>
		<div style="height:400px; overflow:hidden">
			<iframe data-ng-show="iframe" data-ng-src="{{mapUrl}}" width="100%" height="400" frameborder="0" style="border:0 background: #000000;" allowtransparency="true"></iframe>
			<img data-ng-src="{{mapData}}" width="100%">
		</div>
		<div id="stations" class="slideInLeft animated" data-ng-hide="custom">
			<input id="station-search" type="text" data-ng-model="search" class="form-control" placeholder="Search"/>
			<?php include 'stations.html' ?>
		</div>
		<!--<div id="station">
			<ul class="line list-group list-unstyled">
				<li class="list-group-item" data-ng-repeat="(line,platforms) in station.lines">
					<a href="" data-ng-click="filters.setFilters(line,'')">
						<span  class="{{line | stnName}}" style="background-color:#1c2026; text-transform: uppercase; font-weight: 500; font-size: 85%; letter-spacing: 1px;">{{line}}</span>
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
		</div>-->
	</div>
</div>