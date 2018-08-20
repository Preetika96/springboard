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
//  $sql="create table if not exists user_details (empcode int,name varchar(30),email varchar(30),contact int,role varchar(30),gender varchar(10),password varchar(100))";
$fetch_query="UPDATE user_details SET name='$name', contact='$contact', email= '$email',
              description='$description' where empcode=$empCode";
 $return=Dbconfig::UpdateTable($fetch_query);
 if ($return == "updated" ) {
    echo "Details Updated successfully";
}
else {
    //invalid user
    echo "Employee Code not present";
}
Dbconfig::CloseConnection();
?>