<?php 
include "conn.php";

$mail = $_POST['mail'];
$pass = $_POST['pass'];
$id = $_POST['id'];

$query = "UPDATE `students` SET email = '{$mail}', pass = '{$pass}' WHERE id = '{$id}'";

if(mysqli_query($conn, $query)){
    echo 1;
}
else{
    echo 0;
}

?>