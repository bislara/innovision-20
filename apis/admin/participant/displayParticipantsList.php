<?php

	include('../../db.php');
    include('./verifyParticipantsAdmin.php');

		if (isset($status) && $status === "success") {

			$query = mysqli_query($conn, "SELECT * FROM users");

			$result = array();
			while($res = mysqli_fetch_array($query, MYSQLI_ASSOC)) {
	    		$result[] = $res;
			}

			echo(json_encode(array('status' => 'success', 'result' => $result)));
		}
	

?>