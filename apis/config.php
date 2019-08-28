<?php

    //require_once(__DIR__.'/../vendor/autoload.php');
	// function str_rand(int $length = 32)
	// {
 //        $length = ($length < 4) ? 4 : $length;
 //        return bin2hex(random_bytes(($length-($length%2))/2));
 //    }
        
    use \Firebase\JWT\JWT; 
    define('SECRET_KEY','Innovision');  /// secret key can be a random string and keep in secret from anyone
    define('ALGORITHM','HS512');

    $tokenId    = base64_encode(mcrypt_create_iv(32));
    $issuedAt   = time();

 
    $notBefore  = $issuedAt ;  //Adding 10 seconds
    $expire     = $notBefore + 3600; // Adding 60 minutes
    $serverName = 'http://localhost/innovision-19/';

?>