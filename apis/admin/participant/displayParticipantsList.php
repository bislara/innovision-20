<?php

	include('../../db.php');
	include('./verifyParticipantsAdmin.php');

	$id=$_GET['q1'];
	$ca_id=$_GET['q2'];

	

		
		if (isset($status) && $status === "success") {			
        	$query = mysqli_query($conn, "SELECT count(*) cnt FROM users where paid='1'");	
        	$count= mysqli_fetch_array($query,MYSQLI_ASSOC);			
			if($id!='0'){
				$query = mysqli_query($conn, "SELECT * FROM users WHERE inno_id='".$id."'");				
			}else if($ca_id!='0'){
				$query = mysqli_query($conn, "SELECT * FROM users WHERE ca_response='".$ca_id."' or ca_id='".$ca_id."'");				
			}else{
				$query = mysqli_query($conn, "SELECT * FROM users");	
			}			
        	

			$result = array();
			while($res = mysqli_fetch_array($query, MYSQLI_ASSOC)) {
	    		$result[] = $res;
			}

			echo(json_encode(array('status' => 'success', 'result' => $result,'paid'=>$count['cnt'])));
		}
	

?>