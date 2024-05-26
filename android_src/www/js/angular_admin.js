var app = angular.module("myapp", ['ngCookies']);
app.controller("myappCtrl", function($scope, $cookies, $cookieStore, $http) 
{
	
/****************************************************************************/
/************************** Get Admin Details ***********************************/
/****************************************************************************/	
		$scope.cook_user_email = $cookieStore.get("cook_user_email");

	$scope.cook_admin_email = $cookieStore.get("cook_admin_email");
	$scope.cook_admin_place = $cookieStore.get("cook_admin_place");
	$scope.cook_admin_dept = $cookieStore.get("cook_admin_dept");

	$scope.user_logout = function() 
	{
		if(confirm("Are You Sure?"))
		{
			$cookies.cook_user_email = "";
			$cookies.cook_admin_email = "";
			window.location = "index.html";
			return;
		}
		else
		{
			return false;
		}
	}
/****************************************************************************/
/************************** All Complaint *********************************/
/****************************************************************************/
/****************************************************************************/
/************************** create Site *********************************/
/****************************************************************************/
	$scope.create_site = function() 
	{
	$http.post('http://10.0.2.2/projects/complaint/web/create_site.php', 
		{
		'field_1':$scope.field_1
		})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				   location.reload(); 
			return;				
			}
			else if(data.success == 2)
			{
				alert("Fill All Fields");
			}
			
			else
				{
					alert("Un Successfully");
				}
        });
    }
/*****************************************************************************/
/************************** Update update_employee*********************************/
/****************************************************************************/
	$scope.update_site = function(cus_id,field_1) 
	{
		$cookieStore.put("cook_cus_id",cus_id);
		$cookieStore.put("cook_field_1",field_1);
		window.location = "edit_site.html";
		return;
	}
	

	$scope.cook_cus_id = $cookieStore.get("cook_cus_id");
	$scope.cook_field_1 = $cookieStore.get("cook_field_1");
	
		
$scope.save_site = function() 
	{
	$http.post('http://10.0.2.2/projects/complaint/web/save_site.php', {
			'id': $scope.cook_cus_id,
			'field_1': $scope.cook_field_1})
	.success(function(data, status, headers, config) 
	{
		if(data.success == 1)
		{
			alert("Updated Successfully");
			window.location = "create_site.html";
			$cookies.cook_cus_id = "";
			$cookies.cook_field_1 = "";	
			return;
		}
				else if(data.success == 2)
				{
					alert("Adding Unsuccessful");
				}
				else
				{
					alert("Fill All Fields");
				}
			
    });
	}
	

	$http.post('http://10.0.2.2/projects/complaint/web/complaint_get_all.php',
		{'place':$scope.cook_admin_place,'dept':$scope.cook_admin_dept})
	.success(function(data, status, headers, config) 
	{
		if(data.success == 1)
		{
			$scope.dept_comp_details = data.details;
		}
		else
		{
			$scope.details = "No Data Found !!!";
		}
    });
	
	/****************************************************************************/
/************************** Delete User  *********************************/
/****************************************************************************/
	// products_delete
	$scope.delete_site = function(cusid) 
	{		
        $http.post('http://10.0.2.2/projects/complaint/web/delete_site.php', 
		{
		'id': cusid
		})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Deleted Successful");
				window.location = "create_site.html";
				return;
			}
			else if(data.success == 0)
			{
				alert("Error While Deleting Product!!");
			}
			else
			{
				alert("No id found");
			}
        });
    }


	$http.post('http://10.0.2.2/projects/complaint/web/get_site.php')
	.success(function(data, status, headers, config) 
	{
			$scope.site_details = data.details;
    });
	$http.post('http://10.0.2.2/projects/complaint/web/status_count.php',
		{'place':$scope.cook_admin_place,'dept':$scope.cook_admin_dept})
	.success(function(data, status, headers, config) 
	{
			$scope.dept_status_details = data.details;
    });
	
	$http.post('http://10.0.2.2/projects/complaint/web/status_all_count.php')
	.success(function(data, status, headers, config) 
	{
			$scope.all_status_details = data.details;
    });
	
	$http.post('http://10.0.2.2/projects/complaint/web/complaint_all.php')
	.success(function(data, status, headers, config) 
	{
			$scope.all_details = data.details;
    });
	
	$scope.upload_photo = function(cus_id) 
	{
		window.location = "file_1.html";
		$cookieStore.put("cook_cus_id",cus_id);
		return;
	}	
	
	$scope.cook_cus_id = $cookieStore.get("cook_cus_id");

	
	
		$http.post('http://10.0.2.2/projects/complaint/web/feedback_get.php')
	.success(function(data, status, headers, config) 
	{
		if(data.success == 1)
		{
			$scope.feedback_details = data.details;
		}
		else
		{
			$scope.feedback_details = "No Data Found !!!";
		}
    });

