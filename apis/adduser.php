<?php 
include("connection.php");
$username = $_POST["username"];
$password = $_POST["password"];
$universityid = $_POST["universityid"];
$email = $_POST["email"];
$query = $mysqli->prepare("INSERT INTO users(username,password,email,univeristy_id) VALUES(?,?,?,?)");
$query->bind_param("sssi",$username,$password,$email,$universityid);
$query->execute();