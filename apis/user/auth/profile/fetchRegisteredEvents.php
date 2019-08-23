<!-- Get all the registered events for a particular participant-->
<?php
    include('../../../db.php');
    $innoID = $_GET['q'];
	if($_SERVER["REQUEST_METHOD"] === "GET" && $innoID != "") 
	{
		$sql1 = "SELECT * FROM events_registration WHERE inno_id='".$innoID."'";
		$res1 = mysqli_query($conn, $sql1);
		if(mysqli_num_rows($res1) == 0)
		{
			
				echo(json_encode(array("status"=>"failure","result" => "No registered events")));
			
		}
		else
		{
			$res = mysqli_fetch_all($res1);
			echo(json_encode(array('status' => 'success', 'result' => $res)));
		}
	}
	else
	{
		echo(json_decode(array("status" => "failure","result"=>"Request Couuldn't be processed")));
	}
?>