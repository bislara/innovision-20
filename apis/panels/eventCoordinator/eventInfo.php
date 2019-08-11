<?php

	include('../../db.php');

	$eid = $_GET["q"];

	if($_SERVER["REQUEST_METHOD"] === "GET" && $eid != "") {

		$query = mysqli_query($conn, "SELECT * FROM events where eid ='".$eid."'");

		if (mysqli_num_rows($query) == 0) {

			echo(json_encode(array('status' => 'failure', 'result' => 'eid not found')));
		}

		else {

			$result = mysqli_fetch_array($query);
			echo(json_encode(array('status' => 'success', 'result' => $result)));
		}
	}

?>