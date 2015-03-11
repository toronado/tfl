<?php
$mysqli = new mysqli("localhost", "root", "root", "toronado");
if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
} else {

	$stn = $_GET["sid"];
	$query = 'SELECT id, name FROM tube_stations WHERE id = "'.$stn.'" ORDER BY name';
	$result = $mysqli->query($query);

	$rows = array();
	while ($r = mysqli_fetch_assoc($result)) {
	    $rows[] = $r;
	}
	print json_encode($rows);
}

//INSERT INTO `toronado`.`tube_stations` (`id`, `name`, `bakerloo`, `central`, `circle`, `district`, `hammersmith_city`, `jubilee`, `metropolitan`, `northern`, `piccadilly`, `victoria`, `waterloo_city`) VALUES ('ALD', 'Aldgate', '0', '0', '1', '0', '0', '0', '1', '0', '0', '0', '0');
?>