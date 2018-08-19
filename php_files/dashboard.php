<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');

    include 'Dbconfig.php';
    Dbconfig::Init();
    $received=json_decode(file_get_contents('php://input'));
    $empcode="1234";

//Training
    $retrieved_training="select * from training_material limit 4";
    $return=Dbconfig::ReadTable($retrieved_training);
    $outp = "";
    if($return->num_rows > 0){
        while($row = $result->fetch_array(MYSQLI_ASSOC)) {
            if ($outp != "") {$outp .= ",";}
            $outp .= '{"subject_id":"'  . $row["subject_id"] . '",';
            $outp .= '"file_path":"'   . $row["file_path"]        . '"}';
        }
        $outp ='{"material_records":['.$outp.']},';
    }
        else{
            echo "User not found";
        }
    //Assessment 
    $retrieved_assess="select subject_name,percent from assessment_table,subject_list where empcode=$empcode and subject_list.subject_id=assessment_table.subject_id limit 4";
    $return=Dbconfig::ReadTable($retrieved_assess);
        $outp = "";
        if($return->num_rows > 0){
            while($row = $result->fetch_array(MYSQLI_ASSOC)) {
                if ($outp != "") {$outp .= ",";}
                $outp .= '{"subject_name":"'  . $row["subject_name"] . '",';
                $outp .= '"percent":"'   . $row["percent"]        . '"}';
            }
            $outp .='{"assessment_records":['.$outp.']}';
        }
            else{
                echo "User not found";
            }
    //Front
  $retrieved_front="select sum(percent) from assessment_table,subject_list where empcode=$empcode and subject_list.subject_id=assessment_table.subject_id and subject_list.category='Client Side'";
    $return=Dbconfig::ReadTable($retrieved_front);
        $outp = "";
        if($return->num_rows > 0){
            while($row = $result->fetch_array(MYSQLI_ASSOC)) {
                if ($outp != "") {$outp .= ",";}
                $outp .= '{"percent":"'  . $row["subject_name"] . '"}';
            }
         
        }
            else{
                echo "User not found";
            }
//Back
$retrieved_back="select sum(percent) from assessment_table,subject_list where empcode=$empcode and subject_list.subject_id=assessment_table.subject_id and subject_list.category='Server Side'";
    $return=Dbconfig::ReadTable($retrieved_back);
        $outp = "";
        if($return->num_rows > 0){
            while($row = $result->fetch_array(MYSQLI_ASSOC)) {
                if ($outp != "") {$outp .= ",";}
                $outp .= '{"percent":"'  . $row["subject_name"] . '"}';
            }
         
        }
            else{
                echo "User not found";
            }
//Database
$retrieved_data="select sum(percent) from assessment_table,subject_list where empcode=$empcode and subject_list.subject_id=assessment_table.subject_id and subject_list.category='Database'";
    $return=Dbconfig::ReadTable($retrieved_back);
        $outp = "";
        if($return->num_rows > 0){
            while($row = $result->fetch_array(MYSQLI_ASSOC)) {
                if ($outp != "") {$outp .= ",";}
                $outp .= '{"percent":"'  . $row["subject_name"] . '"}';
            }
         
        }
            else{
                echo "User not found";
            }

//Front-Admin
  $retrieved_front="select sum(percent) from assessment_table,subject_list where subject_list.subject_id=assessment_table.subject_id and subject_list.category='Client Side'";
    $return=Dbconfig::ReadTable($retrieved_front);
        $outp = "";
        if($return->num_rows > 0){
            while($row = $result->fetch_array(MYSQLI_ASSOC)) {
                if ($outp != "") {$outp .= ",";}
                $outp .= '{"percent":"'  . $row["subject_name"] . '"}';
            }
         
        }
            else{
                echo "User not found";
            }

//Back-Admin
  $retrieved_front="select sum(percent) from assessment_table,subject_list where subject_list.subject_id=assessment_table.subject_id and subject_list.category='Server Side'";
    $return=Dbconfig::ReadTable($retrieved_front);
        $outp = "";
        if($return->num_rows > 0){
            while($row = $result->fetch_array(MYSQLI_ASSOC)) {
                if ($outp != "") {$outp .= ",";}
                $outp .= '{"percent":"'  . $row["subject_name"] . '"}';
            }
         
        }
            else{
                echo "User not found";
            }

//Database-Admin
  $retrieved_front="select sum(percent) from assessment_table,subject_list where subject_list.subject_id=assessment_table.subject_id and subject_list.category='Server Side'";
    $return=Dbconfig::ReadTable($retrieved_front);
        $outp = "";
        if($return->num_rows > 0){
            while($row = $result->fetch_array(MYSQLI_ASSOC)) {
                if ($outp != "") {$outp .= ",";}
                $outp .= '{"percent":"'  . $row["subject_name"] . '"}';
            }
         
        }
            else{
                echo "User not found";
            }




?>