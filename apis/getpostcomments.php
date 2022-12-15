<?php
include("connection.php");
$postid = $_POST["postid"];
$query = $mysqli->prepare("SELECT * FROM user_comments_post WHERE postid=?");
$query->bind_param("i",$postid);
$query->execute();
$results=$query->get_results();
$response=[];
while($row = $results->fetch_assoc()){
    $response[]=$row;
}
echo json_encode($response);