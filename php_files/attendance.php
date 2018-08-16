<?php
    header("Access-Control-Allow-Origin: *"); 
    include 'Dbconfig.php';
     
      $field1 = $_POST['field1'];
      $field2 = $_POST['field2'];
      $field3 = $_POST['field3'];
      $field4 = $_POST['field4'];

      echo $field1;
        
    header("content-type: plain/text");
  
   ?>