var app = angular.module("myapp", ['ngCookies']);
app.controller("myappCtrl", function($scope, $cookieStore, $cookies, $http) 
{
	
/****************************************************************************/
/************************** User Login *************************************/
/****************************************************************************/
	// sign in button
	$scope.user_login = function() 
	{		
        $http.post('http://10.0.2.2/projects/complaint/web/user_login.php', 
			{'email': $scope.email, 'password':$scope.password})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Login Successful");
				$cookieStore.put("cook_user_email",data.email);
				window.location = "home.html";  // Home Page
				return;				
			}
			else if(data.success == 2)
			{
				alert("Please Fill All Fields");
			}
			else
			{
				alert("Login Unsuccessful");
			}
        });
    }
/************************** Cookies **********************************/	
	$scope.cook_user_email = $cookieStore.get("cook_user_email");
	

		
/****************************************************************************/
/************************** User Logout ************************************/
/****************************************************************************/		
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

//************************** admin_register **********************************/	

	
	$http.post('http://10.0.2.2/projects/complaint/web/get_site.php')
	.success(function(data, status, headers, config) 
	{
			$scope.site_details = data.details;
    });
	
	$scope.user_register = function() 
	{		
		$http.post('http://10.0.2.2/projects/complaint/web/user_register.php',{
		 'name':$scope.name,'email':$scope.email,'password':$scope.password, 
		 'mobile': $scope.mobile,'field_1': $scope.field_1,'field_2': $scope.field_2, 
		 'field_3': $scope.field_3,'field_4': $scope.field_4 })
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Registered successfully");
				window.location = "user_login.html";
				return;				
			}
			else if(data.success == 2)
			{
				alert("Please Fill All Fields");
			}
			else if(data.success == 3)
			{
				alert("Enter 10 Digit Mobile No");
			}	
      else if(data.success == 4)
			{
				alert("Email ID Already Exists");
			}
			else if(data.success == 5)
			{
				alert("Enter 8 Digit Password");
			}
			else if(data.success == 6)
			{
				alert("Atleast Use One Special, Number and Captial Character - $1A ");
			}		
			else
			{
				alert("Un Successfull");
			}   
          });
     }
	 
	$scope.officer_register = function() 
	{		
		$http.post('http://10.0.2.2/projects/complaint/web/officer_register.php',{
		 'name':$scope.name,'email':$scope.email,'password':$scope.password, 
		 'mobile': $scope.mobile,'field_1': $scope.field_1,'field_2': $scope.field_2 })
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Registered successfully");
				window.location = "pwd_home.html";
				return;				
			}
			else if(data.success == 2)
			{
				alert("Please Fill All Fields");
			}
			else if(data.success == 0)
			{
				alert("Error");
			}			
			else
			{
				alert(" Un Successfull");
			}   
          });
     }
/****************************************************************************/
/************************** Admin Login *************************************/
/****************************************************************************/
	// sign in button
	$scope.admin_login = function() 
	{		
        $http.post('http://10.0.2.2/projects/complaint/web/admin_login.php', 
			{'email': $scope.email, 'password':$scope.password, 'place':$scope.place,
			'dept':$scope.dept})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Login Successful");
				$cookieStore.put("cook_admin_email",data.email);
				$cookieStore.put("cook_admin_place",data.place);
				$cookieStore.put("cook_admin_dept",data.dept);
				window.location = "admin_home.html";  // Home Page
				return;				
			}
			else if(data.success == 2)
			{
				alert("Please Fill All Fields");
			}
			else
			{
				alert("Login Unsuccessful");
			}
        });
    }
	
/************************** Cookies Login **********************************/	
	$scope.cook_admin_email = $cookieStore.get("cook_admin_email");
	$scope.cook_admin_place = $cookieStore.get("cook_admin_place");
	

//************************** admin_register **********************************/	

	$scope.admin_register = function() 
	{		
		$http.post('http://10.0.2.2/projects/complaint/web/admin_register.php',{
		 'name':$scope.name,'email':$scope.email,
		 'password':$scope.password,'mobile': $scope.mobile})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Registered successfully");
				window.location = "admin_login.html";
				return;				
			}
			else
			{
				alert("Invalid Inputs");
			}   
          });
     }
	 
/****************************************************************************/
/************************** User Login *************************************/
/****************************************************************************/
	// sign in button
	$scope.pwd_login = function() 
	{		
        $http.post('http://10.0.2.2/projects/complaint/web/pwd_login.php', 
			{'email': $scope.email, 'password':$scope.password,'field_1':$scope.field_1 })
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Login Successful");
				window.location = "pwd_home.html";  // Home Page
				return;				
			}
			else if(data.success == 2)
			{
				alert("Please Fill All Fields");
			}
			else
			{
				alert("Login Unsuccessful");
			}
        });
    }
	
	 
/************************** Update Admin Info **********************************/

		$http.post('http://10.0.2.2/projects/complaint/web/get_admin_info.php')
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{			
				$scope.details = data.details;
			}
          });
		
/************************** Update User Info **********************************/
		
		$http.post('http://10.0.2.2/projects/complaint/web/get_user_info.php',
		{
			'email':$scope.cook_user_email
		})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{			
				$scope.userdetails = data.details;
			}
          });
		  
/****************************************************************************/
/************************** User Login *************************************/
/****************************************************************************/
		  
	 $scope.myinfovar = true;

/****************************************************************************/
/************************** Admin Update Login *************************************/
/****************************************************************************/
	 
	 $scope.update_info = function(email,password,name,mobile) 
	{
		$scope.myinfovar = false;
		$scope.email = email;
		$scope.password = password;
		$scope.name = name;
		$scope.mobile = mobile;
		//window.location = "home.html";
	}	
	 
	$scope.save_info = function() 
	{		
		$http.post('http://10.0.2.2/projects/complaint/web/admin_update.php',{
		 'name':$scope.name,'email':$scope.email,
		 'password':$scope.password,'mobile': $scope.mobile})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Submited successfully");
				window.location = "admin_post_info.html";
				return;				
			}
			else
			{
				alert("Invalid Inputs");
			}   
          });
     }

/****************************************************************************/
/************************** User Login *************************************/
/****************************************************************************/
	// sign in button
	$scope.newpassword = function() 
	{		
        $http.post('http://10.0.2.2/projects/complaint/web/newpassword.php', 
			{	'email': $scope.email, 'password':$scope.password,
				'field_3': $scope.field_3, 'field_4':$scope.field_4
				})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Password Reset Successful");
				window.location = "index.html";  // Home Page
				return;				
			}
			else if(data.success == 2)
			{
				alert("Please Fill All Fields");
			}
			else
			{
				alert("Login Unsuccessful");
			}
        });
    }
	

	 
	
});