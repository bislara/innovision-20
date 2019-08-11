<?php

    include('../db.php');
    include('../panels/cms/verifyCMSAdmin.php');
    

    if (isset($status) && $status === "success") {

        if( isset($_POST['title']) && isset($_POST['description']) && isset($_POST['rules']) && isset($_POST['judging_criteria'])&&
        isset($_POST['date']) && isset($_POST['venue']) && isset($_POST['time']) && isset($_POST['category']) && 
        isset($_POST['coordinatorName1']) && isset($_POST['coordinatorContact1']) && isset($_POST['coordinatorName2']) && 
        isset($_POST['coordinatorContact2'])) {
            $query = "INSERT INTO events (title, description, rules, judging_criteria, date, venue, time, category, coordinatorName1, coordinatorContact1, coordinatorName2, coordinatorContact2,date1,time1) VALUES ('".mysqli_real_escape_string($conn,$_POST['title'])."','".mysqli_real_escape_string($conn,$_POST['description'])."','".mysqli_real_escape_string($conn,$_POST['rules'])."','".mysqli_real_escape_string($conn,$_POST['judging_criteria'])."','".mysqli_real_escape_string($conn,$_POST['date'])."','".mysqli_real_escape_string($conn,$_POST['venue'])."','".mysqli_real_escape_string($conn,$_POST['time'])."','".mysqli_real_escape_string($conn,$_POST['category'])."','".mysqli_real_escape_string($conn,$_POST['coordinatorName1'])."','".mysqli_real_escape_string($conn,$_POST['coordinatorContact1'])."','".mysqli_real_escape_string($conn,$_POST['coordinatorName2'])."','".mysqli_real_escape_string($conn,$_POST['coordinatorContact2'])."','".mysqli_real_escape_string($conn,$_POST['date1'])."','".mysqli_real_escape_string($conn,$_POST['time1'])."')";

            if (mysqli_query($conn, $query)) {
            
                // if(is_uploaded_file($_FILES["fileToUpload"]["name"])) { 
                    

                    $allowedExtension = array('gif','png' ,'jpg', 'jpeg', 'bmp');

                    if( in_array( pathinfo( $_FILES["fileToUpload"]["name"], PATHINFO_EXTENSION), $allowedExtension)) {


                        $id_que = mysqli_query($conn,"select eid from events");
                        $id_res = mysqli_fetch_all($id_que, MYSQLI_NUM);
                            
                        $ext = pathinfo($_FILES["fileToUpload"]["name"], PATHINFO_EXTENSION);
                        $file_path_name = "../../images/events/eid_".($id_res[mysqli_num_rows($id_que)-1][0]).('.').$ext;                

                        if(move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $file_path_name)) {

                            $img_path = $file_path_name;
                            $queryImageAdd = "update events set image_path='".mysqli_real_escape_string($conn,$img_path)."' where eid='".$id_res[mysqli_num_rows($id_que)-1][0]."'";
                            $resultImageAdd = mysqli_query($conn, $queryImageAdd);

                            echo(json_encode(array('status' => 'success', 'result' => 'successful entry')));
                        }

                        else {

                            echo(json_encode(array('status' => 'failure', 'result' => 'image upload failed')));
                        }
                    }

                    else {

                        echo(json_encode(array('status' => 'failure', 'result' => 'wrong image type')));

                    }
                // }
                // else{

                //     echo(json_encode(array('status' => 'failure', 'result' => 'Event details updated. Image not selected or upload failed')));
                // }
            }
            else {

                echo(json_encode(array('status' => 'failure', 'result' => 'DB operations failed')));
            }

        }//end of 1st if
        else
        {
            echo(json_encode(array('status' => 'failure', 'result' => 'some field are missing')));
        }
    } else {

        echo(json_encode(array('status' => 'failure', 'result' => 'invalid token')));
    }
?>
