<?php
    header("Access-Control-Allow-Origin: *");     
   header("content-type: application/text");
   // If you need to parse XLS files, include php-excel-reader & spreadsheetReader
	require('excel_reader2.php');
	require('SpreadsheetReader.php');
    include 'Dbconfig.php';


   $excel; $target_file;
   $records = array();
   $file_name;
   $subject="";

   if(isset($_FILES['scoresFile'])){
      $errors= array();      
      $file_name = $_FILES['scoresFile']['name'];
      $file_tmp =$_FILES['scoresFile']['tmp_name'];
      $file_ext=strtolower(end(explode('.',$file_name)));
      $subject = $_POST['subjectName'];
      
      $expensions= array("xls","xlsx");
      
      if(in_array($file_ext,$expensions)=== false){
         $errors[]="extension not allowed, please choose a Excel file.";
      }
      
      if(empty($errors)==true){
         move_uploaded_file($file_tmp,$file_name);         
         itRecords($subject, $file_name);
         echo "File uploaded";
      }else{
         print_r($errors);
      }
   }

   function itRecords($subject, $file_name)
   {
    $excel = new SpreadsheetReader($file_name);
    $ind=0;
    foreach ($excel as $Row)
	{
        $records[$ind] = $Row;
        $ind++;
    } 
    SaveData($records,$subject);
   }
   function SaveData($records, $subject)
   {
        Dbconfig::Init();
        $query = "SELECT subject_id FROM subject_list WHERE subject_name='$subject'";
        $result = Dbconfig::ReadTable($query);
        $row = $result->fetch_assoc();
        $sub_to_insert = $row['subject_id'];
        foreach($records as $row)
        {
            $sql = "INSERT INTO assessment_table VALUES ($row[0], $sub_to_insert, '$row[1]', $row[2])";
            $status = Dbconfig::InsertData($sql);
        }
        Dbconfig::CloseConnection();   
        echo "Data saved";     
   }     
   ?>