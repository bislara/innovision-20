<?php

    include('../../../db.php');
    include('../../../../vendor/autoload.php');
    include('../../../config.php');
    use \Firebase\JWT\JWT; 

        if( isset($_POST['loginid']) && isset($_POST['password'])) {            
            $query = mysqli_query($conn, "SELECT * FROM events WHERE loginId='".mysqli_real_escape_string($conn, $_POST['loginid'])."' AND loginPassword='".mysqli_real_escape_string($conn, $_POST['password'])."'");
        	
            if(mysqli_num_rows($query) == 0)
            {
            	// echo mysqli_error($conn); return;
                echo json_encode(array('status'=>'failure','message'=>'invalid credentials'));
            }
            else
            {
                $result=mysqli_fetch_assoc($query);
                $data = [

                    'iat'  => $issuedAt,
                    'jti'  => $tokenId,
                    'iss'  => $serverName,
                    'nbf'  => $notBefore,
                    'exp'  => $expire,
                    'data' => [    
                        
                        'loginId'    => $result['loginId'],
                        'loginPassword' => $result['loginPassword'],
                    ]
                ];

                
                $secretKey = base64_decode(SECRET_KEY);             /// Here we will transform this array into JWT:
                $jwt = JWT::encode(
    
                    $data, //Data to be encoded in the JWT
                    $secretKey, // The signing key
                    ALGORITHM
                );
                $response=[
                    'eid'  => $result['eid'],
                    'name' => $result['title'],
                    'jwt' =>$jwt
                ];
    
                echo(json_encode(array('status' => 'success', 'result' => $response)));
            }
        }
            
?>
