<?php

    include('../../../vendor/autoload.php');
    use \Firebase\JWT\JWT; 
    //id: CMS_Admin
    //pwd: 69c1b56e10615a06ed14779e3d9bd833

    include('../../config.php');
    include('./config.php');

    if (isset($_POST["username"]) && isset($_POST["password"])) {            

        if ($_POST["username"] === 'admin' && md5($_POST["password"]) === '21232f297a57a5a743894a0e4a801fc3') {

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