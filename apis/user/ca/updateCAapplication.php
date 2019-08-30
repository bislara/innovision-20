<?php

    include('../../db.php');

    include ('../../../vendor/autoload.php');
    use \Firebase\JWT\JWT;
    use Endroid\QrCode\QrCode;

    include('../../config.php');
    $secretKey = base64_decode(SECRET_KEY);

    $jwt=$_POST['ca_id'];
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
    if ($_SERVER["REQUEST_METHOD"] === "POST" && $jwt!="") {

        try
        {
            $decoded = JWT::decode($jwt, $secretKey, array(ALGORITHM));
            $decoded_array = (array) $decoded;
            $data = $decoded_array['data']; 
            $inno_id = $data->inno_id;
            $email = $data->email;

            $qu="SELECT ca_id FROM users WHERE inno_id = '".$inno_id."'";
            $ress=mysqli_query($conn,$qu);

            $ress1= mysqli_fetch_array($ress);
            $ca_id=$ress1['ca_id'];
            
            //basicInfo
            $query1 = mysqli_query($conn, "SELECT inno_id, name, email, college, qr_code FROM users where inno_id ='".$inno_id."'");
            if (mysqli_num_rows($query1) == 0) {
                return json_encode(array('status' => 'failure', 'result' => 'inno_id not found'));
            } else {
            
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
        }
    }
    catch(Exception $e)
    {
            echo json_encode(array('status' => 'failure', 'result' => $e->getMessage()));
    }

    }
?>