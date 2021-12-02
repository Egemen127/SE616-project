<?php
$servername="AAYUSH_PC\SQLEXPRESS";
$username="Aayush-PC\Aayush";
$password="";
$dbname="localhost";
$link=new mysqli($servername,$username,$password);

if ($link->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
$db_selected=mysql_select_db($dbname,$link);

$value1=$_POST['name'];
$value2=$_POST['email'];
$value3=$_POST['subject'];
$value4=$_POST['message'];

$sql="INSERT INTO form (name,email,subject,message) VALUES('$value1','$value2','$value3','$value4')"
$conn->close();
?>