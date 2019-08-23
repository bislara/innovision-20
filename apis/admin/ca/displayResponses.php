<?php

	include('../../db.php');

	if($_SERVER["REQUEST_METHOD"] === "POST" ) {
		
		$query = mysqli_query($conn, "SELECT * FROM ca_selection_responses");

		if (mysqli_num_rows($query) == 0) {

			echo(json_encode(array('status' => 'failure', 'result' => 'CA not found')));
		}

		else {
			$result = array();
			// $result = mysqli_fetch_array($query);
			while($res = mysqli_fetch_array($query, MYSQLI_ASSOC)) 
			{
    		$result[] = $res;
			}
			echo(json_encode(array('status' => 'success', 'result' => $result)));
		}
	}

?>