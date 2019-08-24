<?php
    
	include('../../../db.php');
	include('../../../../vendor/autoload.php');
	use \Firebase\JWT\JWT; 

	include('./config.php');
	include('../../../config.php');

	
    
	if($_SERVER["REQUEST_METHOD"] === "GET") {

		//verification if the request was sent by Admin or User

		$secretKey = base64_decode(SECRET_KEY);
		$headers = apache_request_headers();
		if(isset($headers["Authorization"])){
			$authHeader= $headers["Authorization"];
			list($jwt) = sscanf( $authHeader, 'Bearer %s');    
			if (isset($jwt) && $jwt ) {

				try {

					$DecodedDataArray = JWT::decode(
						$jwt,
						$secretKey,
						array(ALGORITHM)
					);
					// echo ($DecodedDataArray->data->inno_id);
					// echo ($DecodedDataArray->data->email);
					if ($DecodedDataArray->data->inno_id === INNO_ID && $DecodedDataArray->data->email === EMAIL) {

						$query = mysqli_query($conn, "SELECT * FROM events");

						$result = array();
						while($res = mysqli_fetch_array($query, MYSQLI_ASSOC)) {
							$result[] = $res;
						}

						echo(json_encode(array('status' => 'success', 'result' => $result)));
					} else {

						return json_encode(array('status' => 'failure', 'result' => 'unauthorised access'));
					}
					
				} catch (Exception $e) {
					
					return json_encode(array('status' => 'failure', 'resultt' => $e->getMessage()));
				}

			} else {
				return json_encode(array('status' => 'failure', 'result' => 'token missing'));			
			}		
		}else{
			$query = mysqli_query($conn, "SELECT * FROM events");

			$result = array();
			while($res = mysqli_fetch_array($query, MYSQLI_ASSOC)) {
				unset($res['loginId']);
				unset($res['loginPassword']);
				unset($res['winner1']);
				unset($res['winner2']);
				unset($res['filled']);
				unset($res['results_submitted']);
				$result[] = $res;				
			}

			echo(json_encode(array('status' => 'success', 'result' => $result)));
		}
		
	}

?>