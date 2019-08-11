<?php

	include('../../db.php');

	$inno_id = $_GET["q"];

	if($_SERVER["REQUEST_METHOD"] === "GET" && $inno_id != "") {

		$query = mysqli_query($conn, "SELECT * FROM users where inno_id ='".$inno_id."'");

		if (mysqli_num_rows($query) == 0) {

			echo(json_encode(array('status' => 'failure', 'result' => 'inno_id not found')));
		}

		else {

			$result = mysqli_fetch_array($query);
			echo(json_encode(array('status' => 'success', 'result' => $result)));
		}
	}

?>