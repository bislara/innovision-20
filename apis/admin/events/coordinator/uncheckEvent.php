<?php

	include('../../../db.php');
	include('./verifyAdmin.php');
	//verify Admin Credentials
	if(isset($login_id)&&isset($login_pwd)){
		$auth_verify=mysqli_query($conn,"SELECT * FROM events WHERE loginId='".$login_id."' AND loginPassword='".$login_pwd."'");
		if(mysqli_num_rows($auth_verify)==0){
			//echo("Here");
			echo(json_encode(array('status' => 'failure', 'result' => 'Invalid Credentials')));	
			return;		
		}
	}

	$eid = $_GET["q"];
	$inno_id = $_GET["i"];
	//echo($inno_id);
	if($_SERVER["REQUEST_METHOD"] === "GET" && $eid != ""  && $inno_id != "") {
		$query = mysqli_query($conn, "SELECT * FROM events_registration where inno_id='".$inno_id."' AND event_id ='".$eid."'");
		if (mysqli_num_rows($query) == 0) {
			echo(json_encode(array('status' => 'failure', 'result' => 'Invalid Input')));
		}
		else {
			$query = mysqli_query($conn, "UPDATE events_registration SET checkInStatus = 0 where inno_id='".$inno_id."' AND event_id = '".$eid."'");
            if ($query) {
				echo(json_encode(array('status' => 'success', 'result' => 'Unchecked ')));
			}
			else {
				echo(json_encode(array('status' => 'failure', 'result' => 'DB query failed')));	    			
		   	}
		}
	}
?>