/****************************************************************************/
/************************** User Logout ************************************/
/****************************************************************************/		
	$scope.admin_logout = function() 
	{
		if(confirm("Are You Sure?"))
		{
			$cookies.cook_user_email = "";
			$cookies.cook_admin_email = "";
			$cookies.cook_admin_place = "";
			window.location = "home.html";
			return;
		}
		else
		{
			return false;
		}
	}
	
		
	$scope.user_logout = function() 
	{
		if(confirm("Are You Sure?"))
		{
			$cookies.cook_user_email = "";
			$cookies.cook_admin_email = "";
			$cookies.cook_admin_place = "";
			window.location = "index.html";
			return;
		}
		else
		{
			return false;
		}
	}
/****************************************************************************/
/************************** Add Complaint *********************************/
/****************************************************************************/
	$scope.complaint_status = function(cus_id) 
	{		
		window.location = "admin_post_complaint.html";
		$cookieStore.put("cook_cus_id",cus_id);
		return;				
    }
	$scope.cook_cus_id = $cookieStore.get("cook_cus_id");

	$scope.complaint_solution = function() 
	{		
		$http.post('http://10.0.2.2/projects/complaint/web/complaint_status.php', {
		'field_9':$scope.field_9,'field_10':$scope.field_10,
		'field_11':$scope.field_11,	'cus_id':$scope.cook_cus_id
		})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Submitted Successfully");
				window.location = "admin_view_complaint.html";
				return;				
			}
			else if(data.success == 2)
			{
				alert("Please Fill All Fields");
			}
			else
				{
					alert("Un Successfully");
				}
        });
    }
	

/****************************************************************************/
/************************** Admin Update Complaints Solutions ***************/
/****************************************************************************/
	$scope.post_complaint_solution = function(cus_id,field_9,field_10,field_11,field_12) 
	{		
		window.location = "admin_post_complaint.html";
		$cookieStore.put("cook_cus_id",cus_id);
		$cookieStore.put("cook_field_9",field_9);
		$cookieStore.put("cook_field_10",field_10);
		$cookieStore.put("cook_field_11",field_11);
		$cookieStore.put("cook_field_12",field_12);
		return;				
    }
	$scope.cook_cus_id = $cookieStore.get("cook_cus_id");
	$scope.cook_field_9 = $cookieStore.get("cook_field_9");
	$scope.cook_field_10 = $cookieStore.get("cook_field_10");
	$scope.cook_field_11 = $cookieStore.get("cook_field_11");
	$scope.cook_field_12 = $cookieStore.get("cook_field_12");

	$scope.admin_complaint_solution = function() 
	{		
		$http.post('http://10.0.2.2/projects/complaint/web/admin_complaint_solution.php', {
		'cook_field_9':$scope.cook_field_9,'cook_field_10':$scope.cook_field_10,
		'cook_field_11':$scope.cook_field_11,'cook_field_12':$scope.cook_field_12,'cook_cus_id':$scope.cook_cus_id
		})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Submitted Successfully");
				window.location = "admin_view_complaint.html";
				return;				
			}
			else if(data.success == 2)
			{
				alert("Please Fill All Fields");
			}
			else
				{
					alert("Un Successfully");
				}
        });
    }
	

/****************************************************************************/
/************************** View All Requirment *****************************/
/****************************************************************************/
	$http.post('http://10.0.2.2/projects/complaint/web/customer_get.php')
	.success(function(data, status, headers, config) 
	{
		if(data.success == 1)
		{
			$scope.cus_details = data.details;
		}
		else
		{
			$scope.cus_details = "No Data Found !!!";
		}
    });


	
	
});