<?php
/*********************
**** Arudhra Innovations *****
**** CPanel ******************
*********/


/* Following code will retrieve table values */

// array for JSON response
$response = array();

// include db connect class
require_once __DIR__ . '/db_connect.php';
	
// connecting to db

	

$data = json_decode(file_get_contents("php://input"));

// get all jobs
$result = mysqli_query($conn,"SELECT * FROM complaint  ");
$count_open =0;
$count_progress =0;
$count_rejected =0;
$count_complete =0;

		$total =0;	
if (mysqli_num_rows($result))
{
	$response["details"] = array();
	while($Alldetails = mysqli_fetch_array($result))
	{
		// temp user array
		
		$details = array();
		//$details= $Alldetails;
		$status = $Alldetails["field_9"];
	
			// Find the age metrics
		
			if (strcmp($status,'Pending' )==0)
			{
				$count_open++;
			}
		
		if (strcmp($status,'On Progress' )==0)
			{
				$count_progress++;
			}
		if (strcmp($status,'Rejected' )==0)
			{
				$count_rejected++;
			}
		if (strcmp($status,'Completed' )==0)
			{
				$count_complete++;
			}
		
		
	
	}	
	
		
		$details["count_open"] = $count_open;
		$details["count_progress"] = $count_progress;
		$details["count_rejected"] = $count_rejected;
		$details["count_complete"] = $count_complete;
		
			
		array_push($response["details"],$details);
	$response["success"] = 1;
	echo json_encode($response);
} 
else
{
	$response["success"] = 0;
	echo json_encode($response);
}
?>