<?php
$mysqli = new mysqli("localhost", "root", "root", "toronado");
if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
} else {
	$line = $_GET["q"];

	if ($line === 'all') {
		$params = '';
	} else {
		$params = 'WHERE ' . $line . ' = 1';
	}
	//$sqlQuery = "INSERT IGNORE INTO `tube_stations`(`id`, `name`, `bakerloo`, `central`, `circle`, `district`, `hammersmith`, `jubilee`, `metropolitan`, `northern`, `piccadilly`, `victoria`, `waterloo`) VALUES ('".$myArray[0]."', '".$myArray[1]."', '".$myArray[2]."', '".$myArray[3]."', '".$myArray[4]."', '".$myArray[5]."', '".$myArray[6]."', '".$myArray[7]."', '".$myArray[8]."', '".$myArray[9]."', '".$myArray[10]."', '".$myArray[11]."', '".$myArray[12]."')";
	$query = "SELECT * FROM tube_stations " .$params. " ORDER BY name";

	if ($result = $mysqli->query($query)) {

		$row_cnt = $result->num_rows;

		$json = '';
	    /* determine number of rows result set */
	    while ($row = $result->fetch_array()) {
	  		$json .= '{"id":"' . $row["id"] . '", "name":"' . $row["name"] . '"},';
	  	}
	  	echo '{"line":{"name":"'.$line.'","stops":"'.$row_cnt.'","stations":[' . rtrim($json, ",") . ']}}';

	    /* close result set */
	    	$result->close();
	}
}

//INSERT INTO `toronado`.`tube_stations` (`id`, `name`, `bakerloo`, `central`, `circle`, `district`, `hammersmith_city`, `jubilee`, `metropolitan`, `northern`, `piccadilly`, `victoria`, `waterloo_city`) VALUES ('ALD', 'Aldgate', '0', '0', '1', '0', '0', '0', '1', '0', '0', '0', '0');
?>