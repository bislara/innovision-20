<?php
include('../db.php');
$q = $_GET['inno_id'];

if($_SERVER["REQUEST_METHOD"] === "GET"){
    $query0 = "SELECT * FROM certificate WHERE inno_id='".$q."'";
    $result0 = mysqli_query($conn,$query0);
    $row0 = mysqli_fetch_all($result0);
    if(mysqli_num_rows($result0) > 0){
        echo(json_encode(array('status' => 'success', 'message' => $row0)));
    }
    else{
        echo(json_encode(array('status' => 'failure', 'message' => 'No certificates Found')));
    }
}

?>