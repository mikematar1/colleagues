<?php 
include("connection.php");
session_start();
$userid = $_SESSION["userid"];
$query = $mysqli->prepare("SELECT posts.image,posts.date,posts.description,users.username,posts.id,posts.userid  FROM posts,users WHERE posts.userid != ? and posts.userid = users.id AND posts.userid IN (SELECT userid FROM users WHERE users.university_id= (SELECT university_id FROM users WHERE id=?)");
$query->bind_param("ii",$userid,$userid);
$query->execute();
$results=$query->get_results();
$response=[];
while($row = $results->fetch_assoc()){
    $response[]=$row;
}
echo json_encode($response);