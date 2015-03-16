<!DOCTYPE html>
<html>
	<head>
		<title>Functions</title>
		<link href="/css/bootstrap.min.css" rel="stylesheet">
		<style type="text/css">
			#json { height: 200px; padding: 15px; background-color: #eee; }
			#json textarea { width: 100%; height: 100%; background-color: transparent; border:none; }
		</style>
	</head>
	<body>
		<div id="json">
			<textarea id="json-string" rows="10"></textarea>
		</div>
		<div class="container">
			<div class="row">
				<div class="col-md-6">
					<h4>Stations</h4>
					<div id="data"></div>
				</div>
				<div class="col-md-6">
					<h4>Updates</h4>
					<div id="count"></div>
				</div>
			</div>
		</div>
		<script type="text/javascript" src="/js/jquery-2.1.3.min.js"></script>
		<script type="text/javascript">
			$.get( 'json/stationsObj.json', function(data) {
				stnObj = data;
				getData();
				window.setInterval(getData, 30000);
			});
			
			function getData() {
				var stns = 'bakerloo,central,circle,district,hammersmith-city,jubilee,metropolitan,northern,piccadilly,victoria,waterloo-city'
				var url = 'http://api.tfl.gov.uk/Line/%7Bids%7D/Arrivals?ids='+stns;
				var count = {
					'stn' : [],
					'line' : [],
					'platform' : [],
					totalCount : function() {
						return this.stn.length + this.line.length + this.platform.length;
					}
				}
				var jqxhr = $.get( url, function(data) {
					var i, dataLen;
					dataLen = data.length;
					for (i=0; i<dataLen; i++) {
						var naptanId = data[i]['naptanId'].substr(8);
						var stnName = data[i]['stationName'].split(' Underground Station')[0];
						var lineName = data[i]['lineName'];
						var platformName = data[i]['platformName'];
						if (!stnObj[naptanId]) {
							stnObj[naptanId] = {'name': stnName, 'lines': {}};
							stnObj[naptanId].lines[lineName] = [platformName];
							count.stn.push(stnName+', '+lineName+' line added');

						} else {
							if (stnObj[naptanId].lines[lineName]) {
								if (stnObj[naptanId].lines[lineName].indexOf(platformName) === -1) {
									stnObj[naptanId].lines[lineName].push(platformName);
									count.platform.push(platformName+' added to '+lineName+' line, '+stnName);
								}
							} else {
								stnObj[naptanId].lines[lineName] = [platformName];
								count.line.push(platformName+' added to '+stnName+', '+lineName+' line');
							}
						}
					}
	  				if (count.totalCount()) {
	  					var html, countHtml, i;
	  					html = '';
	  					countHtml = '';
	  					for (key in stnObj) {
	  						html += '<li>'+key+' - '+stnObj[key].name+'<ul>';
	  							for (line in stnObj[key].lines) {
	  								html+= '<li>'+line+'<ul>';
	  								for (i=0; i<stnObj[key].lines[line].length; i++) {
	  									html+= '<li>'+stnObj[key].lines[line][i]+'</li>';
	  								}
	  								html+='</ul></li>';
	  							}
	  						html += '</ul></li>';
	  					}
	  					for (key in count) {
	  						if (count[key].length) {
	  							for (i=0; i<count[key].length; i++) {
	  								countHtml += '<li>'+count[key][i]+'</li>';
	  							}
	  						}
	  					}
	  					$('#count').append('<h5>'+count.totalCount()+' updated ('+data[0]['timestamp']+')</h5><ul>'+countHtml+'</ul>');
	  					$('#data').html('<ol>'+html+'</ol>');
	  					$.ajax({
						    type: "POST",
						    url: "functions.php",
						    data: { 
						    	q : 'stnJsonUpdate',
						    	data: JSON.stringify(stnObj)
						    }
						})
						.done(function( data ) {
    						stnObj = data;
							$('#json-string').html(data);
  						});
	  				}
				});
			}
		</script>
	</body>
</html>