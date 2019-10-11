<?php
include('../../db.php');

if($_SERVER["REQUEST_METHOD"] === "POST") {
    // Takes raw data from the request
    $json = file_get_contents('php://input');

    // Converts it into a PHP object
    $data = json_decode($json);

    $user_email=$data->ticketItems[0]->attendee->email;

    $query = mysqli_query($conn, "UPDATE users SET paid='1' , payment_response='".$json."' where email ='".$user_email."'");
    echo "success";


}

?>