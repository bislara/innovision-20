<?php

    include('../../db.php');

    include ('../../../vendor/autoload.php');
    use \Firebase\JWT\JWT;
    
    include('../../config.php');

    
    $email = $_POST["email"];
    $password = $_POST["password"];
    mysqli_real_escape_string($conn, $email);
    mysqli_real_escape_string($conn, $password);

    if (isset($email) && isset($password)) {
        
        $query = mysqli_query($conn, "SELECT inno_id FROM users WHERE email='".$email."' AND user_password='".md5($password)."'");

        if ($query) {

            if (mysqli_num_rows($query) == 1) {
                $data = [

                    'iat'  => $issuedAt,
                    'jti'  => $tokenId,
                    'iss'  => $serverName,
                    'nbf'  => $notBefore,
                    'exp'  => $expire,
                    'data' => [

                        'inno_id'  => mysqli_fetch_array($query)["inno_id"],
                        'email'    => $email,

                    ]
                ];

                    $secretKey = base64_decode(SECRET_KEY);
                $jwt = JWT::encode(

                    $data, //Data to be encoded in the JWT
                    $secretKey, // The signing key
                    ALGORITHM
                );

                echo(json_encode(array('status' => 'success', 'result' => $jwt)));
            } else {

                echo(json_encode(array('status' => 'failure', 'result' => 'Incorrect email id or password')));
            }
        } else {

            echo(json_encode(array('status' => 'failure', 'result' => 'DB operation failed')));
        }
    } else {

        echo(json_encode(array('status' => 'failure', 'result' => 'Email or password not set')));
    }
?>