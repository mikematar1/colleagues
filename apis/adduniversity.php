<?php
include("connection.php");
$university = $_POST["university"];
$query =$mysqli->prepare("INSERT INTO universities(name) VALUES(?)");
$query->bind_params("s",$university);
$query->execute();