<?php
    header("Access-Control-Allow-Origin: *");
    include 'reader.php';

   if(isset($_FILES['file'])){
      $errors= array();
      $file_name = $_FILES['file']['name'];
      $file_size =$_FILES['file']['size'];
      $file_tmp =$_FILES['file']['tmp_name'];
      $file_type=$_FILES['file']['type'];
      $file_ext=strtolower(end(explode('.',$_FILES['file']['name'])));
      
      $expensions= array("xls","xlsx");
      
      if(in_array($file_ext,$expensions)=== false){
         $errors[]="extension not allowed, please choose a Excel file.";
      }
      
      if($file_size > 2097152){
         $errors[]='File size must be under 2 MB';
      }
      
      if(empty($errors)==true){
         move_uploaded_file($file_tmp,$file_name);
         $target = "D:/final project/springboard/src/app/training-material/$file_name";
         copy($file_name, $target);
         echo "Success";
         //iterateRecords();
      }else{
         print_r($errors);
      }
      header("content-type: application/text");
   }
   ?>