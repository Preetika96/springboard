<?php
   header('Access-Control-Allow-Origin: *');
   header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
   header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

    include 'Dbconfig.php';
    Dbconfig::Init();
    // echo "Hola Amigo";
    $received=json_decode(file_get_contents('php://input'));
    $empcode=$received->empcode;
    $password=md5($received->password);
    $email;

    $retrieved_pass="select * from user_details where empcode=$empcode";
    $return=Dbconfig::ReadTable($retrieved_pass);
    
    if($return->num_rows > 0){
        $row = $return->fetch_array(MYSQLI_ASSOC);
        if($password===$row['password']){
            $return_json='{"message":"Login Successful","empcode":"' . $empcode . '","role":"' .$row['role'] . '","name":"' . $row['name'] . '"}' ;
        }
        else{
            $return_json= '{"message":"Password Incorrect"}';
        }
    }
    else{
        $return_json ='{"message":"Employee Code does not exist"}';
    }
    $return_json='{"result":[' . $return_json .']}';
    Dbconfig::CloseConnection();
    echo $return_json;
?>