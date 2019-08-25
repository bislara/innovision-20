
<?php

include('../../../../vendor/autoload.php');
use \Firebase\JWT\JWT; 


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
        $login_id=$DecodedDataArray->data->loginId;
        $login_pwd=$DecodedDataArray->data->loginPassword;
        
        
    } catch (Exception $e) {
        
        return json_encode(array('status' => 'failure', 'result' => $e->getMessage()));
        
    }

} else {

    return json_encode(array('status' => 'failure', 'result' => 'token missing')); 
}

?>
