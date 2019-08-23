<?php
    include('../db.php');

    $inno_id = $_GET['inno_id'];
    $email = $_GET['email'];
    $code = $_GET['code'];

    $verifyCode = mysqli_real_escape_string($conn, $inno_id)."apunhibhagwaanhai";

    if($_SERVER["REQUEST_METHOD"] === "GET" && $inno_id !== "" && md5($verifyCode)===$code) {
        $query1 = mysqli_query($conn, "SELECT * FROM users WHERE inno_id=".mysqli_real_escape_string($conn, $inno_id));
        if(mysqli_num_rows($query1) == 0)
        {
            echo json_encode(array('status'=>'failure', 'result'=>'No such inno id found'));
        }
        else
        {
            $query2 = "UPDATE users SET checked_in = 1 WHERE inno_id =".mysqli_real_escape_string($conn, $inno_id);
            if(mysqli_query($conn, $query2))
            {
                echo json_encode(array('status'=>'success', 'result'=>'Successfully checked-in'));
            }
            else
            {
                echo json_encode(array('status'=>'failure', 'result'=>'Could not check-in. Please try again.'));
            }
        }
    }
?>