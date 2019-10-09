<?php
	include('../db.php');

	include ('../../vendor/autoload.php');
    use \Firebase\JWT\JWT;

    include('../config.php');

    $jwt = $_POST["token"];
    $secretKey = base64_decode(SECRET_KEY);
    
	if(isset($_POST["token"]) && isset($_POST["eid"]))
	{
		try
        {
            $decoded = JWT::decode($jwt, $secretKey, array(ALGORITHM));
            $decoded_array = (array) $decoded;
            $data = $decoded_array['data']; 
            $inno_id = $data->inno_id;
            $email = $data->email;

		$sql1 = "SELECT * FROM events_registration WHERE inno_id='".$inno_id."' and event_id='".$_POST["eid"]."'";
		$res1 = mysqli_query($conn, $sql1);
		if(mysqli_num_rows($res1) == 0)
		{
			$sql2 = "INSERT INTO events_registration (inno_id, event_id) VALUES (".$inno_id.", ".$_POST["eid"].")";
			$res2 = mysqli_query($conn, $sql2);
			if($res2)
			{
				echo(json_encode(array("status"=>"registration done")));
			}
			else
			{
				echo(json_encode(array("status"=>"failure")));
			}
		}
		else
		{
			$sql2 = "DELETE FROM events_registration WHERE inno_id='".$inno_id."' and event_id='".$_POST["eid"]."'";
			$res2 = mysqli_query($conn, $sql2);
			if($res2)
			{
				echo(json_encode(array("status"=>"DeRegistration done")));
			}
			else
			{
				echo(json_encode(array("status"=>"DeRegistration failure")));
			}
			// echo(json_encode(array("status" => "already registered")));
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