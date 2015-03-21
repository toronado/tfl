<!DOCTYPE html>
<html>
	<head>
		<title>Functions</title>
		<link href="/css/bootstrap.min.css" rel="stylesheet">
		<style type="text/css">
			#json { padding: 15px; background-color: #eee; }
			#json textarea { width: 100%; height: 100%; background-color: transparent; border:none; }
		</style>
	</head>
	<body>
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-4">
					<h4>Stations</h4>
					<div id="data"></div>
				</div>
				<div class="col-md-4">
					<h4>Json</h4>
					<div id="json">
						<textarea id="json-string" rows="10"></textarea>
					</div>
				</div>
				<div class="col-md-4">
					<h4>Updates</h4>
					<div id="count"></div>
				</div>
			</div>
		</div>
		<script type="text/javascript" src="/js/jquery-2.1.3.min.js"></script>
		<script type="text/javascript">

			var type = window.location.hash.substr(1);
			switch (type) {
				case 'get-data':
					$.get('json/stationsObj.json', function(data) {
						stnObj = data;
					})
					.done(function(){
						window.setInterval(getData, 30000);
						getData();
					});
					break;
				case 'match-json':
					matchJson();
					break;
				case 'unique':
					unique();
					break;
				case 'mergeJson':
					mergeJson();
					break;
			}

			function mergeJson() {
				var jsonArr = [];
				var stn1 = $.get( 'json/stations.json').done(function (data) {
					jsonArr[0] = data;
				});
				var stn2 = $.get( 'json/stationsObj.json').done(function (data) {
					jsonArr[1] = data;
				});
				
				$( document ).ajaxComplete(function( event,request, settings ) {
					if (jsonArr.length === 2) {
						var i, j, json1, json2;
						json1 = jsonArr[0];
						json2 = jsonArr[1];
						for (i=0; i<270; i++) {
							var lineArr = json1[i].lines;
							var lineLen = lineArr.length;
							var objLen = Object.keys(json2[json1[i]['id']]['lines']).length;
							//for (j=0; j<lineArr.length; j++ ) {
								//var lineName = rtnName(lineArr[j]);
								//var objLen = Object.keys(json2[json1[i]['id']]['lines']).length;
								//if (!json2[json1[i]['id']]['lines'][lineName]) {
									//console.log(json1[i].id);
									//console.log(json2[json1[i]['id']]['lines'][lineName]);
								//}
								//if (!json2[json1[i].id].lines[json1[i].lines[j]]) {
									//console.log(json1[i].id);
								//}
								if (lineLen !== objLen) {
									console.log(json1[i].id);
								}
							//}
						}
					}
				});
			}

			function rtnName (name) {
				var names = {
					'hammersmith-city' : 'Hammersmith & City',
					'waterloo-city' :  'Waterloo & City'
				}
				if (names[name]) {
					return names[name];
				}
				return name.charAt(0).toUpperCase() + name.slice(1);
			}

			function unique() {
				$.get( 'json/stationsObj.json', function(data) {
					for (key in data) {
						for (lines in data[key]['lines']) {
							data[key]['lines'][lines] = data[key]['lines'][lines].reduce(function(a,b){if(a.indexOf(b)<0)a.push(b);return a;},[]);
							//if (data[key]['lines'][lines].length === 1) {
								//console.log(data[key]);
							//}
						}
					};
					console.log(JSON.stringify(data));
				});
			}

			function matchJson() {
				$.get( 'json/stations.json', function(data) {
					json1 = data;
				})
				.done(function(json1) {
					$.get( 'json/stationsObj.json', function(data) {
						json2 = data;
					})
					.done(function() {
						var missing = [];
						for (var i=0; i<json1.length; i++) {
							if (!json2[json1[i].id]) {
								missing.push(json1[i].name);
							}
						}
						console.log(missing);
					});
				});
			}

			function rtnDirection(str) {
				if (str.indexOf('Eastbound') > -1) {
					return 'Eastbound';
				}
				if (str.indexOf('Westbound') > -1) {
					return 'Westbound';
				}
				if (str.indexOf('Northbound') > -1) {
					return 'Northbound';
				}
				if (str.indexOf('Southbound') > -1) {
					return 'Southbound';
				}
				if (str.indexOf('Inner') > -1) {
					return 'Inner Rail';
				}
				if (str.indexOf('Outer') > -1) {
					return 'Outer Rail';
				}
				return 'xxx';
			}
			
			function getData() {
				var stns = 'bakerloo,central,circle,district,hammersmith-city,jubilee,metropolitan,northern,piccadilly,victoria,waterloo-city';
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
						var platformName = rtnDirection(data[i]['platformName']);
						if (!stnObj[naptanId]) {
							stnObj[naptanId] = {'name': stnName, 'lines': {}};
							stnObj[naptanId].lines[lineName] = [platformName];
							count.stn.push(naptanId+': '+stnName+' station added with  '+lineName);

						} else {
							if (stnObj[naptanId].lines[lineName]) {
								if (platformName !== 'xxx') {
									if (stnObj[naptanId].lines[lineName].indexOf(platformName) === -1) {
										stnObj[naptanId].lines[lineName].push(platformName);
										count.platform.push(naptanId+': '+platformName+' added to '+lineName+' line, '+stnName);
									}
								}
								
							} else {
								stnObj[naptanId].lines[lineName] = [platformName];
								count.line.push(naptanId+': '+lineName+' added to '+stnName+', with '+platformName);
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
	  					//$('#json-string').html(JSON.stringify(stnObj));
	  					/*$.ajax({
						    type: "POST",
						    url: "functions.php",
						    data: { 
						    	q : 'stnJsonUpdate',
						    	data: JSON.stringify(stnObj)
						    }
						})
						.done(function( data ) {
    						stnObj = JSON.parse(data);
							$('#json-string').html(data);
  						});*/
	  				}
				});
			}
		</script>
	</body>
</html>