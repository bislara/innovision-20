<?php
 
        include('../../db.php');
        include('verifyCaAdmin.php');

    $eid=$_POST['e_id'];
    // echo $eid;
    if ($_SERVER["REQUEST_METHOD"] == "POST") {

            //basicInfo
            $query1 = mysqli_query($conn, "SELECT * FROM requirements where eid ='".$eid."'");
            if (mysqli_num_rows($query1) == 0) {
                return json_encode(array('status' => 'failure', 'result' => 'e_id not found'));
            }
            else {

            if( isset($_POST['c1']) && isset($_POST['c2']) && isset($_POST['c3']) && isset($_POST['c4'])&& isset($_POST['c5']) && isset($_POST['c6']) && isset($_POST['c7']) && isset($_POST['c8']) ) {   

                $query = "UPDATE requirements SET c1_left = '".$_POST['c1']."',c1_given = '".$_POST['c2']."',c2_left = '".$_POST['c3']."',c2_given = '".$_POST['c4']."',c3_left = '".$_POST['c5']."',c3_given = '".$_POST['c6']."',c4_left = '".$_POST['c7']."',c4_given = '".$_POST['c8']."' WHERE eid = '".$eid."'";

                $result = mysqli_query($conn, $query);
                
                if ($result) {
                        echo(json_encode(array('status' => 'success', 'result' => 'successful entry')));
                    }
         
                else {

                    echo(json_encode(array('status' => 'failure', 'result' => 'entry failed. try again')));
                }
            }
        }
              
    }
?>