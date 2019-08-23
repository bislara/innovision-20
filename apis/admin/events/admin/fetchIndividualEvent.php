<?php

	include('../db.php');

	$eid = $_GET['q'];

	if($_SERVER["REQUEST_METHOD"] === "GET" && $eid != "") {

		$query ="SELECT * FROM events WHERE eid=$eid";

		$result =mysqli_query($conn, $query);
		// echo $result;
		if (mysqli_num_rows($result) < 1) {
			echo(json_encode(array('status' => 'failure', 'result' => 'eid not found')));
		}

		else {
			$res = mysqli_fetch_array($result);
			echo(json_encode(array('status' => 'success', 'result' => $res)));
		}
	}

?>