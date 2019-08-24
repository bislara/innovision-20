<?php

    include('../../../db.php');

        if( isset($_POST['loginid']) && isset($_POST['password'])) {
            $query = mysqli_query($conn, "SELECT * FROM events WHERE loginId='".mysqli_real_escape_string($conn, $_POST['loginid'])."' AND loginPassword='".mysqli_real_escape_string($conn, $_POST['password'])."'");

            if(mysqli_num_rows($query) == 0)
            {
                echo json_encode(array('status'=>'failure','message'=>'invalid credentials'));
            }
            else
            {
                echo json_encode(array('status'=>'success','result'=>mysqli_fetch_assoc($query)));
            }
        }
            
?>
