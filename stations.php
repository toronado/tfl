<?php
	$stnJson = file_get_contents("json/stations.json");
	$stnArr = json_decode($stnJson, true);
	$li = '';
	foreach ($stnArr as $stn) {
		$lineLink = '';
		$stnLink = '<a href="#/'.$stn['id'].'/">'.$stn['name'].'</a>';
		foreach ($stn['lines'] as $line) {
			$lineLink .= '<a class="station-line '.$line.' bg-'.$line.'" href="#/'.$stn['id'].'/'.$line.'/">'.$line.'</a>';
		}
		$li .= '<li class="list-group-item">'
			. 		$stnLink
			.		'<span class="station-lines badge">'
			.			$lineLink
			.		'</span>'
			.	'</li>';
	}
	echo '<ul id="station-list" class="list-group">' . $li . '</ul>';
?>