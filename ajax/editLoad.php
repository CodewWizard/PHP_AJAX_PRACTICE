<?php 

include "conn.php";

$studId = $_POST['id'];
$query = "SELECT * FROM `students` WHERE id = {$studId}";

$result = mysqli_query($conn, $query);

$output = "";

if(mysqli_num_rows($result) > 0){

                while($row = mysqli_fetch_assoc($result)){
                    $output .= "<tr>
                    <td>Email</td>
                    <td><input class='form-control' type='email' id='edit-mail' value='{$row['email']}'></td>
                    <td><input class='form-control' id='edit-id' hidden value='{$row['id']}'></td>
                  </tr>
                  <tr>
                    <td>Password</td>
                    <td><input  class='form-control mt-3' type='text' id='edit-pass' value='{$row['pass']}'></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td><input class='btn btn-primary mt-3' type='submit' id='edit-submit' value='Submit'></td>
                  </tr>";
                }

        // below line returns output
        echo $output;
}
else{
    echo '<h1> Record not Found </h1>';
}

?>