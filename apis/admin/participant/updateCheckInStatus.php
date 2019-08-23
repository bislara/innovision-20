<?php

	include('../../db.php');

	$id_list = $_POST['id_list'];

	if($_SERVER["REQUEST_METHOD"] === "POST") {

		// echo($id_list[0].'<br>');
		// echo($id_list[1].'<br>');
		// echo($id_list[2].'<br>');

		for ( $i=0; $i<sizeof($id_list); $i++) {

			//echo ('UPDATE ca_selection_responses SET selected = '.$id_list[$i]['selected'].' WHERE ca_applicant_id ='.$id_list[$i]['ca_applicant_id']);

			$query = mysqli_query( $conn, 'UPDATE users SET checked_in = '.$id_list[$i]['checked_in'].' WHERE inno_id ='.$id_list[$i]['inno_id']);

			if (!$query) {

				echo(json_encode(array('status' => 'failure', 'result' => 'DB operation failed or ca_applicant_id not found')));
			}
		}

		echo(json_encode(array('status' => 'success', 'result' => 'successfully updated')));
	}

?>