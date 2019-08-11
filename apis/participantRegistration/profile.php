<?php

	include('../db.php');

	$token = $_GET["q"];

	if($_SERVER["REQUEST_METHOD"] === "GET" && $token != "") {

		$query = mysqli_query($conn, "SELECT * FROM users where token ='".$token."'");

		if (mysqli_num_rows($query) == 0) {

			echo(json_encode(array('status' => 'failure', 'result' => 'inno_id not found')));
		}

		else {

			$result = mysqli_fetch_array($query);
			echo(json_encode(array('status' => 'success', 'result' => $result)));
		}
	}

?>