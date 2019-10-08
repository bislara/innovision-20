<?php

	include('../../../db.php');

	$eid = $_GET['eid'];

	if($_SERVER["REQUEST_METHOD"] === "GET" && $eid != "") {

		$query ="SELECT eid,title,description,rules,judging_criteria,date,venue,time,date1,time1,category,coordinatorName1,coordinatorContact1,coordinatorName2,coordinatorContact2,image_path,loginId,loginPassword FROM events WHERE eid=$eid";

		$result =mysqli_query($conn, $query);
		// echo $result;
		if (mysqli_num_rows($result) < 1) {
			echo(json_encode(array('status' => 'failure', 'result' => 'eid not found')));
		}

		else {
			$res = $result->fetch_assoc();
			$res['date'] = date("Y-m-d", strtotime($res['date']));
			if($res['date1']!="")
                $res['date1' ] = date("Y-m-d", strtotime($res['date1']));
			echo(json_encode(array('status' => 'success', 'result' => $res)));
		}
	}

?>