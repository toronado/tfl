<nav class="navbar navbar-fixed-top fadeInDown animated" id="nav-arrivals">
  	<div class="container-fluid">
    	<h2 class="navbar-text pull-left" style="width:75%;">
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
    	<h2 class="navbar-text pull-right" style="text-transform:lowercase; width:25%; text-align:right;">
			<a href="" id="counter" class="status-{{liveStatus}}" data-ng-click="switchLive(1-liveStatus)">
				{{timestamp | date:'h:mma'}}
				<sup><span data-ng-bind="count"><i class="fa fa-cog fa-spin"></i></span></sup>
			</a>
    	</h2>
  	</div>
</nav>
<div id="google-map">
	<div id="map-canvas"></div>
</div>
<div class="container-fluid" id="arrivals">
	<div class="row">
		<div class="col-md-12">
			<ul class="lines nav nav-pills nav-justified">
				<li class="line" data-ng-repeat="(line,platforms) in station.lines">
					<a class="bg-{{line | stnName}}" href="" data-ng-click="filters.setFilters(line,'')">
						{{(arrivals|filter:{lineName:line}).length}} {{line.substr(0,3)}}
					</a>
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
					<i class="{{arrival.lineId}} fa {{arrival.platformName | arrowDirection}}"></i>
					{{arrival.towards}}
					<small>
						{{arrival.platformName.split(' ')[0]}}, {{arrival.currentLocation}}
					</small>
				</li>
			</ul>
		</div>
	</div>
</div>