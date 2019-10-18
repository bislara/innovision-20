<?php

	use \Firebase\JWT\JWT;
	require '../../../vendor/autoload.php';

	include ('../../db.php');
	include ('../../config.php');
	$jwt = $_POST['token'];
    $secretKey = base64_decode(SECRET_KEY);

	if (isset($jwt) && $jwt ){
		if($_SERVER["REQUEST_METHOD"] === "POST" && $jwt != ""){
			try 
			{
				$decoded = JWT::decode($jwt, $secretKey, array(ALGORITHM));
				
				$decoded_array = (array) $decoded;
				$data = $decoded_array['data'];                 
				$email = $data->email;
				// print_r($data);return;
				
				$query = mysqli_query($conn, "SELECT * FROM users where email ='".$email."'");
				if (mysqli_num_rows($query) == 1) {
					$rst = mysqli_fetch_array($query)["reset_init"];
					if($rst){
						echo(json_encode(array('status' => 'success', 'result' => 'Link Valid')));
					}else{
						echo(json_encode(array('status' => 'failure', 'result' => 'Link Used Already')));
					}
					
					
				}else{
					return json_encode(array('status' => 'failure', 'result' => 'Multiple Emails'));
				}

			}
			catch(Exception $e) 
			{
				echo json_encode(array('status' => 'failure', 'result' => $e->getMessage()));
			}
		}else{
			echo json_encode(array('status' => 'failure', 'result' => 'Invalid Request'));    
		}
	}else{
		echo json_encode(array('status' => 'failure', 'result' => 'token missing'));
	}
    
?>