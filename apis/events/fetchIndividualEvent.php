<?php

	include('../db.php');

	$eid = $_GET['q'];

	if($_SERVER["REQUEST_METHOD"] === "GET" && $eid != "") {

		//$query ="SELECT eid, title, description, rules, judging_criteria, max_par, `date`, venue, `time`,`date1`,`time1`, category, coordinatorName1, coordinatorContact1, coordinatorName2, coordinatorContact2, image_path,loginId,loginPassword FROM events where eid=".$eid;
        $query ="SELECT * FROM events where eid=".$eid;
		//echo ($query);
        $result =mysqli_query($conn, $query);        
        //echo ($result);        
		if (mysqli_num_rows($result) == 0) {

			echo(json_encode(array('status' => 'failure', 'result' => 'eid not found')));
		}

		else {

			$res = mysqli_fetch_array($result,MYSQLI_ASSOC);
			echo(json_encode(array('status' => 'success', 'result' => $res)));
		}
	}

?>