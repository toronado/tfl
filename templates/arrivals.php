<nav class="navbar navbar-fixed-top fadeInDown animated" id="nav-arrivals">
  	<div class="container-fluid">
    	<h2 class="navbar-text pull-left" style="width:60%;">
    		<a href="/tfl/#/" style="color:#fff;">{{station.name}}</a>
    		<small>
				{{filtered.length}} arrivals
				<span data-ng-show="filters.lineName">
					/ <span class="filter">{{filters.lineName}}</span>
					<sup>
						<a class="clear-filter" href="" data-ng-click="filters.setFilters('', false)"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></a>
					</sup>
				</span>
				<span data-ng-show="filters.platformName">
					/ <span class="filter">{{filters.platformName}}</span>
					<sup>
						<a class="clear-filter" href="" data-ng-click="filters.setFilters(false, '')"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></a>
					</sup>
				</span>
			</small>
    	</h2>
    	<h2 class="navbar-text pull-right" style="text-transform:lowercase; width:40%; text-align:right;">
			<a href="" id="counter" class="status-{{live}}" data-ng-click="switchLive(1-live)">
				{{timestamp | date:'h:mma'}}
				<sup>
					<span data-ng-bind="count"></span>
					<i class="fa fa-cog fa-spin" data-ng-show="loading"></i>
				</sup>
			</a>
    	</h2>
  	</div>
</nav>
<div class="container-fluid" id="arrivals">
	<div class="col-md-12" style="padding:0; z-index:1;">
		<ul class="lines nav nav-pills nav-justified">
			<li class="line" data-ng-repeat="(line,platforms) in station.lines">
				<a class="bg-{{line | stnName}}" href="" data-ng-click="filters.setFilters(line,'')">
					{{(arrivals|filter:{lineName:line}).length}} {{line.substr(0,3)}}
				</a>
				<ul class="platforms nav nav-pills nav-justified">
					<li class="platform" data-ng-repeat="platform in platforms">
						<a href="" data-ng-click="filters.setFilters(line,platform)">
							{{(arrivals|filter:{lineName:line, platformName:platform}).length}}
							<sup class="{{line | stnName}}"><i class="fa {{platform | arrowDirection}}"></i></sup>
						</a>
					</li>
				</ul>
			</li>
		</ul>
		<ul id="arrival-list">
			<li class="arrival fadeInUp animated bd-{{arrival.lineId}}" data-ng-repeat="arrival in filtered = (arrivals | orderBy:'-timeToStation':true | filter:filters )">
				<span class="badge">
					{{arrival.timeToStation | convertTime}}
					<i class="{{arrival.lineId}} fa {{arrival.platformName | arrowDirection}}"></i>
				</span>
				{{arrival.towards}}
				<small>
					{{arrival.platformName.split(' ')[0]}}, {{arrival.currentLocation}}
				</small>
			</li>
		</ul>
	</div>
</div>
<div id="google-map">
	<div id="map-canvas">
		<i class="fa fa-cog fa-spin" style="margin-top:170px; color:#fff; font-size:20px"></i>
		<button class="btn" data-ng-click="getMap()" style="background-color:#ff3; margin-top:145px; opacity: 0.8; font-weight: 600;" data-ng-show="mobile">Load Map</button>
	</div>
</div>