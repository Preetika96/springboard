<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');

include 'Dbconfig.php';
$received=json_decode(file_get_contents('php://input'));

$empcode=$received->empcode;
$name=$received->empname;
$contact=$received->contact;
$email=$received->email;
$description=$received->description;
$sql="";
$status="";

Dbconfig::Init();
$fetch_query="UPDATE user_details SET name='$name', contact=$contact, email= '$email',
              description='$description' where empcode=$empcode";
 $return=Dbconfig::UpdateTable($fetch_query);
 if ($return === "updated" ) {
    echo $return;
}
else {
    //invalid user
    echo $return;
}
Dbconfig::CloseConnection();
?>