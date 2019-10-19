<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use \Firebase\JWT\JWT;
require '../../../vendor/autoload.php';

include ('../../db.php');
include ('../../config.php');
$email = $_POST['email'];
    

    if (isset($email)) {

        $query = mysqli_query($conn, "SELECT * FROM users WHERE email='".$email."'");

        if ($query) {
            
            if (mysqli_num_rows($query) == 1) {

                $row=mysqli_fetch_array($query,MYSQLI_ASSOC);

                // Replace sender@example.com with your "From" address.
                // This address must be verified with Amazon SES.
                $sender = 'donotreply@innonitr.com';
                $senderName = 'Innovision';

                // Replace recipient@example.com with a "To" address. If your account
                // is still in the sandbox, this address must be verified.
                $recipient = 'arishh2@gmail.com';

                // Replace smtp_username with your Amazon SES SMTP user name.
                $usernameSmtp = 'AKIAWM52EINHF5LMRNW4';

                // Replace smtp_password with your Amazon SES SMTP password.
                $passwordSmtp = 'BJuM/xd0wv0kuv3hcb2jFd3iRUjO9fmVz84SjWnFEr73';

                // Specify a configuration set. If you do not want to use a configuration
                // set, comment or remove the next line.
                // $configurationSet = 'ConfigSet';

                // If you're using Amazon SES in a region other than US West (Oregon),
                // replace email-smtp.us-west-2.amazonaws.com with the Amazon SES SMTP
                // endpoint in the appropriate region.
                $host = 'email-smtp.us-east-1.amazonaws.com';
                $port = 587;

                // The subject line of the email
                $subject = "Inno'19 Password reset link";

                // The plain-text body of the email
                $bodyText =  "Email Test\r\nThis email was sent through the
                    Amazon SES SMTP interface using the PHPMailer class.";
            
            	//JWT for URL
            	
            	$data = [

                    'iat'  => $issuedAt,
                    'jti'  => $tokenId,
                    'iss'  => $serverName,
                    'nbf'  => $notBefore,
                    'exp'  => $expire,
                    'data' => [                        
                        'email'    => $row['email'],
                    ]
                ];

                $secretKey = base64_decode(SECRET_KEY);
                $jwt = JWT::encode(

                    $data, //Data to be encoded in the JWT
                    $secretKey, // The signing key
                    ALGORITHM
                );
				// The HTML-formatted body of the email
                $bodyHtml = "Hello user, <br><br>
								we have got a 'forgot password' request for your account ".$row['email']." at Innovision 2019, <br>
                    			if you do not recognize this request you might simply ignore this link, your account is still safe. <br>
                    			In order to change your password please follow this link: <br>
								<a href='https://innonitr.com/views/forgot_password.html?q=".$jwt."'>HERE</a>";


                $mail = new PHPMailer(true);

                try {
                    // Specify the SMTP settings.
                    $mail->isSMTP();
                    $mail->setFrom($sender, $senderName);
                    $mail->Username   = $usernameSmtp;
                    $mail->Password   = $passwordSmtp;
                    $mail->Host       = $host;
                    $mail->Port       = $port;
                    $mail->SMTPAuth   = true;
                    $mail->SMTPSecure = 'tls';
                    // $mail->addCustomHeader('X-SES-CONFIGURATION-SET', $configurationSet);

                    // Specify the message recipients.
                    $mail->addAddress($recipient);
                    // You can also add CC, BCC, and additional To recipients here.

                    // Specify the content of the message.
                    $mail->isHTML(true);
                    $mail->Subject    = $subject;
                    $mail->Body       = $bodyHtml; 	
                    $mail->AltBody    = $bodyText;
                    $mail->Send();
                	$query = mysqli_query($conn, "UPDATE users SET reset_init='1' WHERE email='".$email."'");
                	
                    echo(json_encode(array('status' => 'success', 'result' => 'Mail has been sent to your registered mail.Check SPAM folder , The reset link will expire within 24hrs.')));
                } catch (phpmailerException $e) {
                    echo(json_encode(array('status' => 'failure', 'result' => "An error occurred. {$e->errorMessage()}")));
                } catch (Exception $e) {

                    echo(json_encode(array('status' => 'failure', 'result' => "Email not sent. {$mail->ErrorInfo}")));
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