<?php
include ('../db.php');

$payment_id = $_POST['payment_id'];
$payment_req_id = $_POST['payment_request_id'];
$status = $_POST['status'];
$payment_detail = implode(",",$_POST);


if(isset($payment_id) && isset($payment_req_id) && $status == 'Credit')
{
    //FIND A RECORD FROM THE TABLE WITH THE payment_id AND UPDATE IT
    $query = mysqli_query($conn,"UPDATE users SET payment_status ='Y', payment_detail='".$payment_detail."' WHERE payment_id ='".$payment_req_id."'");

    if($query)
    {
         echo(json_encode(array('status' => 'success', 'message' => 'Payment  Was Successful !!!')));
    }
    else
    {
         echo(json_encode(array('status' => 'failure', 'message' => 'No record found')));
    }

}
else
{
    echo(json_encode(array('status' => 'failure', 'message' => 'Payment Was Unsuccessful')));
}
?>