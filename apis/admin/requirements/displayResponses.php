<?php

	include('../../db.php');
	include('verifyCaAdmin.php');


	if($_SERVER["REQUEST_METHOD"] === "POST" ) {
		
		$query = mysqli_query($conn, "SELECT eid,title  FROM events");

		if (mysqli_num_rows($query) == 0) {

			echo(json_encode(array('status' => 'failure', 'result' => 'Event not found')));
		}

		else {
			$result = array();
        	
			while($res = mysqli_fetch_array($query, MYSQLI_ASSOC)) 
			{
    		$result[] = $res; 
			}
			// echo(json_encode(array('status' => 'success', 'result' => $result)));
			echo(json_encode(array('status' => 'success', 'result' => $result)));

        }
	}

?>