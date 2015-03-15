<?php
	function stnList() {
		$stnJson = file_get_contents("json/stations.json");
		$stnArr = json_decode($stnJson, true);
		$li = '';
		foreach ($stnArr as $stn) {
			$lineSpan = '';
			foreach ($stn['lines'] as $line) {
				$lineSpan .= '<span class="line-badge bg-'.$line.'">&nbsp;</span>';
			}
			$li .= '<li>'
				.		'<a href="#/'.$stn['id'].'/">'
				.			'<span class="line-badge-wrapper">'
				.				$lineSpan
				.			'</span>'
				. 			$stn['name']
				.		'</a>'
				.	'</li>';
		}
		file_put_contents('../templates/stations.html', '<ul filter-list="search" id="station-list">' . $li . '</ul>');
	}
?>
<!DOCTYPE html>
<html>
	<head>
		<title>Functions</title>
	</head>
	<body>
		<div id="data"></div>
		<script type="text/javascript" src="/js/jquery-2.1.3.min.js"></script>
		<script type="text/javascript">
			//getData();
			var stnObj = {};
			function getData() {
				var stns = 'bakerloo,central,circle,district,hammersmith-city,jubilee,metropolitan,northern,piccadilly,victoria,waterloo-city'
				var url = 'http://api.tfl.gov.uk/Line/%7Bids%7D/Arrivals?ids='+stns;
				var count = {
					'stn' : [],
					'line' : [],
					'direction' : [],
					totalCount : function() {
						return this.stn.length + this.line.length + this.direction.length;
					}
				}
				var jqxhr = $.get( url, function(data) {
					var i, dataLen;
					dataLen = data.length;
					for (i=0; i<dataLen; i++) {
						var naptanId = data[i]['naptanId'].substr(8);
						var stnName = data[i]['stationName'].split(' Underground Station')[0];
						var lineName = data[i]['lineName'];
						var platformName = data[i]['platformName'].split(' -')[0];
						if (!stnObj[naptanId]) {
							stnObj[naptanId] = {'name': stnName, 'lines': {}};
							stnObj[naptanId].lines[lineName] = [platformName];
							count.stn.push(stnName + '-' + lineName);

						} else {
							if (stnObj[naptanId].lines[lineName]) {
								if (stnObj[naptanId].lines[lineName].indexOf(platformName) === -1) {
									stnObj[naptanId].lines[lineName].push(platformName);
									count.direction.push(stnName + '-' + lineName + '-' + platformName);
								}
							} else {
								stnObj[naptanId].lines[lineName] = [platformName];
								count.line.push(stnName + '-' + platformName);
							}
						}
					}
	  				if (count.totalCount()) {
	  					$('#data').html('<h1>'+count.totalCount()+'</h1>'+JSON.stringify(stnObj));
	  					console.log(count);
	  				}
				});
			}
			window.setInterval(getData, 30000);
		</script>
	</body>
</html>