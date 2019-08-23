<?php

	include('../../db.php');

	if($_SERVER["REQUEST_METHOD"] === "POST") {

		$sql = "INSERT INTO list_of_colleges(college_name,city) VALUES ('".$_POST['cname']."','".$_POST['city']."')";
		if($query = mysqli_query($conn, $sql))
		{
			echo(json_encode(array('status' => 'success', 'result' => "Successful Entry")));
		}
		else
		{
			echo(json_encode(array('status' => 'error', 'result' => "Unsuccessful Entry")));
		}
	}

?>