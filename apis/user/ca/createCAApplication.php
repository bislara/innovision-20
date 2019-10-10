<?php
 
    include('../../db.php');
    include ('../../../vendor/autoload.php');
    use \Firebase\JWT\JWT;

    include('../../config.php');
    $secretKey = base64_decode(SECRET_KEY);
    $jwt=$_POST['token'];


    if ($_SERVER["REQUEST_METHOD"] === "POST" && $jwt!="") {

          try
        {
            $decoded = JWT::decode($jwt, $secretKey, array(ALGORITHM));
            $decoded_array = (array) $decoded;
            $data = $decoded_array['data']; 
            $inno_id = $data->inno_id;
            $email = $data->email;
            
            //basicInfo
            $query1 = mysqli_query($conn, "SELECT inno_id, name, email, college FROM users where inno_id ='".$inno_id."'");
            if (mysqli_num_rows($query1) == 0) {
                return json_encode(array('status' => 'failure', 'result' => 'inno_id not found'));
            } else {

            if( isset($_POST['q1']) && isset($_POST['q2']) && isset($_POST['q3']) && isset($_POST['q4'])&& isset($_POST['q5']) && isset($_POST['q6']) && isset($_POST['q7']) && isset($_POST['q8']) && isset($_POST['q9']) && isset($_POST['q10']) && isset($_POST['q11']) && isset($_POST['q12']) && isset($_POST['q13'])) {   

                $query = "INSERT INTO ca_selection_responses (q1, q2, q3, q4, q5, q6, q7, q8,q9, q10, q11, q12, q13) VALUES ('".mysqli_real_escape_string($conn,$_POST['q1'])."','".mysqli_real_escape_string($conn,$_POST['q2'])."','".mysqli_real_escape_string($conn,$_POST['q3'])."','".mysqli_real_escape_string($conn,$_POST['q4'])."','".mysqli_real_escape_string($conn,$_POST['q5'])."','".mysqli_real_escape_string($conn,$_POST['q6'])."','".mysqli_real_escape_string($conn,$_POST['q7'])."','".mysqli_real_escape_string($conn,$_POST['q8'])."','".mysqli_real_escape_string($conn,$_POST['q9'])."','".mysqli_real_escape_string($conn,$_POST['q10'])."','".mysqli_real_escape_string($conn,$_POST['q11'])."','".mysqli_real_escape_string($conn,$_POST['q12'])."', '".mysqli_real_escape_string($conn,$_POST['q13'])."' )";

                $result = mysqli_query($conn, $query);
                
                $ca_name=$_POST['q1'];

                if ($result) {
                    $query2="SELECT ca_applicant_id FROM ca_selection_responses WHERE q1 = '".$ca_name."'";
                    $res=mysqli_query($conn,$query2);

                    $res1= mysqli_fetch_array($res);

                    $query3 = "UPDATE users SET ca_id = '".$res1['ca_applicant_id']."' WHERE inno_id= '".$inno_id."'";
                    $res3=mysqli_query($conn,$query3);

                    if ($res3) {
                        echo(json_encode(array('status' => 'success', 'result' => 'successful entry')));
                    }
                    else
                    {
                        echo(json_encode(array('status' => 'failure', 'result' => 'entry failed. try again')));
                    }
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