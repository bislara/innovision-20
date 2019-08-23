<?php

    // require_once('../../../../vendor/autoload.php');
    use \Firebase\JWT\JWT; 
    define('SECRET_KEY','Innovision');  /// secret key can be a random string and keep in secret from anyone
    define('ALGORITHM','HS512');

    $tokenId    = base64_encode("Neelam");
    $issuedAt   = time();

 
    $notBefore  = $issuedAt ;  //Adding 10 seconds
    $expire     = $notBefore + 3600; // Adding 60 seconds
    $serverName = 'http://localhost/inno/';

?>