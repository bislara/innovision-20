<?php

use \Firebase\JWT\JWT;
require '../../../vendor/autoload.php';

include ('../../db.php');
include ('../../config.php');  

    $new_password= $_POST['password'];
    $jwt = $_POST['token'];
	$secretKey = base64_decode(SECRET_KEY);

    if (isset($jwt) && $jwt ){
        if($_SERVER["REQUEST_METHOD"] === "POST" && $jwt != ""){
        	
            try 
            {
				
                $decoded = JWT::decode($jwt, $secretKey, array(ALGORITHM));
            	
                $decoded_array = (array) $decoded;
                $data = $decoded_array['data'];                 
                $email = $data->email;
            	// print_r($data);return;
            	$new_password=md5($new_password);
                $query = mysqli_query($conn, "SELECT * FROM users where email ='".$email."'");
                if (mysqli_num_rows($query) == 1) {
                	$rst = mysqli_fetch_array($query)["reset_init"];
                	if($rst){
						$query=mysqli_query($conn,"UPDATE users set user_password='".$new_password."',reset_init='0' WHERE email='".$email."'");
                	
						if($query){
							echo(json_encode(array('status' => 'success', 'result' => 'Password Updated')));
						}else{
							echo(json_encode(array('status' => 'failure', 'result' => 'Password Could not be Updated')));
						}
                    
                    }else{
						echo(json_encode(array('status' => 'failure', 'result' => 'Link Expired')));
					}
                	
                    
                }else{
                    return json_encode(array('status' => 'failure', 'result' => 'Multiple Emails'));
                }

            }
            catch(Exception $e) 
            {
                echo json_encode(array('status' => 'failuree', 'result' => $e->getMessage()));
            }
        }else{
            echo json_encode(array('status' => 'failure', 'result' => 'Invalid Request'));    
        }
    }else{
        echo json_encode(array('status' => 'failure', 'result' => 'token missing'));
    }
    
   
?>