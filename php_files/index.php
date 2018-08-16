<?php
    header("Access-Control-Allow-Origin: *");
     $param = $_GET['data'];
     $servername = "localhost";
     $username = "root";
     $password = "root";
     $dbname = "jaggu";
     
     // Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "INSERT INTO sample VALUES (11,'$param')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$response ="superb";
$json_response = json_encode($response);
echo $response;
header("content-type: application/text");

$conn->close();
     
?>