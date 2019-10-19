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
		$query = mysqli_query($conn, "SELECT * FROM events where eid ='".$eid."'");
		if (mysqli_num_rows($query) == 0) {
			echo(json_encode(array('status' => 'failure', 'result' => 'eid not found')));
		}
		else {
			$query = mysqli_query($conn, "SELECT * from users where inno_id=ANY(SELECT inno_id FROM events_registration where checkInStatus='1' AND event_id='".$eid."') ");
            if ($query) {
				$result = array();
				while($res = mysqli_fetch_array($query, MYSQLI_ASSOC)) 
				{
					if($eid == 105)
					{
			    		$query2 = mysqli_query($conn, "SELECT u.inno_id, u.name, u.email, u.phone, u.college, s.details FROM users u, special_event s where u.inno_id =".$res["inno_id"]." AND s.inno_id =".$res["inno_id"]." AND s.event_id = ".$eid."");
			    		if ($query2) 
			    		{
			    			$result[] = mysqli_fetch_array($query2);
			    		}
			    		
			    	}
			    	else
			    	{
			    		$query2 = mysqli_query($conn, "SELECT u.inno_id, u.name, u.email, u.phone, u.college FROM users u where u.inno_id =".$res["inno_id"]."");
			    		if ($query2) 
			    		{
			    			$result[] = mysqli_fetch_array($query2);
			    		}

			    	}
				}
				echo(json_encode(array('status' => 'success', 'result' => $result)));
			}
			else {
				echo(json_encode(array('status' => 'failure', 'result' => 'DB query failed')));	    			
		   	}
		}
	}
?>