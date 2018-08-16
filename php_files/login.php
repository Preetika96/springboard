<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');

    include 'Dbconfig.php';
    Dbconfig::Init();
    $received=json_decode(file_get_contents('php://input'));
    $empcode=$received->empcode;
    $password=md5($received->password);

    $retrieved_pass="select password from user_details where empcode=$empcode";
    $return=Dbconfig::ReadTable($retrieved_pass);
    if($return->num_rows > 0){
        $row = $return->fetch_assoc();
        if($password===$row['password']){
            echo "Login Successful";
        }
        else{
            echo "User not found";
        }
    
    }
    else{
        echo "Employee Code doesn't exist";
    }


?>