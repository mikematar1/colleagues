<?php
include("connection.php");
$postid = $_POST["postid"];
$query = $mysqli->prepare("SELECT COUNT(*) FROM user_likes_post WHERE postid=?");
$query->bind_params("i",$postid);
$query->execute();
$results = $query->get_results();
$response = [];
$response["likes"]=$results->fetch_assoc();
echo json_encode($response);
