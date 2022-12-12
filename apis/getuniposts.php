<?php 
include("connection.php");
session_start();
$userid = $_SESSION["userid"];
$query = $mysql->prepare("SELECT * FROM posts WHERE posts.userid != ? AND posts.userid IN (SELECT userid FROM users WHERE users.university_id= (SELECT university_id FROM users WHERE id=?)");
$query->bind_params("ii",$userid,$userid);
$query->execute();
$results=$query->get_results();
$response=[];
while($row = $results->fetch_assoc()){
    $response[]=$row;
}
echo json_encode($response);