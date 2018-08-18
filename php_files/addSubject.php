<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    header("Access-Control-Allow-Headers: X-Requested-With");
    include 'Dbconfig.php';
    
    $received=json_decode(file_get_contents('php://input', true));
    $subject_name=$received->subject_name;
    $subject_type=$received->subject_type;

    Dbconfig::Init();
    $query="INSERT INTO subject_list(subject_name, category) VALUES ('$subject_name','$subject_type')";
    $return=Dbconfig::InsertData($query);
   if($return === "inserted")
   {
       echo "Subject Inserted.";
   }
   else{
       echo "Subject not inserted.";
   }     
   Dbconfig::CloseConnection();
?>