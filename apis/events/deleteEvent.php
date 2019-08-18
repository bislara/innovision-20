<?php
    include('../db.php');

    $eid = $_POST["eid"];    
    $result = mysqli_query($conn, "SELECT image_path FROM events WHERE eid =".$eid);    
    $res = mysqli_fetch_array($result,MYSQLI_ASSOC);

    $path=pathinfo($res['image_path'])['basename'];    
    unlink("../../assets/images/events/".$path) or die("Couldnt Delete File");

    $query = mysqli_query($conn, "DELETE FROM events WHERE eid =".$eid);
    if ($query) {
        echo(json_encode(array('status' => 'success', 'result' => 'successful deletion')));
    }
    else {
        echo(json_encode(array('status' => 'failure', 'result' => 'Deletion failed')));
    }
?>