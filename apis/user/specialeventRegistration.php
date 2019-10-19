<?php
	include('../db.php');

	include ('../../vendor/autoload.php');
    use \Firebase\JWT\JWT;

    include('../config.php');

    $jwt = $_POST["token"];
    $secretKey = base64_decode(SECRET_KEY);
    
	if(isset($_POST["token"]) && isset($_POST["eid"]) )
	{
		try
        {
            $decoded = JWT::decode($jwt, $secretKey, array(ALGORITHM));
            $decoded_array = (array) $decoded;
            $data = $decoded_array['data']; 
            $inno_id = $data->inno_id;
            $email = $data->email;
            if(isset($_POST["details"]))
            {
            	//$details = $_POST["details"];
            	$userDetails = json_decode($_POST["details"]);
            	$backlogs = $userDetails->backlogs;
            	$grad_year = $userDetails->grad_year;
            	$cvLink =  $userDetails->cv;
            	$cgpa = $userDetails->cgpa;

            	if(isset($backlogs) && isset($grad_year) && isset($cvLink) && isset($cgpa))
            	{
                	if($backlogs==="" or $grad_year === "" or $cvLink === "" or $cgpa==="")
                    {
                    	echo(json_encode(array('status'=>'Fields Empty')));
                    }
                   else
                   {
                        $sql2 = "INSERT INTO events_registration (inno_id, event_id) VALUES (".$inno_id.", ".$_POST["eid"].")";
						$res2 = mysqli_query($conn, $sql2);
						$sql3 = "INSERT INTO special_event (inno_id, event_id, details) VALUES ('".$inno_id."', '".$_POST["eid"]."', '{\"cgpa\": \"".$cgpa."\",\"backlogs\": \"".$backlogs."\", \"cvLink\": \"".$cvLink."\", \"grad_year\": \"".$grad_year."\"}')";
						$res3 = mysqli_query($conn, $sql3);
						if($res2 && $res3)
						{
							echo(json_encode(array("status"=>"registration done")));
						}
						else
						{
							echo(json_encode(array("status"=>"failure")));
						}				
                    
                	}
                }
            	else
            	{
            		echo(json_encode(array('status'=>'Fields Empty')));
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