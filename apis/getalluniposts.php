<?php 
include("connection.php");
session_start();
$userid = $_SESSION["userid"];
$query = $mysqli->prepare("SELECT * FROM posts WHERE posts.userid != ?");
$query->bind_params("i",$userid);
$query->execute();
$results = $query->get_results();
$response=[];
while($row = $results->fetch_assoc()){
    $response[]=$row;
}
echo json_encode($repsonse);