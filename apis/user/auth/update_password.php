<?php
include ('../db.php');
    $new_pwd = md5($_POST['new_pwd']);
    $old_pwd = $_POST['old_pwd'];
    $email = $_POST['mail'];

    //echo $old_pwd;
     $query = mysqli_query($conn,"SELECT * FROM users WHERE email='".$email."' AND user_password='".$old_pwd."'");
    // $query = mysqli_query($conn,"UPDATE users SET user_password ='".$new_pwd."' WHERE email='".$email."' AND user_password='".$old_pwd."'");

     if ($query) {
            
            if (mysqli_num_rows($query) == 1) {
            $query1 = mysqli_query($conn,"UPDATE users SET user_password ='".$new_pwd."' WHERE email='".$email."' AND user_password='".$old_pwd."'");
                if($query1)
                {
                     echo(json_encode(array('status' => 'success', 'result' => 'Password Updated')));
                }
                else
                {
                     echo(json_encode(array('status' => 'failure', 'result' => 'Password Could not be Updated')));
                }

           
            }
            else
            {
                  echo(json_encode(array('status' => 'failure', 'result' => 'The Link Is broken or expired.Please visit THE ACTIVE LINK SENT TO YOUR REGISTERED MAIL(in spam folder)')));
            }
           
        } else {

            echo(json_encode(array('status' => 'failure', 'result' => 'DB operation failed')));
        }
?>