
<?php

	include('../../../../vendor/autoload.php');
    use \Firebase\JWT\JWT; 

    include('../../config.php');
    include('./config.php');

    $secretKey = base64_decode(SECRET_KEY);

    $jwt = $_POST["token"];

    if (isset($jwt) && $jwt ) {

    	try {

    		$DecodedDataArray = JWT::decode(
    			$jwt,
    			$secretKey,
    			array(ALGORITHM)
    		);

            if ($DecodedDataArray->data->inno_id === INNO_ID && $DecodedDataArray->data->email === EMAIL) {

                $status = "success";
            } else {

                echo(json_encode(array('status' => 'failure', 'result' => 'unauthorised access')));
            }
    		
    	} catch (Exception $e) {
    		
    		echo(json_encode(array('status' => 'failure', 'result' => $e)));
    	}

    } else {

    	echo(json_encode(array('status' => 'failure', 'result' => 'token missing'))); 
	}

?>