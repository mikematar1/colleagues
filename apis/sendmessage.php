<?php
include("connnection.php");
session_start();
$userid=$_SESSION["userid"];
$otheruserid = $_POST["user2id"];
$message = $_POST["message"];
$date = date("Y-m-d H:i:s");
$query = $mysqli->prepare("INSERT INTO user_messages_user(senderid,recieverid,message,datetime) VALUES(?,?,?,?)");
$query->bind_param("iiss",$userid,$otheruserid,$message,$date);
$query->execute();
