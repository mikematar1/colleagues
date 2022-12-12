<?php 
include("connection.php");
session_start();
$username = $_POST["username"];
$password = $_POST["password"];
$query = $mysqli->prepare("SELECT * FROM users WHERE username=? AND password=?");
$query->bind_params("ss",$username,$password);
$query->execute();
$result = $query->get_results();
$response=[];
if(mysqli_num_rows($result)>0){
    $user = $result->fetch_assoc();
    $response["found"] = user;
    $_SESSION["userid"] = $user["id"];
}else{
    $response["found"]=false;
}
echo json_encode($response);