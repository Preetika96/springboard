<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');

    include 'Dbconfig.php';
    Dbconfig::Init();
    $received=json_decode(file_get_contents('php://input',true));
    $empcode=$received->empcode;
//     $empcode="1234";
//     $received->email;
// $received->contact;
//     $received->description;
// echo $empcode;
    
    $retrieved_pass="select email,contact,description from user_details where empcode=$empcode";
    $return=Dbconfig::ReadTable($retrieved_pass);
    // echo $return;
    $outp = "";
    if($return->num_rows > 0){
        while($row = $return->fetch_array(MYSQLI_ASSOC)) {
            if ($outp != "") {$outp .= ",";}
            $outp .= '{"email":"'  . $row["email"] . '",';
            $outp .= '"description":"'  . $row["description"] . '",';
            $outp .= '"contact":"'   . $row["contact"]        . '"}';
        }
        $outp ='{"records":['.$outp.']}';
    }
        else{
            echo "User not found";
        }
// $update_pass="update user_details set email= ,contact= ,description =, role = , gender = , password = , name = ,   where empcode=$empcode";
    // $return=Dbconfig::UpdateTable($update_pass);
   

echo($outp);
Dbconfig::CloseConnection();
?>