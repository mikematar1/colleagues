<?php
include("connection.php");
session_start();
$userid = $_SESSION["userid"];
$postid = $_POST["postid"];
$comment = $_POST["comment"];
$query = $mysqli->prepare("INSERT INTO user_comments_post(userid,postid,comment) VALUES(?,?,?)");
$query->bind_param("iis",$userid,$postid,$comment);
$query->execute();