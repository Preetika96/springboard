<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');

include 'Dbconfig.php';

// $conn = new mysqli("localhost", "root", "root", "springboard");
// $conn->set_charset("UTF8");
$received=json_decode(file_get_contents('php://input'));

$name=$received->name;
$empCode=$received->empCode;
$email=$received->email;
$contact=$received->contact;
$password=$received->password;
$password=md5($password);
$gender=$received->gender;
$role=$received->role;
$sql="";
$status="";

Dbconfig::Init();
//  $sql="create table if not exists user_details (empcode int,name varchar(30),email varchar(30),contact int,role varchar(30),gender varchar(10),password varchar(100))";
$fetch_query="select empcode from user_details where empcode=$empCode";
 $return=Dbconfig::ReadTable($fetch_query);
 if ($return->num_rows > 0) {
    //Code presemt and cam continue with registration
    $result ="update user_details 
        set name='$name',
        email='$email',
        contact=$contact,
        role='$role',
        gender='$gender',
        password='$password'
        where empcode = $empCode";

    $status=Dbconfig::UpdateTable($result);    
    if($status==="updated"){
       echo "Registered Successfully";
    }
    else{
       echo "Registration Failed";
    }
}
else {
    //invalid user
    echo "Employee Code not present";
}
Dbconfig::CloseConnection();
?>