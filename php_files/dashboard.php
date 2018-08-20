<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');

    include 'Dbconfig.php';
    
    $received=json_decode(file_get_contents('php://input', true));
    $request_type=$received->req_type;
    $empcode=$received->empcode;
    $return;

    //Switch case
    switch($request_type)
    {
        case "1": 
        {
            $result="";    
            //Training Material
            Dbconfig::Init();
            $query="select subject_name,file_path from training_material,subject_list 
                    where training_material.subject_id=subject_list.subject_id limit 4";
            $return=Dbconfig::ReadTable($query);
            if ($return->num_rows > 0) {
                // output data of each row
                while($row = $return->fetch_assoc()) {
                    if ($result != "") {$result .= ",";}
                    $result .= '{"subject_name":"'  . $row["subject_name"] . '",';
                    $result .= '"file_path":"'   . explode("/", $row['file_path'])[1]  . '"}';
                }
                $result ='{"materialrecords":['.$result.']}=';
                echo $result;   
                $return = null;            

            }
            // Dbconfig::CloseConnection();
            // break;
        }

        case "2": 
        {
            $result="";    
            //Assessment
            // Dbconfig::Init();
            $query="select subject_list.subject_name,assessment_table.percent from assessment_table,subject_list 
                    where assessment_table.empcode=$empcode and subject_list.subject_id=assessment_table.subject_id limit 4";
            $return=Dbconfig::ReadTable($query);          
                // output data of each row
                while($row = $return->fetch_array(MYSQLI_ASSOC)) {
                    if ($result != "") {$result .= ",";}
                    $result .= '{"subject_name":"'  . $row["subject_name"] . '",';
                    $result .= '"percent":"'   . $row["percent"]        . '"}';
                }
                $result ='{"assessmentrecords":['.$result.']}=';
                echo $result;
                $return = null;
            
            // Dbconfig::CloseConnection();
            // break;
        }

        case "3": 
        {
            $result="";    
            //Front
            // Dbconfig::Init();
            $query="select sum(percent) as percent from assessment_table,subject_list 
                    where subject_list.subject_id=assessment_table.subject_id 
                    and assessment_table.empcode=$empcode
                    and subject_list.category='Client Side'";
            $return=Dbconfig::ReadTable($query);
            if ($return->num_rows > 0) {
                // output data of each row
                while($row = $return->fetch_array(MYSQLI_ASSOC)) {
                    if ($result != "") {$result .= ",";}
                        $result .= '{"percent":"'  . $row["percent"] . '"}';
                    }
                             
                $result ='{"clientsidescore":['.$result.']}=';
                echo $result;
                $return = null;
            }
            // Dbconfig::CloseConnection();
            // break;
        }

        case "4": 
        {
            $result="";    
            //Back
            // Dbconfig::Init();
            $query="select sum(percent) as percent 
                    from assessment_table,subject_list 
                    where assessment_table.empcode=$empcode 
                    and subject_list.subject_id=assessment_table.subject_id 
                    and subject_list.category='Server Side' ";
            $return=Dbconfig::ReadTable($query);
            if ($return->num_rows > 0) {
                // output data of each row
                while($row = $return->fetch_array(MYSQLI_ASSOC)) {
                    if ($result != "") {$result .= ",";}
                        $result .= '{"percent":"'  . $row["percent"] . '"}';
                    }
                             
                $result ='{"serversidescore":['.$result.']}=';
                echo $result;
            }
            // Dbconfig::CloseConnection();
            // break;
        }

        case "5": 
        {
            $result="";    
            //Database
            // Dbconfig::Init();
            $query="select sum(percent) as percent
            from assessment_table,subject_list 
            where empcode=$empcode and subject_list.subject_id=assessment_table.subject_id 
            and subject_list.category='Database'";
            $return=Dbconfig::ReadTable($query);
            if ($return->num_rows > 0) {
                // output data of each row
                while($row = $return->fetch_array(MYSQLI_ASSOC)) {
                    if ($result != "") {$result .= ",";}
                        $result .= '{"percent":"'  . $row["percent"] . '"}';
                    }
                             
                $result ='{"databasescore":['.$result.']}';
                echo $result;
            }
            Dbconfig::CloseConnection();
            break;
        }

        case "6": 
        {
            $result="";    
            //admin front
            Dbconfig::Init();
            $query="select avg(percent) as percent
            from assessment_table,subject_list 
            where subject_list.subject_id=assessment_table.subject_id 
            and subject_list.category='Client Side'";
            $return=Dbconfig::ReadTable($query);
            if ($return->num_rows > 0) {
                // output data of each row
                while($row = $return->fetch_array(MYSQLI_ASSOC)) {
                    if ($result != "") {$result .= ",";}
                        $result .= '{"percent":"'  . $row["percent"] . '"}';
                    }
                             
                $result ='{"clientside":['.$result.']}=';
                echo $result;
            }
            // Dbconfig::CloseConnection();
            // break;
        }


        case "7": 
        {
            $result="";    
            //admin Back
            //Dbconfig::Init();
            $query="select avg(percent) as percent
            from assessment_table,subject_list 
            where subject_list.subject_id=assessment_table.subject_id 
            and subject_list.category='Server Side'";
            $return=Dbconfig::ReadTable($query);
            if ($return->num_rows > 0) {
                // output data of each row
                while($row = $return->fetch_array(MYSQLI_ASSOC)) {
                    if ($result != "") {$result .= ",";}
                        $result .= '{"percent":"'  . $row["percent"] . '"}';
                    }
                             
                $result ='{"serverside":['.$result.']}=';
                echo $result;
            }
            // Dbconfig::CloseConnection();
            // break;
        }
            
        case "8": 
        {
            $result="";    
            //admin database
            //Dbconfig::Init();
            $query="select avg(percent) as percent
            from assessment_table,subject_list 
            where subject_list.subject_id=assessment_table.subject_id 
            and subject_list.category='Database'";
            $return=Dbconfig::ReadTable($query);
            if ($return->num_rows > 0) {
                // output data of each row
                while($row = $return->fetch_array(MYSQLI_ASSOC)) {
                    if ($result != "") {$result .= ",";}
                        $result .= '{"percent":"'  . $row["percent"] . '"}';
                    }
                             
                $result ='{"database":['.$result.']}=';
                echo $result;
            }
             Dbconfig::CloseConnection();
            // break;        
        }

        case "9": 
        {
            $result="";    
            //Training Material
            Dbconfig::Init();
            $query="select subject_name,file_path from training_material,subject_list 
                    where training_material.subject_id=subject_list.subject_id";
            $return=Dbconfig::ReadTable($query);
            if ($return->num_rows > 0) {
                // output data of each row
                while($row = $return->fetch_assoc()) {
                    if ($result != "") {$result .= ",";}
                    $result .= '{"subject_name":"'  . $row["subject_name"] . '",';
                    $result .= '"file_path":"'   . explode("/", $row['file_path'])[1]  . '"}';
                }
                $result ='{"materialrecords":['.$result.']}';
                echo $result;   
                $return = null;            

            }
             Dbconfig::CloseConnection();
             break;
        }
    }

?>