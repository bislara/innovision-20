
<?php

	include('../../../../vendor/autoload.php');
    use \Firebase\JWT\JWT; 

    include('./config.php');
    include('../../../config.php');

    $secretKey = base64_decode(SECRET_KEY);
    
    $headers = apache_request_headers();

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

                $status = "success";
            } else {

                 return json_encode(array('status' => 'failure', 'result' => 'unauthorised access'));
            }
    		
    	} catch (Exception $e) {
    		
    		 return json_encode(array('status' => 'failure', 'resultt' => $e->getMessage()));
    	}

    } else {

    	 return json_encode(array('status' => 'failure', 'result' => 'token missing'));
	}

?>
