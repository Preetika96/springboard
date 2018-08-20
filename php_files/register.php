<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');


include 'Dbconfig.php';
$received=json_decode(file_get_contents('php://input'));

$name=$received->name;
$empCode=$received->empCode;
$email=$received->email;
$contact=$received->contact;
$password=$received->password;
$password=md5($password);
$gender=$received->gender;
//$role=$received->role;
$sql="";
$status="";

Dbconfig::Init();
$fetch_query="select empcode from user_details where empcode=$empCode";
 $return=Dbconfig::ReadTable($fetch_query);
 if ($return->num_rows > 0) {
    //Code presemt and cam continue with registration
    $result ="update user_details 
        set name='$name',
        email='$email',
        contact=$contact,        
        gender='$gender',
        password='$password'
        where empcode = $empCode";

    $status=Dbconfig::UpdateTable($result);    
    if($status==="updated"){
        echo '{"result":' . '"Registered Successfully"}';
    //    echo "Registered Successfully";
    }
    else{
       echo '{"result":' . '"Registration Failed"}';
    }
}
else {
    //invalid user
    echo '{"result":' . '"Employee Code not present"}';
    // echo "Employee Code not present";
}
Dbconfig::CloseConnection();
?>