<?php
    header('Access-Control-Allow-Origin: *');    
    define("SERVERNAME",    "localhost:3306");
    define("USERNAME",      "root");
    define("PASSWORD",      "");
    define("DBNAME",        "springboard");

    class Dbconfig{

        static $conn = null;

       static function Init()
        {   
            
            if(Dbconfig::$conn === null)
            {
                Dbconfig::$conn = new mysqli(constant("SERVERNAME"), constant("USERNAME"), constant("PASSWORD"), constant("DBNAME"));
                // Check connection
                if (Dbconfig::$conn->connect_error) {
                    echo "connection failed";
                    die("Connection failed: " . Dbconfig::$conn->connect_error);
                    return;
                }
                return true; 
            }     
            return false;           
        }

        //Create Table Operation
        static function CreateTable($sql)
        {           
            if(Dbconfig::$conn !== null)
            {                
                if (Dbconfig::$conn->query($sql) === TRUE) {                   
                    return "Created";
                } else {                   
                    return Dbconfig::$conn->error;
                }
            }
            else{
                return "no connection";
            }           
        }

        //Read Data Operation
        static function ReadTable($sql)
        {           
            if(Dbconfig::$conn !== null)
            {                
                return Dbconfig::$conn->query($sql);
            }
            else{
                return "no connection";
            }           
        }

        //Update Table Operation
        static function UpdateTable($sql)
        {           
            if(Dbconfig::$conn !== null)
            {                
                if (Dbconfig::$conn->query($sql) === TRUE) {                   
                    return "updated";
                } else {                   
                    return Dbconfig::$conn->error;
                }
            }
            else{
                return "no connection";
            }           
        }

        //Delete Table Operation
        static function DeleteData($sql)
        {           
            if(Dbconfig::$conn !== null)
            {                
                if (Dbconfig::$conn->query($sql) === TRUE) {                   
                    return "deleted";
                } else {                   
                    return Dbconfig::$conn->error;
                }
            }
            else{
                return "no connection";
            }           
        }

        //Insert Data Operation
        static function InsertData($sql)
        {           
            if(Dbconfig::$conn !== null)
            {                
                if (Dbconfig::$conn->query($sql) === TRUE) {                   
                    return "inserted";
                } else {                   
                    return Dbconfig::$conn->error;
                }
            }
            else{
                return "no connection";
            }           
        }

        //Close Database Connection(Always call at the end of all required operaations are completed)
        static function CloseConnection()
        {
            if(Dbconfig::$conn !== null)
            {
                Dbconfig::$conn->close();
                Dbconfig::$conn = null;
            }
        }

        static function getConnectionHandle()
        {
            $status = Dbconfig::Init();
            return Dbconfig::$conn;
        }
    }

?>