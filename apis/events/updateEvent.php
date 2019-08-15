<?php
    
    include('../db.php');
    include('../panels/cms/verifyCMSAdmin.php');

    
    if (isset($status) && $status === "success") {
    $eid = $_POST["eid"];
    $query = mysqli_query($conn, "SELECT * FROM events WHERE eid =".$eid);
    if (mysqli_num_rows($query) == 0) {
        echo(json_encode(array('status' => 'failure', 'result' => 'eid not found')));
    }
    else {
        
        $title=mysqli_real_escape_string($conn,$_POST['title']);
        
        /* NOTE: The below query doesnt have date1 and 
        time1 attributes since it didnt match with db */
        
        //$query = "UPDATE events SET title ='".mysqli_real_escape_string($conn,$_POST['title'])."', description ='".mysqli_real_escape_string($conn,$_POST['description'])."', rules ='".mysqli_real_escape_string($conn,$_POST['rules'])."', judging_criteria ='".mysqli_real_escape_string($conn,$_POST['judging_criteria'])."', date ='".mysqli_real_escape_string($conn,$_POST['date'])."', date1 ='".mysqli_real_escape_string($conn,$_POST['date1'])."', venue ='".mysqli_real_escape_string($conn,$_POST['venue'])."', time ='".mysqli_real_escape_string($conn,$_POST['time'])."', time1 ='".mysqli_real_escape_string($conn,$_POST['time1'])."', category ='".mysqli_real_escape_string($conn,$_POST['category'])."', coordinatorName1 ='".mysqli_real_escape_string($conn,$_POST['coordinatorName1'])."', coordinatorContact1 ='".mysqli_real_escape_string($conn,$_POST['coordinatorContact1'])."', coordinatorName2 ='".mysqli_real_escape_string($conn,$_POST['coordinatorName2'])."', coordinatorContact2 ='".mysqli_real_escape_string($conn,$_POST['coordinatorContact2'])."',loginId ='".mysqli_real_escape_string($conn,$_POST['loginId'])."',loginPassword ='".mysqli_real_escape_string($conn,$_POST['loginPassword'])."' WHERE eid =".$eid;
        $query = "UPDATE events SET title ='".mysqli_real_escape_string($conn,$_POST['title'])."', description ='".mysqli_real_escape_string($conn,$_POST['description'])."', rules ='".mysqli_real_escape_string($conn,$_POST['rules'])."', judging_criteria ='".mysqli_real_escape_string($conn,$_POST['judging_criteria'])."', date ='".mysqli_real_escape_string($conn,$_POST['date'])."', venue ='".mysqli_real_escape_string($conn,$_POST['venue'])."', time ='".mysqli_real_escape_string($conn,$_POST['time'])."', category ='".mysqli_real_escape_string($conn,$_POST['category'])."', coordinatorName1 ='".mysqli_real_escape_string($conn,$_POST['coordinatorName1'])."', coordinatorContact1 ='".mysqli_real_escape_string($conn,$_POST['coordinatorContact1'])."', coordinatorName2 ='".mysqli_real_escape_string($conn,$_POST['coordinatorName2'])."', coordinatorContact2 ='".mysqli_real_escape_string($conn,$_POST['coordinatorContact2'])."',loginId ='".mysqli_real_escape_string($conn,$_POST['loginId'])."',loginPassword ='".mysqli_real_escape_string($conn,$_POST['loginPassword'])."' WHERE eid =".$eid;
        
        
        
        if (mysqli_query($conn, $query)) {
        
            // if(is_uploaded_file($_FILES["image"]["name"])) {
            //     $allowedExtension = array('gif','png' ,'jpg', 'jpeg', 'bmp');
            //     if( in_array( pathinfo( $_FILES["image"]["name"], PATHINFO_EXTENSION), $allowedExtension)) {
                        
            //         $ext = pathinfo($_FILES["image"]["name"], PATHINFO_EXTENSION);
            //         $file_path_name = "../../images/events/eid_".($eid).('.').$ext;                
            //         if(move_uploaded_file($_FILES["image"]["name"], $file_path_name)) {
                         echo(json_encode(array('status' => 'success', 'result' => 'successful entry')));
            //         }
            //         else {
            //             echo(json_encode(array('status' => 'failure', 'result' => 'image upload failed')));
            //         }
            //     }
            //     else {
            //         echo(json_encode(array('status' => 'failure', 'result' => 'wrong image type')));
            //     }
            // }
            // else{
            //     echo(json_encode(array('status' => 'success', 'result' => 'Event details updated. Image not selected or upload failed')));
            // }
        }
        else {
            echo(json_encode(array('status' => 'failure', 'result' => 'DB operations failed')));
        }
    }
}
?>