<?php

	include('../../db.php');
	include('./verifyParticipantsAdmin.php');
		
		if (isset($status) && $status === "success") {	
            $hostel_count=array(
                'ssb'=>0,
                'kms'=>0,
                'cvr'=>0,
                'mv'=>0,
                'gdb'=>0,
                'dba'=>0,
                'mss'=>0,
                'hb'=>0,
                'sd'=>0,
                'vs'=>0
            );
            foreach($hostel_count as $key=>$value){                
                $query = mysqli_query($conn, "SELECT count(*) cnt FROM users where allotted_hostel='".$key."'");	
                $count= mysqli_fetch_array($query,MYSQLI_ASSOC);
                $hostel_count[$key]=$count['cnt'];
            }
			echo(json_encode(array('status' => 'success', 'result' => $hostel_count,)));
		}
	

?>