<?php 
include "conn.php";

$item = $_POST['searchItem'];

$query = "SELECT * from `students` WHERE email LIKE '%{$item}%' OR pass LIKE '%{$item}%' ";

$result = mysqli_query($conn, $query);

$output = "";

if(mysqli_num_rows($result) > 0){
    $output = '<table border = "1" width = "100%" cellspacing = "0" cellpadding = "8px">
                <tr>
                    <th> EMAIL </th>
                    <th> PASSWORD </th>
                    <th colspan="2"> ACTIONS </th>
                </tr>';

                while($row = mysqli_fetch_assoc($result)){
                    $output .= "<tr>
                                    <td> {$row["email"]} </td>
                                    <td> {$row["pass"]} </td>
                                    <td> <button class='delete-btn' data-id='{$row["id"]}'>Delete</button> </td>
                                    <td> <button class='edit-btn' data-eid='{$row["id"]}'>Edit</button> </td>
                                </tr>";
                }
        $output .= '</table>';

        // below line returns $output
        echo $output;
}
else{
    echo '<h1> Record not Found </h1>';
}

?>