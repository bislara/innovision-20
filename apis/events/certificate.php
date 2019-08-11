<?php
    include('../db.php');
    $login_id = $_POST['id'];
    $login_pwd = $_POST['password'];
    $winner = $_POST['winner'];
    $runner = $_POST['runner'];

    $query0 = "SELECT * FROM events WHERE loginId='".$login_id."' AND loginPassword='".$login_pwd."'";
    $result0 = mysqli_query($conn,$query0);
    $row0 = mysqli_fetch_assoc($result0);
    if(mysqli_num_rows($result0) > 0){

        $e_id =  $row0['eid'];

        $winner_arr = explode(",",$winner);
        $runner_arr = explode(",",$runner);
        $flag1 = 0;
        for($x = 0; $x < sizeof($winner_arr); $x++){    
            $query1 = "SELECT * FROM users WHERE inno_id='".$winner_arr[$x]."'";
            $result1 = mysqli_query($conn,$query1);
            $row1 = mysqli_fetch_assoc($result1);
            if(mysqli_num_rows($result1) > 0){

                if($row1['college'] == 'National Institute of Technology' || $row1['checked_in'] == 1){
                    $flag1 = 1;
                }
                 else{
                     $flag1 = 0;
                     break;
                }


            }
            else{
                $flag1 = 0;
                break;
            }
        }

        $flag2 = 0;
        for($x = 0; $x < sizeof($runner_arr); $x++){
            $query1 = "SELECT * FROM users WHERE inno_id='".$runner_arr[$x]."'";

            $result1 = mysqli_query($conn,$query1);
            $row1 = mysqli_fetch_assoc($result1);
              if(mysqli_num_rows($result1) > 0){

                if($row1['college'] == 'National Institute of Technology' || $row1['checked_in'] == 1){
                    $flag2 = 1;
                }
                else{
                     $flag2 = 0;
                     break;
                }



            }
            else{
                $flag2 = 0;
                break;
            }
        }
        if($flag1 == 0 || $flag2 == 0){
            echo(json_encode(array('status' => 'failure', 'message' => 'Wrong Data. Some inno_ids have not checked into inno\' 18 or inno_id not found')));
        }
        else{
             //UPDATE THE EVENT ROW WITH WINNER AND RUNNER
            $query2 = "UPDATE events SET winner1='".$winner."', winner2 = '".$runner."' WHERE eid = '".$e_id."'";
            $result2 = mysqli_query($conn,$query2);

            if($result2){

                //GENERATE CERTIFICATE
                $flag3 = 0;
                for($x = 0; $x < sizeof($runner_arr); $x++){
                    $query4 = "SELECT * FROM users WHERE inno_id='".$runner_arr[$x]."'";
                    $result4 = mysqli_query($conn,$query4);
                    $row4 = mysqli_fetch_assoc($result4);
                    //EVENT NAME
                    $query5 = "SELECT * FROM events WHERE eid ='".$e_id."'";
                    $result5 = mysqli_query($conn,$query5);
                    $row5 = mysqli_fetch_assoc($result5);

                    if(mysqli_num_rows($result4) > 0){

                            $query6 = "SELECT * FROM certificate WHERE img_path = 'images/event_results/".$runner_arr[$x]."A".$e_id.".jpg'";
                            $result6 = mysqli_query($conn,$query6);
    
                            $row6 = mysqli_fetch_all($result6);
                            //echo sizeof($row6);

                    if(sizeof($row6) <= 0){
                          $query3 = "INSERT INTO certificate (inno_id,img_path) VALUES(".mysqli_real_escape_string($conn,$runner_arr[$x]).",'images/event_results/".mysqli_real_escape_string($conn,$runner_arr[$x])."A".mysqli_real_escape_string($conn,$e_id).".jpg')";

                        if(mysqli_query($conn,$query3)){
                            $output = '../../images/event_results/'.$runner_arr[$x].'A'.$e_id.'.jpg';
                            $image = imagecreatefromjpeg('../../images/event_results/result.jpg');
                            $font_color = imagecolorallocate($image, 0, 0, 0);
                            $text = imagettftext($image,15,0,340,280,$font_color,"../../fonts/Charmonman/Charmonman-Bold.ttf",strtoupper($row4['name']));
                            $text1 = imagettftext($image,13,0,460,360,$font_color,"../../fonts/Charmonman/Charmonman-Bold.ttf",$row5['title']);
                            $text2 = imagettftext($image,15,0,200,320,$font_color,"../../fonts/Charmonman/Charmonman-Bold.ttf",$row4['college']);
                            $text3 = imagettftext($image,15,0,200,360,$font_color,"../../fonts/Charmonman/Charmonman-Bold.ttf","Runner");
                            imagejpeg($image,$output);

                            $flag3 = 1;
                            
                        }
                        else{

                            $flag3 = 0;
                            break;
                        
                        }
                    }

                            
                        
                    }
                    // else{
                    //     $flag1 = 0;
                    //     break;
                    // }
                  

                   
                }

                $flag4 = 0;
                for($x = 0; $x < sizeof($winner_arr); $x++){
                    
                    $query4 = "SELECT * FROM users WHERE inno_id='".$winner_arr[$x]."'";
                    $result4 = mysqli_query($conn,$query4);
                    $row4 = mysqli_fetch_assoc($result4);
                    
                    $query5 = "SELECT * FROM events WHERE eid ='".$e_id."'";
                    $result5 = mysqli_query($conn,$query5);
                    $row5 = mysqli_fetch_assoc($result5);
                    if(mysqli_num_rows($result4) > 0){

                        $query6 = "SELECT * FROM certificate WHERE img_path = 'images/event_results/".$winner_arr[$x]."A".$e_id.".jpg'";
                        $result6 = mysqli_query($conn,$query6);
                        $row6 = mysqli_fetch_row($result6);

                    if(sizeof($row6) <= 0){
                            $query3 = "INSERT INTO certificate (inno_id,img_path) VALUES(".mysqli_real_escape_string($conn,$winner_arr[$x]).",'images/event_results/".mysqli_real_escape_string($conn,$winner_arr[$x])."A".mysqli_real_escape_string($conn,$e_id).".jpg')";

                        if(mysqli_query($conn,$query3)){
                            $output = '../../images/event_results/'.$winner_arr[$x].'A'.$e_id.'.jpg';
                            $image = imagecreatefromjpeg('../../images/event_results/result.jpg');
                            $font_color = imagecolorallocate($image, 0, 0, 0);
                            $text = imagettftext($image,15,0,340,280,$font_color,"../../fonts/Charmonman/Charmonman-Bold.ttf",strtoupper($row4['name']));
                            $text1 = imagettftext($image,13,0,460,360,$font_color,"../../fonts/Charmonman/Charmonman-Bold.ttf",$row5['title']);
                            $text2 = imagettftext($image,15,0,200,320,$font_color,"../../fonts/Charmonman/Charmonman-Bold.ttf",$row4['college']);
                            $text3 = imagettftext($image,15,0,200,360,$font_color,"../../fonts/Charmonman/Charmonman-Bold.ttf","Winner");
                            imagejpeg($image,$output);
                           
                            $flag4 = 1;

                        
                        }
                        else{
                            $flag4 = 0;
                            break;
                        }
                    }
                         
                    }
                    // else{
                    //     $flag2 = 0;
                    //     break;
                    // }

                    
                }

                if($flag3 == 1 && $flag4 == 1){
                    $query = "UPDATE events SET results_submitted = 1 WHERE eid='".$e_id."'";
                    if(mysqli_query($conn,$query)){
                        echo(json_encode(array('status' => 'success', 'message' => 'Results Updated')));
                    }
                    else{
                        echo(json_encode(array('status' => 'failure', 'message' => 'DB ERROR')));
                    }
                     
                }
                else{
                     echo(json_encode(array('status' => 'failure', 'message' => 'Only New ids are updated')));
                }
               
            }
            else{
                echo(json_encode(array('status' => 'failure', 'message' => 'Results Couldnot be updated')));
            }

        }
       

    }
    else{
        echo(json_encode(array('status' => 'failure', 'message' => 'Unauthorized access')));
    }


?>