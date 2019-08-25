<?php
	include('../../../db.php');

	if ($_SERVER["REQUEST_METHOD"] === "POST") {
		if(isset($_POST['cname'])) {
			$college = $_POST['cname'];
			$query = "INSERT INTO college (college_name) VALUES ('".$college."')";
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