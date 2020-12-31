<?php 
  echo "<pre>";
 
 
    print_r($_POST);
    echo '</pre>';
    $userName = $_POST['name'];
    $userEmail  = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];


    $to = "bryan@breatheinthislife.com";
    $body = "";

    $body .= "From: ".$userName. "\r\n";
    $body .= "Email: ".$userEmail. "\r\n";
    $body .= "Message: ".$message. "\r\n";
    $body .= "Phone Number: ".$phone. "\r\n";

  
  mail($to,$body);

?>  