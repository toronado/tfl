<?php
	if ((!empty($_POST["q"]))) {
		if ($_POST["q"] === 'stnJsonUpdate') {
			updateStnList();
		} else {
			echo 'Invalid Query';
		}
	}

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

	function updateStnList() {
    	$data = $_POST['data'];
		if ($data) {
			 file_put_contents('json/stationsObj.json', $data);
			 echo $data;
		}
	}
?>