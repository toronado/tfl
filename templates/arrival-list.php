<nav class="navbar navbar-inverse navbar-fixed-top fadeInDown animated">
  	<div class="container-fluid">
    	<h2 class="navbar-text pull-left">
    		<span data-ng-click="toggleCustom()">{{station.name}}</span>
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
    	<h2 class="navbar-text pull-right" style="text-transform:lowercase">
			<a href="" id="counter" class="status-{{liveStatus}}" data-ng-click="switchLive(1-liveStatus)">
				{{timestamp | date:'h:mma'}}
				<sup><span data-ng-bind="count"><i class="fa fa-cog fa-spin"></i></span></sup>
			</a>
    	</h2>
  	</div>
</nav>
<div class="container-fluid" id="tfl-data">
	<div class="col-md-8" id="arrivals">
		<ul class="lines nav nav-pills nav-justified">
			<li class="line" data-ng-repeat="(line,platforms) in station.lines">
				<a class="bg-{{line | stnName}}" href="" data-ng-click="filters.setFilters(line,'')">{{(arrivals|filter:{lineName:line}).length}}</a>
				<ul class="platforms nav nav-pills nav-justified">
					<li class="platform" data-ng-repeat="platform in platforms">
						<a href="" data-ng-click="filters.setFilters(line,platform)">
							<i class="fa {{platform | arrowDirection}} {{line | stnName}}"></i>
							<span>{{(arrivals|filter:{lineName:line, platformName:platform}).length}}</span>
						</a>
					</li>
				</ul>
			</li>
		</ul>
		<ul id="arrival-list">
			<li class="arrival fadeInUp animated" data-ng-repeat="arrival in filtered = (arrivals | orderBy:'-timeToStation':true | filter:filters )">
				<span class="badge">
					{{arrival.timeToStation | convertTime}}
				</span>
				<i class="{{arrival.lineId}} fa {{arrival.platformName.split('-')[0].trim() | arrowDirection}}"></i>
				{{arrival.towards}}
				<small>
					{{arrival.platformName.split('-')[0].trim()}}, {{arrival.currentLocation}}
				</small>
			</li>
		</ul>
	</div>
	<div class="col-md-4 fadeIn animated" id="station-data">
		<!--<img data-ng-src="{{mapData}}" width="100%" height="350px">-->
		<div id="map-canvas" style="width: 100%; height: 100vh; background-color:transparent;"></div>
		<!--<ul class="nav nav-pills nav-justified">
			<li data-ng-class="{'active':isActive('road')}">
				<a href="" data-ng-click="getMap('road')">
					<i class="fa fa-map-marker"></i>
				</a>
			</li>
  			<li data-ng-class="{'active':isActive('street')}">
  				<a href="" data-ng-click="getMap('street')">
  					<i class="fa fa-street-view"></i>
  				</a>
  			</li>
  			<li data-ng-class="{'active':isActive('map')}">
  				<a href="" data-ng-click="getMap('map')">
  					<span class="glyphicon glyphicon-move" aria-hidden="true"></span>
  				</a>
  			</li>
		</ul>-->
	</div>
</div>