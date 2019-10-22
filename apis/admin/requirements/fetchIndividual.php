<?php

	include('../../db.php');
	include('verifyCaAdmin.php');

	$eid = $_GET['eid'];
	// echo $eid;
	if($_SERVER["REQUEST_METHOD"] === "GET" && $eid != "") {

		$query ="SELECT * FROM requirements WHERE eid=$eid";

		$result =mysqli_query($conn, $query);
		// echo $result;
		if (mysqli_num_rows($result) < 1) {
			$sql = "INSERT INTO requirements (eid) VALUES ($eid)";
			$result1 =mysqli_query($conn, $sql);
        	// echo mysqli_error($conn);return;
			// if(mysqli_num_rows($result1) >0)
			
			echo(json_encode(array('status' => 'added', 'result' => 'Added event')));
		}

		else {
			$res = mysqli_fetch_array($result);
			echo(json_encode(array('status' => 'success', 'result' => $res)));
		}
	}

?>