<?php

	include('../../db.php');

	$ca_id = $_GET['ca_id'];

	if($_SERVER["REQUEST_METHOD"] === "GET" && $ca_id != "") {

		$query ="SELECT * FROM ca_selection_responses WHERE ca_applicant_id=$ca_id";

		$result =mysqli_query($conn, $query);
		// echo $result;
		if (mysqli_num_rows($result) < 1) {
			echo(json_encode(array('status' => 'failure', 'result' => 'ca_id not found')));
		}

		else {
			$res = mysqli_fetch_array($result);
			echo(json_encode(array('status' => 'success', 'result' => $res)));
		}
	}

?>