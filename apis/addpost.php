<?php 
include("connection.php");
session_start();
$userid = $_SESSION["userid"];
$description = $_POST["description"];
$date = date("Y-m-d");
$image = "";
$query = $mysqli->prepare("INSERT INTO posts(userid,description,date,image) VALUES(?,?,?,?)");
$query->bind_param("isss",$userid,$description,$date,$image);
$query->execute();
