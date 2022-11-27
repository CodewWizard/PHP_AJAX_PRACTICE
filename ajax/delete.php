<?php  

include "conn.php";
$stud_id = $_POST["id"];

$query = "DELETE FROM `students` WHERE id = {$stud_id}";

if(mysqli_query($conn, $query)){
    echo 1;
}
else{
    echo 0;
}


?>