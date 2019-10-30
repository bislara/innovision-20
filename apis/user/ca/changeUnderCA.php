<?php

	include('../../db.php');

    include ('../../../vendor/autoload.php');
    use \Firebase\JWT\JWT;

    include('../../config.php');
    $secretKey = base64_decode(SECRET_KEY);

    $headers = apache_request_headers();

    $authHeader= $headers["Authorization"];
    list($jwt) = sscanf( $authHeader, 'Bearer %s');    
    $id=$_POST['underCA'];

	if( $_SERVER["REQUEST_METHOD"] === "POST" &&  $jwt != "") {
		
		try
        {
            $decoded = JWT::decode($jwt, $secretKey, array(ALGORITHM));
            $decoded_array = (array) $decoded;
            $data = $decoded_array['data']; 
            $inno_id = $data->inno_id;
            $email = $data->email;
        
            $query1 = mysqli_query($conn, "UPDATE users set ca_response=".$id." where inno_id ='".$inno_id."'");

            echo json_encode(array('status' => 'success', 'result' => "update"));
	    }
	    catch(Exception $e)
  	    {
            echo json_encode(array('status' => 'failure', 'result' => $e->getMessage()));
        }
	}

?>