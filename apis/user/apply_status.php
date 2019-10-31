<?php
	include('../db.php');

	include ('../../vendor/autoload.php');
    use \Firebase\JWT\JWT;

    include('../config.php');

    $jwt = $_POST["token"];
    $secretKey = base64_decode(SECRET_KEY);
    
	if(isset($_POST["token"]) && isset($_POST["company"]))
	{
		try
        {
            $company = $_POST["company"];

            $decoded = JWT::decode($jwt, $secretKey, array(ALGORITHM));
            $decoded_array = (array) $decoded;
            $data = $decoded_array['data']; 
            $inno_id = $data->inno_id;
            $email = $data->email;

		$sql1 = "SELECT * FROM special_event WHERE inno_id='".$inno_id."' ";
		$res1 = mysqli_query($conn, $sql1);
		// echo $res1;
		if(mysqli_num_rows($res1) == 0)
		{
			echo(json_encode(array("status"=>"Not registered")));
		}
		else
		{
            $res = mysqli_fetch_array($res1);
            // echo $res;
                if ($res[$company]==0) {
                        // echo "not applied";
                       echo(json_encode(array('status' => 'success', 'result' => 'not applied')));
			}
			else if ($res[$company]==1) {
                        // echo "applied";

                        echo(json_encode(array('status' => 'success', 'result' => 'applied')));
			}
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