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

		if($eid == 105)
		{
			$result = $conn->query("SELECT u.inno_id, u.name, u.email, u.phone, u.college, e.checkInStatus, s.details FROM users u, events_registration e, special_event s where u.inno_id = e.inno_id AND u.inno_id = s.inno_id AND s.event_id = '".$eid."' AND e.event_id='".$eid."' ORDER BY u.inno_id");
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
		else
		{
			$result = $conn->query("SELECT u.inno_id, u.name, u.email, u.phone, u.college,u.paid, e.checkInStatus FROM users u, events_registration e where u.inno_id = e.inno_id AND e.event_id='".$eid."' ORDER BY u.inno_id");
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
	}
?>