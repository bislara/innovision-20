<?php
	include('../db.php');

	include ('../../vendor/autoload.php');
    use \Firebase\JWT\JWT;

    include('../config.php');

    $jwt = $_POST["token"];
    $secretKey = base64_decode(SECRET_KEY);
    
	if(isset($_POST["token"]) && isset($_POST["company"]) )
	{
		try
        {
            $decoded = JWT::decode($jwt, $secretKey, array(ALGORITHM));
            $decoded_array = (array) $decoded;
            $data = $decoded_array['data']; 
            $inno_id = $data->inno_id;
            $email = $data->email;
            if(isset($_POST["company"]))
            {
            	$company = $_POST["company"];
            	$query = "SELECT * FROM special_event WHERE inno_id='".$inno_id."'";

                $result =mysqli_query($conn, $query);
                
                if (mysqli_num_rows($result) < 1) {
                    echo(json_encode(array('status' => 'failure', 'result' => 'inno_id not found')));
                }

                else {
                    $res = mysqli_fetch_array($result);
                    if ($res[$company]==0) {
                        $query2 = "UPDATE special_event SET  $company = 1 WHERE `special_event`.`inno_id` = '".$inno_id."' ";
                        $result2 =mysqli_query($conn, $query2);

                        // echo $query2;
                        if ($result2) {
                        
                        echo(json_encode(array('status' => 'success', 'result' => 'applied')));
                        }

                    }
                    else if ($res[$company]==1) {
                        $query2 = "UPDATE special_event SET  $company= 0 WHERE `special_event`.`inno_id` = '".$inno_id."' ";
                        $result2 =mysqli_query($conn, $query2);
                        if ($result2) {
                        echo(json_encode(array('status' => 'success', 'result' => 'withdraw')));
                        }

                    }

                }

            	
			}
			else
			{
				echo(json_encode(array('status'=>'Fields Empty')));
			}
	  }
	  catch(Exception $e) 
        {
            echo json_encode(array('status' => 'failure', 'result' => $e->getMessage()));
        }

	}
	else
	{
		echo(json_decode(array("status" => "failure")));
	}
?>