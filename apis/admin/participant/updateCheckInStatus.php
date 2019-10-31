<?php

	include('../../db.php');
	include('./verifyParticipantsAdmin.php');

	$id_list = $_POST['id_list'];

	if($_SERVER["REQUEST_METHOD"] === "POST") {

		// echo($id_list[0].'<br>');
		// echo($id_list[1].'<br>');
		// echo($id_list[2].'<br>');
		$flag=true;
		for ( $i=0; $i<sizeof($id_list); $i++) {

			//echo ('UPDATE ca_selection_responses SET selected = '.$id_list[$i]['selected'].' WHERE ca_applicant_id ='.$id_list[$i]['ca_applicant_id']);
			if($id_list[$i]['checked_in']){
				$query= mysqli_query($conn,'SELECT paid from users WHERE inno_id ='.$id_list[$i]['inno_id'])->fetch_assoc();
				if($query['paid']){
					//echo('UPDATE users SET allotted_hostel='.$id_list[$i]['hostel'].', checked_in = '.$id_list[$i]['checked_in'].' WHERE inno_id ='.$id_list[$i]['inno_id']);return;
					$query = mysqli_query( $conn, 'UPDATE users SET allotted_hostel="'.$id_list[$i]['hostel'].'",checked_in = '.$id_list[$i]['checked_in'].' WHERE inno_id ='.$id_list[$i]['inno_id']);	
				}else{
					$flag=false;
				}
			}else{
				$query = mysqli_query( $conn, 'UPDATE users SET allotted_hostel="", checked_in = '.$id_list[$i]['checked_in'].' WHERE inno_id ='.$id_list[$i]['inno_id']);
			}
			
			//echo mysqli_error($conn);return;
			if (!$query) {

				echo(json_encode(array('status' => 'failure', 'result' => 'DB operation failed or ca_applicant_id not found')));
			}

		}
		if(!$flag){
			echo(json_encode(array('status' => 'success', 'result' => 'Some Records were not updated')));
		}else{
			echo(json_encode(array('status' => 'success', 'result' => 'successfully updated')));
		}

		
	}

?>