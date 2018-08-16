<?php
    header("Access-Control-Allow-Origin: *"); 
   // If you need to parse XLS files, include php-excel-reader
	require('excel_reader2.php');
	require('SpreadsheetReader.php');
    include 'Dbconfig.php';


    $excel;
   $records = array();
   $file_name;

   if(isset($_FILES['scoresFile'])){
      $errors= array();
      $file_name = $_FILES['scoresFile']['name'];
      $file_size =$_FILES['scoresFile']['size'];
      $file_tmp =$_FILES['scoresFile']['tmp_name'];
      $file_type=$_FILES['scoresFile']['type'];
      $file_ext=strtolower(end(explode('.',$_FILES['scoresFile']['name'])));
      
      $expensions= array("xls","xlsx");
      
      if(in_array($file_ext,$expensions)=== false){
         $errors[]="extension not allowed, please choose a Excel file.";
      }
      
      if(empty($errors)==true){
         move_uploaded_file($file_tmp,$file_name);         
         itRecords();
         echo "File uploaded";
      }else{
         print_r($errors);
      }
   }

   function itRecords()
   {
    $excel = new SpreadsheetReader($_FILES['scoresFile']['name']);
    $ind=0;
    foreach ($excel as $Row)
	{
        $records[$ind] = $Row;
        $ind++;
    } 
    SaveData($records);
   }

   function SaveData($records)
   {
        Dbconfig::Init();
        foreach($records as $row)
        {
            $sql = "INSERT INTO scores VALUES ($row[0], '$row[1]', '$row[2]', $row[3])";
            $status = Dbconfig::InsertData($sql);
        }
        Dbconfig::CloseConnection();   
        echo "Data saved";     
   }     
   header("content-type: application/text");
   ?>