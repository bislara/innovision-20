<?php

    include('../../../../vendor/autoload.php');
    use \Firebase\JWT\JWT; 

    include('../../config.php');
    include('./config.php');

    if (isset($_POST["username"]) && isset($_POST["password"])) {

        if ($_POST["username"] === 'CMS_Admin' && md5($_POST["password"]) === '69c1b56e10615a06ed14779e3d9bd833') {

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