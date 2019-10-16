<?php

	include('../../db.php');
	include('verifyCaAdmin.php');


	if($_SERVER["REQUEST_METHOD"] === "POST" ) {
		
		$query = mysqli_query($conn, "SELECT * FROM ca_selection_responses");

		if (mysqli_num_rows($query) == 0) {

			echo(json_encode(array('status' => 'failure', 'result' => 'CA not found')));
		}

		else {
			$result = array();
        	$ca_no = array();
			// $result = mysqli_fetch_array($query);
			while($res = mysqli_fetch_array($query, MYSQLI_ASSOC)) 
			{
    		$result[] = $res;
            $under_ca=$res["ca_applicant_id"];
			$q = mysqli_query($conn, "SELECT * FROM users WHERE ca_response='$under_ca' and paid=1");
			// echo mysqli_num_rows($q);
			$ca_no[]=mysqli_num_rows($q); 
			}
			// echo(json_encode(array('status' => 'success', 'result' => $result)));
			echo(json_encode(array('status' => 'success', 'result' => $result,'under_ca' => $ca_no)));

        }
	}

?>