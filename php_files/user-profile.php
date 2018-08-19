<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');

    include 'Dbconfig.php';
    Dbconfig::Init();
    $received=json_decode(file_get_contents('php://input'));
    $empcode="1234";
    $received->email;
$received->contact;
    $received->description;
    
    $retrieved_pass="select email,contact,description from user_details where empcode=$empcode";
    $return=Dbconfig::ReadTable($retrieved_pass);
    $outp = "";
    if($return->num_rows > 0){
        while($row = $result->fetch_array(MYSQLI_ASSOC)) {
            if ($outp != "") {$outp .= ",";}
            $outp .= '{"email":"'  . $row["email"] . '",';
            $outp .= '"description":"'  . $row["description"] . '",';
            $outp .= '"contact":"'   . $rs["contact"]        . '"}';
        }
        $outp ='{"records":['.$outp.']}';
    }
        else{
            echo "User not found";
        }
$update_pass="update user_details set email= ,contact= ,description =, role = , gender = , password = , name = ,   where empcode=$empcode";
    $return=Dbconfig::UpdateTable($update_pass);
   

echo($outp);

?>