<?php
/* Following code will match admin login credentials */

//user temp array
$response = array();

// include db connect class
require_once __DIR__ . '/db_connect.php';

// connecting to db


// check for post data
$data = json_decode(file_get_contents("php://input"));
$get_empid = ($data->email);
$get_password = ($data->password);
$get_field_1 = ($data->place);
$get_field_2 = ($data->dept);

if(empty($get_empid) || empty($get_password) || empty($get_field_2))
{
	$response["success"] = 2;
	echo json_encode($response);
}
else
{
	$result = mysqli_query($conn,"SELECT * FROM staff_login WHERE email = '$get_empid' AND
		password = '$get_password' AND place = '$get_field_1' AND dept = '$get_field_2' ");

		if (mysqli_num_rows($result))
		{
			$Allresponse = mysqli_fetch_array($result);
			// temp user array
			$response = array();
			$response = $Allresponse;
			$response["success"] = 1;	
			echo json_encode($response);
		} 
		else
		{
			// success	
			$response["success"] = 0;
			// echoing JSON response
			echo json_encode($response);
		}
}
?>