<?php
	include('../../db.php');
	include('verifyCaAdmin.php');


	if(isset($_POST["ca_id"]))
	{
		$sql1 = "SELECT * FROM ca_selection_responses WHERE ca_applicant_id='".$_POST["ca_id"]."' ";
		$res1 = mysqli_query($conn, $sql1);
		$res = mysqli_fetch_row($res1);
		// echo ($res['15']);
		if($res['15']==0)
		{
			$sql2 = "UPDATE ca_selection_responses SET selected = 1  WHERE ca_applicant_id='".$_POST["ca_id"]."' ";
			$res2 = mysqli_query($conn, $sql2);
			echo(json_encode(array("status" => "success")));
		}
		else
		{
			$sql2 = "UPDATE ca_selection_responses SET selected = 0  WHERE ca_applicant_id='".$_POST["ca_id"]."' ";
			$res2 = mysqli_query($conn, $sql2);
			echo(json_encode(array("status" => "success")));
		}

	}
	else
	{
		echo(json_encode(array("status" => "failure")));
	}
?>