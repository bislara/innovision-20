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

				echo(json_encode(array('status' => 'new CA', 'result' => "create")));	
            }
            else
            {
                echo(json_encode(array('status' => 'success', 'result' => "update")));
            }
		}
	   }
	   catch(Exception $e)
  	  {
            echo json_encode(array('status' => 'failure', 'result' => $e->getMessage()));
    	}
	}

?>