<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
//Load Composer's autoloader
require '../../../vendor/phpmailer/phpmailer/src/Exception.php';
require '../../../vendor/phpmailer/phpmailer/src/PHPMailer.php';
require '../../../vendor/phpmailer/phpmailer/src/SMTP.php';
require '../../../vendor/autoload.php';
include ('../db.php');
$email = $_POST['email'];


    if (isset($email)) {

        $query = mysqli_query($conn, "SELECT * FROM users WHERE email='".$email."'");

        if ($query) {

            if (mysqli_num_rows($query) == 1) {

                $mail = new PHPMailer(true);                              // Passing `true` enables exceptions
                try {
                    //Server settings
                    $mail->SMTPDebug = 0;                                 // Enable verbose debug output
                    $mail->isSMTP();                                      // Set mailer to use SMTP
                    $mail->Host = 'mail.innonitr.com';  // Specify main and backup SMTP servers
                    $mail->SMTPAuth = true;                               // Enable SMTP authentication
                    $mail->Username = 'contactus@innonitr.com';                 // SMTP username
                    $mail->Password = 'MailAdmin@234112018';                           // SMTP password
                    $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
                    $mail->Port = 587;                                    // TCP port to connect to

                    //Recipients
                    $mail->setFrom('contactus@innonitr.com', "Innovision'18");
                    $mail->addAddress($email);     // Add a recipient
                



                    //Content
                    $mail->isHTML(true);                                  // Set email format to HTML
                    $mail->Subject = "Inno'18 Password reset link";
                    $mail->Body    = 'Your password change link is <a href="https://innonitr.com/forgot_password.html?q='.mysqli_fetch_array($query)["user_password"].'&mail='.$email.'">HERE</a>';
                    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

                    $mail->send();
                    //echo mysqli_fetch_array($query)["user_password"];
                     echo(json_encode(array('status' => 'success', 'result' => 'Mail has been sent to your registered mail.Check SPAM folder')));
                } catch (Exception $e) {
                    echo(json_encode(array('status' => 'failure', 'result' => 'Something Went Wrong.Check your internet connection')));
                }

                               


                            } else {

                                echo(json_encode(array('status' => 'failure', 'result' => 'This email is not registered with us')));
                            }
                        } else {

                             echo(json_encode(array('status' => 'failure', 'result' => 'This email is not registered with us')));
                        }
                    } else {

                        echo(json_encode(array('status' => 'failure', 'result' => 'Email or password not set')));
                    }
?>