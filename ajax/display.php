<?php 
include "conn.php";

$query = "SELECT * from students";

$result = mysqli_query($conn, $query);

$output = "";

if(mysqli_num_rows($result) > 0){
    $output = '<table border = "1" width = "100%" cellspacing = "0" cellpadding = "10px">
                <tr>
                    <th> EMAIL </th>
                    <th> PASSWORD </th>
                </tr>';

                while($row = mysqli_fetch_assoc($result)){
                    $output .= "<tr>
                                    <td> {$row["email"]} </td>
                                    <td> {$row["pass"]} </td>
                                </tr>";
                }
        $output .= '</table>';

        // below lines returns output
        echo $output;
}
else{
    echo '<h1> Record not Found </h1>';
}

?>