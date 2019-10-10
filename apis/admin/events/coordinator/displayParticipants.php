<?php

	include('../../../db.php');
	include('./verifyAdmin.php');
	//verify Admin Credentials
	if(isset($login_id)&&isset($login_pwd)){
		$auth_verify=mysqli_query($conn,"SELECT * FROM events WHERE loginId='".$login_id."' AND loginPassword='".$login_pwd."'");
		if(mysqli_num_rows($auth_verify)==0){
			echo(json_encode(array('status' => 'failure', 'result' => 'Invalid Credentials')));	
			return;		
		}
	}
	

	$eid = $_GET["q"];

	if($_SERVER["REQUEST_METHOD"] === "GET" && $eid != "") {

		$result = $conn->query("SELECT inno_id, name, email, phone, college FROM users where inno_id =ANY(SELECT inno_id FROM events_registration WHERE event_id='".$eid."')");

		if (mysqli_num_rows($result) == 0) {

			echo(json_encode(array('status' => 'empty', 'result' => 'No Participants registered to this event')));
		}

		else {
			$res=array();
			while($row=$result->fetch_assoc()){
				array_push($res,$row);
			}
			echo(json_encode(array('status' => 'success','result' =>$res)));
		}
	}

?>