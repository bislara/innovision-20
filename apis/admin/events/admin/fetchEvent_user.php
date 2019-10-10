<?php

	include('../../../db.php');

	include('../../../../vendor/autoload.php');
    use \Firebase\JWT\JWT; 
    
    include('../../../config.php');
    

	$eid = $_POST['eid'];
	
	$jwt=$_POST['token'];
	
	 $secretKey = base64_decode(SECRET_KEY);
	
	if($_SERVER["REQUEST_METHOD"] === "POST" && $eid != "") {
		try
        {
        	$decoded = JWT::decode($jwt, $secretKey, array(ALGORITHM));
            $decoded_array = (array) $decoded;
            $data = $decoded_array['data']; 
            $inno_id = $data->inno_id;
            $email = $data->email;
         	// echo $inno_id;
            $query = mysqli_query($conn, "SELECT inno_id, name, email, college FROM users where inno_id ='".$inno_id."'");
            if (mysqli_num_rows($query) == 0) {
                return json_encode(array('status' => 'failure', 'result' => 'inno_id not found'));
            } else {
                     
                    $query ="SELECT eid,title,description,rules,judging_criteria,date,venue,time,date1,time1,category,coordinatorName1,coordinatorContact1,coordinatorName2,coordinatorContact2,image_path FROM events WHERE eid=$eid";

					$result =mysqli_query($conn, $query);
					 // echo $result;
					if (mysqli_num_rows($result) < 1) {
						echo(json_encode(array('status' => 'failure', 'result' => 'eid not found')));
					}

					else {
            			$sql1 = "SELECT * from events_registration WHERE inno_id='".$inno_id."' AND event_id = '".$eid."'";
            			// echo $sql1;
            			$res1 =mysqli_query($conn, $sql1);
            			if(mysqli_num_rows($res1) > 0)
            			{
            				$status=1;
            			}
            			else
            				$status=0;

						$res = mysqli_fetch_array($result);
						echo(json_encode(array('status' => 'success', 'result' => $res, 'register_status' => $status )));
					}
            }

	
	   }
	   catch(Exception $e) 
        {
            // echo json_encode(array('status' => 'failure', 'result' => $e->getMessage()));
            $query ="SELECT eid,title,description,rules,judging_criteria,date,venue,time,date1,time1,category,coordinatorName1,coordinatorContact1,coordinatorName2,coordinatorContact2,image_path FROM events WHERE eid=$eid";

            $result =mysqli_query($conn, $query);
            $res = mysqli_fetch_array($result);
            echo(json_encode(array('status' => 'success', 'result' => $res)));
            
        }
	}

?>