<?php

    include('../db.php');

    if ($_SERVER["REQUEST_METHOD"] === "POST") {

        if( isset($_POST['q1']) && isset($_POST['q2']) && isset($_POST['q3']) && isset($_POST['q4'])&& isset($_POST['q5']) && isset($_POST['q6']) && isset($_POST['q7']) && isset($_POST['q8']) && isset($_POST['q9']) && isset($_POST['q10']) && isset($_POST['q11']) && isset($_POST['q12']) && isset($_POST['q13']) && isset($_POST['q14'])) {   

            $query = "INSERT INTO ca_selection_responses (q1, q2, q3, q4, q5, q6, q7, q8,q9, q10, q11, q12, q13, q14) VALUES ('".mysqli_real_escape_string($conn,$_POST['q1'])."','".mysqli_real_escape_string($conn,$_POST['q2'])."','".mysqli_real_escape_string($conn,$_POST['q3'])."','".mysqli_real_escape_string($conn,$_POST['q4'])."','".mysqli_real_escape_string($conn,$_POST['q5'])."','".mysqli_real_escape_string($conn,$_POST['q6'])."','".mysqli_real_escape_string($conn,$_POST['q7'])."','".mysqli_real_escape_string($conn,$_POST['q8'])."','".mysqli_real_escape_string($conn,$_POST['q9'])."','".mysqli_real_escape_string($conn,$_POST['q10'])."','".mysqli_real_escape_string($conn,$_POST['q11'])."','".mysqli_real_escape_string($conn,$_POST['q12'])."', '".mysqli_real_escape_string($conn,$_POST['q13'])."','".mysqli_real_escape_string($conn,$_POST['q14'])."' )";

            $result = mysqli_query($conn, $query);
            
            if ($result) {

                echo(json_encode(array('status' => 'success', 'result' => 'successful entry')));
            }

            else {

                echo(json_encode(array('status' => 'failure', 'result' => 'entry failed. try again')));
            }
        }
    }
?>