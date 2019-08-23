<?php

	include('../db.php');

	if($_SERVER["REQUEST_METHOD"] === "GET") 
	{

		$query = mysqli_query($conn, "SELECT * FROM college");
		$result = array();
		while($res = mysqli_fetch_array($query, MYSQLI_ASSOC)) {
    		$result[] = $res;
		}

		echo(json_encode(array('status' => 'success', 'result' => $result)));
	}

?>