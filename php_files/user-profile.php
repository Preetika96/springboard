<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');

    include 'Dbconfig.php';
    Dbconfig::Init();
    $received=json_decode(file_get_contents('php://input',true));
    $empcode=$received->empcode;
    
    $retrieved_pass="select email,contact,description from user_details where empcode=$empcode";
    $return=Dbconfig::ReadTable($retrieved_pass);
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

echo($outp);
Dbconfig::CloseConnection();
?>