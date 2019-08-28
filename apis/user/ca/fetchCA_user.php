<?php

	include('../../db.php');

    include ('../../../vendor/autoload.php');
    use \Firebase\JWT\JWT;
    use Endroid\QrCode\QrCode;

    include('../../config.php');
    $secretKey = base64_decode(SECRET_KEY);



	$ca_id = $_GET['ca_id'];

	if($_SERVER["REQUEST_METHOD"] === "GET" && $ca_id != "") {

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
            } else {
                $basicInfo = mysqli_fetch_array($query1,MYSQLI_ASSOC);           
            }



		$query ="SELECT * FROM ca_selection_responses WHERE ca_applicant_id=$ca_id";

		$result =mysqli_query($conn, $query);
		
		if (mysqli_num_rows($result) < 1) {
			echo(json_encode(array('status' => 'failure', 'result' => 'ca_id not found')));
		}

		else {
			$res = mysqli_fetch_array($result);
			echo(json_encode(array('status' => 'success', 'result' => $res)));
		}
	   }
	   catch(Exception $e)
  	  {
            echo json_encode(array('status' => 'failure', 'result' => $e->getMessage()));
    	}
	}

?>