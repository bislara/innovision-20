<?php

	include('../../db.php');
	include('./verifyParticipantsAdmin.php');

	$id=$_GET['q'];

	

		
		if (isset($status) && $status === "success") {			
			if($id=='0'){
				$query = mysqli_query($conn, "SELECT * FROM users");	
			}else{
				$query = mysqli_query($conn, "SELECT * FROM users WHERE inno_id='".$id."'");
			}			

			$result = array();
			while($res = mysqli_fetch_array($query, MYSQLI_ASSOC)) {
	    		$result[] = $res;
			}

			echo(json_encode(array('status' => 'success', 'result' => $result)));
		}
	

?>