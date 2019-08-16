<?php
	include('../db.php');

	// $_POST["innoID"]=3;
	// $_POST['eid']=1;
	if(isset($_POST["innoID"]) && isset($_POST["eid"]))
	{
		$sql1 = "SELECT * FROM events_registration WHERE inno_id='".$_POST["innoID"]."' and event_id='".$_POST["eid"]."'";
		$res1 = mysqli_query($conn, $sql1);
		if(mysqli_num_rows($res1) == 0)
		{
			$sql2 = "INSERT INTO events_registration (inno_id, event_id) VALUES (".$_POST["innoID"].", ".$_POST["eid"].")";
			$res2 = mysqli_query($conn, $sql2);
			if($res2)
			{
				echo(json_encode(array("status"=>"registration done")));
			}
			else
			{
				echo(json_encode(array("status"=>"failure")));
			}
		}
		else
		{
			echo(json_encode(array("status" => "already registered")));
		}
	}
	else
	{
		echo(json_decode(array("status" => "failure")));
	}
?>