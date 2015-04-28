<nav class="navbar fadeInDown animated">
  	<div class="container-fluid">
      		<h2 class="navbar-text">
				<span data-ng-click="toggleCustom()">{{station.name}}</span> <small>{{timestamp | date:'h:mma'}}</small>
				<sup>
					<a href="" id="counter" class="status-{{liveStatus}}" data-ng-click="switchLive(1-liveStatus)">
						<span data-ng-bind="count"></span>
					</a>
				</sup>
				<small>
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
<div class="container-fluid" id="tfl-data">
	<div class="col-md-4 fadeInRight animated" style="padding:0;" id="station-data">
		<div style="height:400px; overflow:hidden">
			<iframe data-ng-show="iframe" data-ng-src="{{mapUrl}}" width="100%" height="400" frameborder="0" style="border:0 background: #000000;" allowtransparency="true"></iframe>
			<img data-ng-src="{{mapData}}" width="100%">
		</div>
		<ul class="nav nav-pills nav-justified">
			<li class="active"><a href="" data-ng-click="getMap('road')">M</a></li>
  			<li><a href="" data-ng-click="getMap('street')">S</a> </li>
  			<li><a href="" data-ng-click="getMap('live')">I</a> </li>
		</ul>
	</div>
	<div class="col-md-8" id="arrivals">
		<ul class="lines nav nav-pills nav-justified">
			<li class="line" data-ng-repeat="(line,platforms) in station.lines">
				<span data-ng-click="filters.setFilters(line,'')">{{line.substr(0,3)}}</span>
				<ul class="platforms nav nav-pills nav-justified">
					<li class="platform" data-ng-repeat="platform in platforms" class="platform">
						<a href="" class="" data-ng-click="filters.setFilters(line,platform)">
							{{(arrivals|filter:{lineName:line, platformName:platform}).length}}
							<sup class="fa {{platform | arrowDirection}} {{line | stnName}}"></sup>
						</a>
					</li>
				</ul>
			</li>
		</ul>
		<ul id="arrival-list">
			<li class="bd-{{arrival.lineId}} arrival fadeInUp animated" data-ng-repeat="arrival in filtered = (arrivals | orderBy:'-timeToStation':true | filter:filters )">
				<span class="badge" style="text-align:right;">
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
</div>