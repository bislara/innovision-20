<?php
	include('../../db.php');

	if ($_SERVER["REQUEST_METHOD"] === "POST") {
		if(isset($_POST['college'])) {
			$college = $_POST['college'];
			$query = "INSERT INTO other_college (college) VALUES ('".$college."')";
			$res = mysqli_query($conn, $query);
			if($res) {
				echo(json_encode(array('status' => 'success')));
			}
			else{
				echo(json_encode(array('status' => 'failure')));
			}
		}
	}
?>