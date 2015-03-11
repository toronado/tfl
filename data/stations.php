<?php
	$stnJson = file_get_contents("json/stations.json");
	$stnArr = json_decode($stnJson, true);
	$li = '';
	foreach ($stnArr as $stn) {
		$lineSpan = '';
		foreach ($stn['lines'] as $line) {
			//$lineLink .= '<a class="station-line '.$line.' bg-'.$line.'" href="#/'.$stn['id'].'/'.$line.'/">'.$line.'</a>';
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
?>