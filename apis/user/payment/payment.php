<?php

		include('../db.php');
		// include ('../../../vendor/autoload.php');
		//include('../config.php');
		

		$token = $_POST['token'];
		$name = $_POST['name'];
		$phone = $_POST['phone'];
		$email = $_POST['email'];

		//PAYMENT CHECK WILL BE DONE HERE
		$ch = curl_init();

		curl_setopt($ch, CURLOPT_URL, 'https://www.instamojo.com/api/1.1/payment-requests/');
		curl_setopt($ch, CURLOPT_HEADER, false);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
		curl_setopt($ch, CURLOPT_POST, true);
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
		curl_setopt($ch, CURLOPT_HTTPHEADER,
					array("X-Api-Key:909064270eaa67cb728a13a3d8c21174",
						"X-Auth-Token:5db8e09ddcadf9f22d317ad14d83c84c"));
		$payload = Array(
			'purpose' => 'INNOVISION REGISTRATION FEES',
			'amount' => '600',
			'phone' => $phone,
			'buyer_name' => $name,
			'redirect_url' => 'https://innonitr.com/profile.html',
			'send_email' => true,
			'webhook' => 'https://innonitr.com/apis/payment/webhook.php',
			'send_sms' => true,
			'email' => $email,
			'allow_repeated_payments' => false
		);
		
		curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($payload));
		$response = curl_exec($ch);
		
		 
		if($response == false)
		{
		print "Curl Error ".curl_error($ch);
		}
		$var =  json_decode($response);
		// $v = json_decode($var,true);
		//echo gettype($var);
		//echo $response;
		$temp = $var->payment_request->longurl;
		//echo $temp;
		
		curl_close($ch);
		//EXTRACT PAYMENT ID AND LONGURL FROM $ch
		$payment_id = $var->payment_request->id;
		//echo $payment_id;
		$long_url = $var->payment_request->longurl;
		//echo $long_url;

		$query = mysqli_query($conn,"UPDATE users SET payment_id ='".$payment_id."', long_url ='".$long_url."' WHERE email ='".$email."'");

		 if ($query) {
   
				  echo(json_encode(array('status' => 'success', 'long_url' => $long_url)));
		
		}
		else{
				echo(json_encode(array('status' => 'failure', 'result' => 'Db operation failed')));
		}
		// echo(json_encode(array('status' => 'success', 'message' => 'I am in webhook')));
		//PAYMENT ENDS HERE
		
		

?>