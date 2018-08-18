<?php
    header("Access-Control-Allow-Origin: *");     
   header("content-type: application/text");
    include 'Dbconfig.php';
   
   $file_name; $file_path; $subject="";

   if(isset($_FILES['material'])){
      $errors= array();
      $target_dir = "material/";
      $target_file = $target_dir . basename($_FILES["material"]["name"]);
      $file_name = $_FILES['material']['name'];
      $file_tmp =$_FILES['material']['tmp_name'];
      $subject = $_POST['material_sub'];  
           
      if(empty($errors)==true){
         move_uploaded_file($file_tmp,$target_file);  
         $file_path = $target_dir . $file_name;      
         saveFile($subject, $file_path);
         echo "File uploaded";
      }else{
         print_r($errors);
      }
   }

   function saveFile($subject, $file_path)
   {
        Dbconfig::Init();

        //Fetch Subject ID from DB
        $query = "SELECT subject_id FROM subject_list WHERE subject_name='$subject'";
        $result = Dbconfig::ReadTable($query);
        $row = $result->fetch_assoc();
        $sub_to_insert = $row['subject_id'];

        //Use the Subject ID to insert along with the Path
        $sql = "INSERT INTO training_material VALUES ($sub_to_insert, '$file_path')";
        $status = Dbconfig::InsertData($sql);
        if($status === "inserted")
        {
            echo "File stored successfully";
        }
        else{
            echo "Problem saving file in DB";
        }
        Dbconfig::CloseConnection();   
   }  
?>