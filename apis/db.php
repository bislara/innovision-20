<?php
//database variables
$mysql_host = 'localhost';
$mysql_user = 'root';
$mysql_password = '';
$mysql_db = 'innovision';

//connecting to database
$conn = mysqli_connect($mysql_host, $mysql_user, $mysql_password, $mysql_db);
if(!$conn)
    $_SESSION['error_messages']='Error connecting to database....';
?>
