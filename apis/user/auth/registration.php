<?php

	include('../../db.php');

	include ('../../../vendor/autoload.php');
	use \Firebase\JWT\JWT;

	include('../../config.php');

	$name = $_POST["name"];
	$gender = $_POST["gender"];
	$phone = $_POST["phone"];
	$ca_response = $_POST["ca_res"];
	$college = $_POST["college"];
	$address = $_POST["address"];
	$email = $_POST["email"];
	$password = $_POST["password"];
	//$accomodation = $_POST["accomodation"];

	function validateName($name) {

		if ($name == '') {

			echo(json_encode(array('status' => 'failure', 'result' => 'Name is required')));
		} else {

			if (!preg_match("/^[a-zA-Z ]*$/", $name)) {

				echo(json_encode(array('status' => 'failure', 'result' => 'Name should only contain letters and spaces')));
				return 0;
			}
			return 1;
		}
	}

	function validateGender($gender) {

		if ($gender != 'male' && $gender != 'female' && $gender != 'others') {

			echo(json_encode(array('status' => 'failure', 'result' => 'Invalid gender')));
			return 0;
		}
		return 1;
	}

	function validatePhone($phone) {

		if (!preg_match("/^[6789]\d{9}$/", $phone)) {

			echo(json_encode(array('status' => 'failure', 'result' => 'Phone number should have 10 digits and should start with 6,7,8, or 9')));
			return 0;
		}
		return 1;
	}

	function checkExistingCollege($college) {

		global $conn;

		// $query = mysqli_query($conn, 'SELECT * FROM colleges WHERE name="'.$college.'"');
		// return (mysqli_num_rows($query) != 0);

		return true;
	}

	function validateCollege($college) {

		if ($college == '') {

			echo(json_encode(array('status' => 'failure', 'result' => 'College is required')));
			return 0;
		} else {

			if (!checkExistingCollege($college)) {

				echo(json_encode(array('status' => 'failure', 'result' => 'College not found in our records')));
				return 0;

			}
		}
		return 1;
	}

	function validateAddress($address) {

		if ($address == '') {

			echo(json_encode(array('status' => 'failure', 'result' => 'Address is required')));
			return 0;
		}
		return 1;
	}

	function checkExistingEmail($email) {

		global $conn;

		$query = mysqli_query($conn, 'SELECT * FROM users WHERE email="'.$email.'"');
		return (mysqli_num_rows($query) != 0);
	}

	function validateEmail($email) {

		if ($email == '') {

			echo(json_encode(array('status' => 'failure', 'result' => 'Email is required')));
		} else {

			if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {

				echo(json_encode(array('status' => 'failure', 'result' => 'Valid email is required')));
			} else {

				if (checkExistingEmail($email)) {
					
					echo(json_encode(array('status' => 'failure', 'result' => 'Email is already registered')));
					
				}
				else
				{
					return 1;
				}
			}
			return 0;
		}
	}

	function validatePassword($password) {

		if (strlen($password) < 7) {

			echo (json_encode(array('status' => 'failure', 'result' => 'Password needs to have 8-32 characters')));
			return 0;
		}
		else
			return 1;
	}
	
	// function validateAccomodation($accomodation) {

	// 	if ($accomodation != 'yes' && $accomodation != 'no') {

	// 		echo(json_encode(array('status' => 'failure', 'result' => 'Valid accomodation details required')));
	// 	}
	// }

	if ( isset($name) && isset($gender) && isset($phone) && isset($college) && isset($address) && isset($email) && isset($ca_response) && isset($password)) {
		// /echo'<script>HIIIIIII</script>';
		//validateEmail($email);
		//validatePassword($password);
		//validateAccomodation($accomodation);
		if(validateEmail($email) && validatePassword($password) && validateGender($gender) && validatePhone($phone) && validateName($name) && validateCollege($college) && validateAddress($address))
		{
			$name = mysqli_real_escape_string($conn, $name);
			$gender = mysqli_real_escape_string($conn, $gender);
			$phone = mysqli_real_escape_string($conn, $phone);
			$address = mysqli_real_escape_string($conn, $address);
			$email = mysqli_real_escape_string($conn, $email);
        	$ca_response = mysqli_real_escape_string($conn, $ca_response);
			$college = mysqli_real_escape_string($conn, $college);
			//$accomodation = mysqli_real_escape_string($conn, $accomodation);
			$password = mysqli_real_escape_string($conn, md5($password));

			// $q = "INSERT INTO users (name, gender, phone, college, address, email, user_password) VALUES('".$name."','".$gender."','".$phone."','".$college."','".$address."','".$email."','".$password."')";
			$q = "INSERT INTO users (name, gender, phone, college, address, email, ca_response, user_password) VALUES('".$name."','".$gender."','".$phone."','".$college."','".$address."','".$email."','".$ca_response."','".$password."')";

			$query = mysqli_query($conn, $q);

		if ($query) {

			$query = mysqli_query($conn, 'SELECT inno_id FROM users WHERE email="'.$email.'"');
			$inno_id = mysqli_fetch_array($query)["inno_id"];

			$data = [

                'iat'  => $issuedAt,
                'jti'  => $tokenId,
                'iss'  => $serverName,
                'nbf'  => $notBefore,
                'exp'  => $expire,
                'data' => [

                    'inno_id'  => $inno_id,
                    'email'    => $email,

                ]
            ];

            $secretKey = base64_decode(SECRET_KEY);             /// Here we will transform this array into JWT:
            
            $jwt = JWT::encode(

                $data, //Data to be encoded in the JWT
                $secretKey, // The signing key
                ALGORITHM
            );
            if($jwt)
            {
			    error_reporting(0);			    
				echo(json_encode(array('status' => 'success', 'message' => $jwt)));
			}
			else{

				echo(json_encode(array('status' => 'failure', 'message' => 'token not set')));
			}
		} else {
			echo(json_encode(array('status' => 'failure', 'message' => 'DB operation failed')));
		}
	}
		
	}

?>