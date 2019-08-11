<?php
    include('../db.php');

    $eid = $_POST["eid"];
    $query = mysqli_query($conn, "DELETE FROM events WHERE eid =".$eid);
    if ($query) {
        echo(json_encode(array('status' => 'success', 'result' => 'successful deletion')));
    }
    else {
        echo(json_encode(array('status' => 'failure', 'result' => 'Deletion failed')));
    }
?>