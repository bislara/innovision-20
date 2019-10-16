<?php

    include('../../../vendor/autoload.php');
    use \Firebase\JWT\JWT; 

    include('../../config.php');
    include('./config.php');

    if (isset($_POST["username"]) && isset($_POST["password"])) {

        if ($_POST["username"] === 'participant_admin' && md5($_POST["password"]) === 'ec48be7ca80a2f6df6c4f6c4b40043d9') {

            $data = [

                'iat'  => $issuedAt,
                'jti'  => $tokenId,
                'iss'  => $serverName,
                'nbf'  => $notBefore,
                'exp'  => $expire,
                'data' => [

                    'inno_id'  => INNO_ID,
                    'email'    => EMAIL,

                ]
            ];

            $secretKey = base64_decode(SECRET_KEY);             /// Here we will transform this array into JWT:
            $jwt = JWT::encode(

                $data, //Data to be encoded in the JWT
                $secretKey, // The signing key
                ALGORITHM
            );

            echo(json_encode(array('status' => 'success', 'result' => $jwt)));
        }

        else {

            echo(json_encode(array('status' => 'failure', 'result' => 'username or password incorrect')));
        }
    }

    else {

        echo(json_encode(array('status' => 'failure', 'result' => 'username or password missing')));
    }
?>