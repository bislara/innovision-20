<?php

	include('../../db.php');

    include ('../../../vendor/autoload.php');
    use \Firebase\JWT\JWT;
    use Endroid\QrCode\QrCode;

    include('../../config.php');
    $secretKey = base64_decode(SECRET_KEY);

	$jwt = $_POST['token'];

	if( $_SERVER["REQUEST_METHOD"] === "POST" &&  $jwt != "") {
		
		try
        {
            $decoded = JWT::decode($jwt, $secretKey, array(ALGORITHM));
            $decoded_array = (array) $decoded;
            $data = $decoded_array['data']; 
            $inno_id = $data->inno_id;
            $email = $data->email;
        
            $query1 = mysqli_query($conn, "SELECT inno_id, name, email, college, qr_code FROM users where inno_id ='".$inno_id."'");

            if (mysqli_num_rows($query1) == 0) {
                return json_encode(array('status' => 'failure', 'result' => 'inno_id not found'));
            } 
            else 
            {
             //echo "hi";
            $query2 = mysqli_query($conn, "SELECT ca_id  FROM users where inno_id ='".$inno_id."'");
            $ca_id = mysqli_fetch_assoc($query2);

            if ($ca_id['ca_id']==0) {

            	$query3 = mysqli_query($conn, "SELECT name,phone,email,college,ca_id  FROM users where inno_id ='".$inno_id."'");
        	    $res = mysqli_fetch_assoc($query3);

				echo(json_encode(array('status' => 'new CA', 'result' => $res)));	
            }
            else
            {
            	$query = "SELECT * FROM ca_selection_responses WHERE ca_applicant_id='".$ca_id['ca_id']."'";

				$result =mysqli_query($conn, $query);
				
				if (mysqli_num_rows($result) < 1) {
					echo(json_encode(array('status' => 'failure', 'result' => 'ca_id not found')));
				}

				else {
					$res = mysqli_fetch_array($result);
					echo(json_encode(array('status' => 'success', 'result' => $res)));
				}
            }
		}
	   }
	   catch(Exception $e)
  	  {
            echo json_encode(array('status' => 'failure', 'result' => $e->getMessage()));
    	}
	}

?>