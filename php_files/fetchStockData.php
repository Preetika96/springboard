<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    header("Access-Control-Allow-Headers: X-Requested-With");
    include 'Dbconfig.php';
    
    $received=json_decode(file_get_contents('php://input', true));
    $request_type=$received->req_type;

    //Switch case
    switch($request_type)
    {
        case "1": 
                {
                    $result="";    
                    //send SUbjects List
                    Dbconfig::Init();
                    $query="SELECT subject_name FROM subject_list";
                    $return=Dbconfig::ReadTable($query);
                    if ($return->num_rows > 0) {
                        // output data of each row
                        while($row = $return->fetch_assoc()) {
                            $result .= $row["subject_name"] . ",";
                        }
                        echo $result;
                    }
                    Dbconfig::CloseConnection();
                    break;
                }
        case "2": //Fetch students List
                {         
                    $result="";          
                    //send SUbjects List
                    Dbconfig::Init();
                    $query="SELECT distinct(empname) FROM assessment_table";
                    $return=Dbconfig::ReadTable($query);
                    if ($return->num_rows > 0) {
                        // output data of each row
                        while($row = $return->fetch_assoc()) {
                             $result .= $row["empname"] . ",";
                        }
                        echo $result;
                    }
                    Dbconfig::CloseConnection();
                    break;
                }
        case "3": //Show subjects
                {         
                    $result="";          
                    //send SUbjects List
                    Dbconfig::Init();
                    $query="SELECT category, subject_name FROM subject_list";
                    $return=Dbconfig::ReadTable($query);
                    if ($return->num_rows > 0) {
                        // output data of each row
                        while($row = $return->fetch_assoc()) {
                            if($result != "") {$result.= ",";}
                             $result .= '{"name":"'.$row["subject_name"] . '",';
                                $result .= '"category":"'.$row["category"] . '"}';
                        }
                        $result='{"records":['.$result.']}';
                        echo $result;
                    }
                    Dbconfig::CloseConnection();
                    break;
                } 
        case "4": //Show Students based on Subject
                {         
                    $subject_name = $received->subject_name;
                    $result="";          
                    //send SUbjects List
                    Dbconfig::Init();
                    $query="SELECT empcode, empname, percent FROM assessment_table WHERE subject_id = 
                                                        (SELECT subject_id FROM subject_list WHERE subject_name = '$subject_name')";
                    $return=Dbconfig::ReadTable($query);
                    if ($return->num_rows > 0) {
                        // output data of each row
                        while($row = $return->fetch_assoc()) {
                            if($result != "") {$result.= ",";}
                            $result .= '{"empcode":"'.$row["empcode"] . '",';
                             $result .= '"empname":"'.$row["empname"] . '",';
                            $result .= '"percent":"'.$row["percent"] . '"}';
                        }
                        $result='{"records":['.$result.']}';
                        echo $result;
                    }
                    Dbconfig::CloseConnection();
                    break;
                } 
        case "5": //Show asessments based on student name
                {         
                    $student_name = $received->student_name;
                    $result=""; 
                    Dbconfig::Init();
                    $query="SELECT subject_list.subject_name, assessment_table.percent 
                                    FROM subject_list INNER JOIN assessment_table
                                    ON subject_list.subject_id = assessment_table.subject_id 
                                    AND assessment_table.empname = '$student_name'";

                    $return=Dbconfig::ReadTable($query);
                    if ($return->num_rows > 0) {
                        // output data of each row
                        while($row = $return->fetch_assoc()) {
                            if($result != "") {$result.= ",";}
                            $result .= '{"subject_name":"'.$row["subject_name"] . '",';                           
                            $result .= '"percent":"'.$row["percent"] . '"}';
                        }
                        $result='{"records":['.$result.']}';
                        echo $result;
                    }
                    Dbconfig::CloseConnection();
                    break;
                }               
    }    
?>