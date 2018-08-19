<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');

    include 'Dbconfig.php';
    
    $received=json_decode(file_get_contents('php://input', true));
    $request_type=$received->req_type;
    $empcode=$received->empcode;

    //Switch case
    switch($request_type)
    {
        case "1": 
        {
            $result="";    
            //Training Material
            Dbconfig::Init();
            $query="select * from training_material limit 4";
            $return=Dbconfig::ReadTable($query);
            if ($return->num_rows > 0) {
                // output data of each row
                while($row = $result->fetch_array(MYSQLI_ASSOC)) {
                    if ($result != "") {$result .= ",";}
                    $result .= '{"subject_id":"'  . $row["subject_id"] . '",';
                    $result .= '"file_path":"'   . $row["file_path"]        . '"}';
                }
                $result ='{"material_records":['.$result.']},';
                echo $result;
            }
            Dbconfig::CloseConnection();
            break;
        }

        case "2": 
        {
            $result="";    
            //Assessment
            Dbconfig::Init();
            $query="select subject_name,percent from assessment_table,subject_list where empcode=$empcode and subject_list.subject_id=assessment_table.subject_id limit 4";
            $return=Dbconfig::ReadTable($query);
            if ($return->num_rows > 0) {
                // output data of each row
                while($row = $result->fetch_array(MYSQLI_ASSOC)) {
                    if ($result != "") {$result .= ",";}
                    $result .= '{"subject_name":"'  . $row["subject_name"] . '",';
                    $result .= '"percent":"'   . $row["percent"]        . '"}';
                }
                $result ='{"assessment_records":['.$result.']},';
                echo $result;
            }
            Dbconfig::CloseConnection();
            break;
        }

        case "3": 
        {
            $result="";    
            //Front
            Dbconfig::Init();
            $query="select sum(percent) from assessment_table,subject_list where empcode=$empcode and subject_list.subject_id=assessment_table.subject_id and subject_list.category='Client Side'";
            $return=Dbconfig::ReadTable($query);
            if ($return->num_rows > 0) {
                // output data of each row
                while($row = $result->fetch_array(MYSQLI_ASSOC)) {
                    if ($result != "") {$result .= ",";}
                        $result .= '{"percent":"'  . $row["percent"] . '"}';
                    }
                             
                $result ='{"percent":['.$result.']},';
                echo $result;
            }
            Dbconfig::CloseConnection();
            break;
        }

        case "4": 
        {
            $result="";    
            //Back
            Dbconfig::Init();
            $query="select sum(percent) from assessment_table,subject_list where empcode=$empcode and subject_list.subject_id=assessment_table.subject_id and subject_list.category='Server Side'";
            $return=Dbconfig::ReadTable($query);
            if ($return->num_rows > 0) {
                // output data of each row
                while($row = $result->fetch_array(MYSQLI_ASSOC)) {
                    if ($result != "") {$result .= ",";}
                        $result .= '{"percent":"'  . $row["percent"] . '"}';
                    }
                             
                $result ='{"percent":['.$result.']},';
                echo $result;
            }
            Dbconfig::CloseConnection();
            break;
        }

        case "5": 
        {
            $result="";    
            //Back
            Dbconfig::Init();
            $query="select sum(percent) from assessment_table,subject_list where empcode=$empcode and subject_list.subject_id=assessment_table.subject_id and subject_list.category='Database'";
            $return=Dbconfig::ReadTable($query);
            if ($return->num_rows > 0) {
                // output data of each row
                while($row = $result->fetch_array(MYSQLI_ASSOC)) {
                    if ($result != "") {$result .= ",";}
                        $result .= '{"percent":"'  . $row["percent"] . '"}';
                    }
                             
                $result ='{"percent":['.$result.']},';
                echo $result;
            }
            Dbconfig::CloseConnection();
            break;
        }

        case "6": 
        {
            $result="";    
            //Back
            Dbconfig::Init();
            $query="select sum(percent) from assessment_table,subject_list where subject_list.subject_id=assessment_table.subject_id and subject_list.category='Client Side'";
            $return=Dbconfig::ReadTable($query);
            if ($return->num_rows > 0) {
                // output data of each row
                while($row = $result->fetch_array(MYSQLI_ASSOC)) {
                    if ($result != "") {$result .= ",";}
                        $result .= '{"percent":"'  . $row["percent"] . '"}';
                    }
                             
                $result ='{"percent":['.$result.']},';
                echo $result;
            }
            Dbconfig::CloseConnection();
            break;
        }


        case "7": 
        {
            $result="";    
            //Back
            Dbconfig::Init();
            $query="select sum(percent) from assessment_table,subject_list where subject_list.subject_id=assessment_table.subject_id and subject_list.category='Server Side'";
            $return=Dbconfig::ReadTable($query);
            if ($return->num_rows > 0) {
                // output data of each row
                while($row = $result->fetch_array(MYSQLI_ASSOC)) {
                    if ($result != "") {$result .= ",";}
                        $result .= '{"percent":"'  . $row["percent"] . '"}';
                    }
                             
                $result ='{"percent":['.$result.']},';
                echo $result;
            }
            Dbconfig::CloseConnection();
            break;
        }
            
        case "8": 
        {
            $result="";    
            //Back
            Dbconfig::Init();
            $query="select sum(percent) from assessment_table,subject_list where subject_list.subject_id=assessment_table.subject_id and subject_list.category='Database'";
            $return=Dbconfig::ReadTable($query);
            if ($return->num_rows > 0) {
                // output data of each row
                while($row = $result->fetch_array(MYSQLI_ASSOC)) {
                    if ($result != "") {$result .= ",";}
                        $result .= '{"percent":"'  . $row["percent"] . '"}';
                    }
                             
                $result ='{"percent":['.$result.']},';
                echo $result;
            }
            Dbconfig::CloseConnection();
            break;
        
        }
    }

?>