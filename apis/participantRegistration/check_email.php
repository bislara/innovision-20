<?php 
include('../db.php');

$email=$_POST['email'];
mysqli_real_escape_string($conn, $email);
$query_email=mysqli_query($conn,"SELECT * from users where email='$email'");
if(!empty($email)){
	if(mysqli_num_rows($query_email)>0){
		echo " <div style=\"color:#ff6666;height:40px;padding : 10px;\"><strong><center>Email Id already exists</center><strong></div><script>$(\"#signup\").addClass(\"disabled\");</script>";
	}
	else {
		echo "<div style=\"color:green;height:40px;padding : 10px;margin-top:auto;margin-bottom:auto;\"><center><strong>You can signup using this email id.<strong></center></div><script>$(\"#signup\").removeClass(\"disabled\");$(\"#signup\").addClass(\"active\");</script>";
	}
}else{
	echo "<div style=\"color:#ff6666;height:30px;\"><center><strong>Email field cannot be empty</strong></center></div><script>$(\"#signup\").addClass(\"disabled\");</script>";
}