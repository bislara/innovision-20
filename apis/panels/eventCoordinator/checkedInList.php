<?php

	include('../../db.php');

	$eid = $_GET["q"];

	if($_SERVER["REQUEST_METHOD"] === "GET" && $eid != "") {

		$query = mysqli_query($conn, "SELECT * FROM events where eid ='".$eid."'");

		if (mysqli_num_rows($query) == 0) {

			echo(json_encode(array('status' => 'failure', 'result' => 'eid not found')));
		}

		else {

			$query = mysqli_query($conn, "SELECT * FROM events_registration where event_id='".$eid."' AND checked_in = 1");

			if ($query) {

				$result = array();
				while($res = mysqli_fetch_array($query, MYSQL_ASSOC)) {

		    		$query2 = mysqli_query($conn, "SELECT inno_id, name, email, phone, college FROM users where inno_id =".$res["inno_id"]);
		    		if ($query2) {

		    			$result[] = mysqli_fetch_array($query2);
		    		}
		    		else {

						echo(json_encode(array('status' => 'failure', 'result' => 'DB query failed')));	    			
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