<?php

	include('../../db.php');
	
	include ('../../../vendor/autoload.php');
    use \Firebase\JWT\JWT;

    include('../../config.php');

    $headers = apache_request_headers();

    $authHeader= $headers["Authorization"];
    list($jwt) = sscanf( $authHeader, 'Bearer %s');    

	
	$secretKey = base64_decode(SECRET_KEY);
	
	if (isset($jwt) && $jwt )
    {    
    	if($_SERVER["REQUEST_METHOD"] === "POST" && $jwt != "") {
			try 
			{

				$decoded = JWT::decode($jwt, $secretKey, array(ALGORITHM));
				$decoded_array = (array) $decoded;
				$data = $decoded_array['data']; 
				$inno_id = $data->inno_id;
				$email = $data->email;

				$query = mysqli_query($conn, "SELECT * FROM users where inno_id ='".$inno_id."'");
				if (mysqli_num_rows($query) == 0) {
					return json_encode(array('status' => 'failure', 'result' => 'inno_id not found'));
				} else {
					$user = mysqli_fetch_array($query,MYSQLI_ASSOC);           
				}
				
				$data = array(
					'email' => 'arishh2@gmail.com',
					'password' => 'HEiTE67IKFv'
				);
				 
				$payload = json_encode($data);
				 
				// Prepare new cURL resource
				$ch = curl_init('https://www.thecollegefever.com/v1/auth/basiclogin');
				curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
				curl_setopt($ch, CURLINFO_HEADER_OUT, true);
				curl_setopt($ch, CURLOPT_POST, true);
				curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
				 
				// Set HTTP Header for POST request 
				curl_setopt($ch, CURLOPT_HTTPHEADER, array(
					'Content-Type: application/json',
					'Content-Length: ' . strlen($payload))
				);
				 
				// Submit the POST request STEP-1
				$result = curl_exec($ch);
				
				$session_token=json_decode($result)->sessionId;

				// echo $user['inno_id'];return;
				// $payload=json_encode($data);				
				$payload='{
					"eventId":6362,
					"totalFare":600,
					"addExtra":0,
					"attendingEvents":[
					{
					"programId":17435,
					"programName":"Innovision",
					"subProgramName":"Entry Ticket",
					"fare":600,
					"attendees":[
					{
					"name":"'.$user['name'].'",
					"email":"'.$user['email'].'",
					"phone":"'.$user['phone'].'",
					"college":"'.$user['college'].'",
					"sex":"'.strtoupper($user['gender']).'",
					"extraInfoValue":"'.$user['address'].'"
					}
					]
					}
					]
					}';
				// print_r($data);return;

				// Prepare new cURL resource
				$req = curl_init('https://www.thecollegefever.com/v1/booking/bookticket');
				//setting up the session token in auth Cookie				
				curl_setopt($req, CURLOPT_COOKIE, "auth=".$session_token.";path=/; domain=.thecollegefever.com;");
				curl_setopt($req, CURLOPT_RETURNTRANSFER, true);
				curl_setopt($req, CURLINFO_HEADER_OUT, true);
				curl_setopt($req, CURLOPT_POST, true);
				curl_setopt($req, CURLOPT_POSTFIELDS, $payload);
				 
				// Set HTTP Header for POST request 
				curl_setopt($req, CURLOPT_HTTPHEADER, array(
					'Content-Type: application/json',
					'Content-Length: ' . strlen($payload))
				);
				 
				// Submit the POST request STEP-2
				$result = curl_exec($req);

				
				echo json_encode(array('status' => 'success', 'result' => $result));
			}
			catch(Exception $e) 
			{
				echo json_encode(array('status' => 'failure', 'result' => $e->getMessage()));
			}
		}
	}
?>