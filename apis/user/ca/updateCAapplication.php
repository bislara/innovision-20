<?php

    include('../../db.php');

    $ca_id=$_POST['ca_id'];
    $q1=$_POST['q1'];
    $q2=$_POST['q2'];
    $q3=$_POST['q3'];
    $q4=$_POST['q4'];
    $q5=$_POST['q5'];
    $q6=$_POST['q6'];
    $q7=$_POST['q7'];
    $q8=$_POST['q8'];
    $q9=$_POST['q9'];
    $q10=$_POST['q10'];
    $q11=$_POST['q11'];
    $q12=$_POST['q12'];
    $q13=$_POST['q13'];
    $q14=$_POST['q14'];
    
    // echo (json_encode(array('status' => 'success', 'result' => $ca_id)));
    if ($_SERVER["REQUEST_METHOD"] === "POST" && $ca_id!="") {

        if( isset($_POST['q1']) && isset($_POST['q2']) && isset($_POST['q3']) && isset($_POST['q4'])&& isset($_POST['q5']) && isset($_POST['q6']) && isset($_POST['q7']) && isset($_POST['q8']) && isset($_POST['q9']) && isset($_POST['q10']) && isset($_POST['q11']) && isset($_POST['q12']) && isset($_POST['q13']) && isset($_POST['q14'])) {   

            $query = "UPDATE ca_selection_responses SET q1 = '".$q1."',q2 = '".$q2."',q3 = '".$q3."',q4 = '".$q4."',q5 = '".$q5."',q6 = '".$q6."', q7 = '".$q7."', q8 = '".$q8."',q9 = '".$q9."',q10 = '".$q10."', q11 = '".$q11."', q12 = '".$q12."',q13 = '".$q13."', q14 = '".$q14."'  WHERE ca_applicant_id = '".$ca_id."' ";
            // echo $query;
            $result = mysqli_query($conn, $query);
            
            if ($result) {

                echo(json_encode(array('status' => 'success', 'result' => 'successful entry')));
            }

            else {

                echo(json_encode(array('status' => 'failure', 'result' => 'entry failed. try again')));
            }
        }
    // echo $_POST['q1'];
    }
?>