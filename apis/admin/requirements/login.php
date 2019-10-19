<?php

    include('../../../vendor/autoload.php');
    use \Firebase\JWT\JWT; 
    //id: CMS_Admin
    //pwd: 69c1b56e10615a06ed14779e3d9bd833

    include('../../config.php');
    include('./config.php');

    if (isset($_POST["username"]) && isset($_POST["password"])) {            

        if ($_POST["username"] === 'req_admin' && md5($_POST["password"]) === '67813b02e9bf0e264b65a66a87ab5f56') {

            $data = [

                'iat'  => $issuedAt,
                'jti'  => $tokenId,
                'iss'  => $serverName,
                'nbf'  => $notBefore,
                'exp'  => $expire,
                'data' => [

                    'req_id'  => REQ_ID,
                    'email'    => EMAIL,

                ]
            ];

            $secretKey = SECRET_KEY;             /// Here we will transform this array into JWT:
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