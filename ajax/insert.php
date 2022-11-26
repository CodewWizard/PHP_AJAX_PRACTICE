<?php 
include 'conn.php';

$email = $_POST['email'];
$pass = $_POST['pass'];

$sqlInsert = "INSERT INTO `students` (`email`, `pass`) VALUES ('{$email}', '{$pass}')";

if(mysqli_query($conn, $sqlInsert)){
    echo 1;
}
else{
    echo 0;
}
?>