<?php

    include('../../db.php');

    include ('../../../vendor/autoload.php');
    use \Firebase\JWT\JWT;
    use Endroid\QrCode\QrCode;

    include('../../config.php');

    $headers = apache_request_headers();

    $authHeader= $headers["Authorization"];
    list($jwt) = sscanf( $authHeader, 'Bearer %s');    

	
    $secretKey = base64_decode(SECRET_KEY);
    if (isset($jwt) && $jwt )
    {    
    if($_SERVER["REQUEST_METHOD"] === "GET" && $jwt != "") {
        try 
        {

            $decoded = JWT::decode($jwt, $secretKey, array(ALGORITHM));
            $decoded_array = (array) $decoded;
            $data = $decoded_array['data']; 
            $inno_id = $data->inno_id;
            $email = $data->email;
            $basicInfo=[];
            $regEvents=[];
            $certificates=[];
            //basicInfo
            $query = mysqli_query($conn, "SELECT inno_id, name, email, college, qr_code, ca_id,paid,phone FROM users where inno_id ='".$inno_id."'");
            if (mysqli_num_rows($query) == 0) {
                return json_encode(array('status' => 'failure', 'result' => 'inno_id not found'));
            } else {
                $basicInfo = mysqli_fetch_array($query,MYSQLI_ASSOC);           
            }
            //Registered Events
            $sql1 = "SELECT * FROM events WHERE eid=ANY(SELECT event_id from events_registration WHERE inno_id=".$inno_id.")";
            $res1 = mysqli_query($conn, $sql1);
            if(mysqli_num_rows($res1) > 0)
            {
                $regEvents = mysqli_fetch_all($res1,MYSQLI_ASSOC);
                for($i=0; $i<count($regEvents); ++$i){
                    unset($regEvents[$i]['loginId']);
                    unset($regEvents[$i]['loginPassword']);
                    unset($regEvents[$i]['winner1']);
                    unset($regEvents[$i]['winner2']);
                    unset($regEvents[$i]['filled']);
                    unset($regEvents[$i]['results_submitted']);
                }
            }    
            //Certificate
            /*$query = mysqli_query($conn, "SELECT img_path FROM certificate where inno_id ='".$inno_id."'");
            if (mysqli_num_rows($query) == 1) {
                $certificates = mysqli_fetch_array($query,MYSQLI_ASSOC);            
            } */


            $result = (object) [
                'basicInfo'=>$basicInfo,
                'regEvents'=>$regEvents,
                //'certificates'=>$certificates
            ];
            echo json_encode(array('status' => 'success', 'result' => $result));
        }
        catch(Exception $e) 
        {
            echo json_encode(array('status' => 'failure', 'result' => $e->getMessage()));
        }
        
	}
}
else
{
    echo json_encode(array('status' => 'failure', 'result' => 'token missing'));
}

?>