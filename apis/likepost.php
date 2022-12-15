<?php
include("connection.php");
session_start();
$postid = $_POST["postid"];
$userid = $_SESSION["userid"];
$query = $mysqli->prepare("INSERT INTO user_likes_post(userid,postid) VALUES(?,?)");
$query->bind_param("ii",$userid,$postid);
$query->execute();
