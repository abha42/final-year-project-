<?php
/*********************
**** Arudhra Innovations *****
**** CPanel ******************
*********/

/* Following register will admin login credentials */

// array for JSON response
$response = array();

// include db connect class
require_once __DIR__ . '/db_connect.php';

// connecting to db


$data = json_decode(file_get_contents("php://input"));

$get_name = ($data->name);
$get_email = ($data->email);
$get_password = ($data->password);
$get_mobile = ($data->mobile);
$get_field_1 = ($data->field_1);
$get_field_2 = ($data->field_2);
$get_created_date = date('Y-m-d');


if(empty($get_name) || empty($get_email) ||
 empty($get_password) || empty($get_mobile)|| empty($get_field_1) )
{
	$response["success"] = 2;
	echo json_encode($response);
}
else
{
	
	// get customer 
	$result1 = mysqli_query($conn,"INSERT INTO staff_login (name, email, password, mobile,place,dept, created_date)
			VALUES('$get_name',  '$get_email', '$get_password', '$get_mobile', 	
			'$get_field_1','$get_field_2',	'$get_created_date'	)");

	// check for empty result
	if($result1)
	{
		
		// success
		$response["success"] = 1;
		
		// echoing JSON response
		echo json_encode($response);
	}
	else 
	{
		// unsuccess
		$response["success"] = 0;
		
		// echoing JSON response
		echo json_encode($response);
	}
}
?>