<?php 
include("connection.php");
session_start();
$userid=$_SESSION["userid"];
$query = $mysqli->prepare("SELECT * FROM posts WHERE userid=?");
$query->bind_param($userid);
$query->execute();
$results=$query->get_results();
$response=[];
while($row = $results->fetch_assoc()){
    $response[]=$row;
}
echo json_encode($response);
