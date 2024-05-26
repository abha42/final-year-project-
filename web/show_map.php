<!DOCTYPE html>
<html ng-app="myapp">
	<head>

		<!-- Basic -->
		<meta charset="utf-8">
		<meta name="keywords" content="HTML5 Template" />
		<meta name="description" >
		<meta name="author" content="pixelgeeklab.com">

		<!-- Mobile Metas -->
		<meta name="viewport" content="width=device-width, initial-scale=1.0">

		<!-- Web Fonts  -->
		<link href='css/css.css' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" href="fonts/font.css">

		<!-- Vendor CSS -->
		<link rel="stylesheet" href="vendor/fontawesome/css/font-awesome.css">
		<link rel="stylesheet" href="vendor/owlcarousel/owl.carousel.css" media="screen">
		<link rel="stylesheet" href="vendor/owlcarousel/owl.theme.css" media="screen">
		<link href="vendor/owl-carousel/owl.transitions.html" rel="stylesheet" media="screen">
		<link rel="stylesheet" href="vendor/flexslider/flexslider.css" media="screen">
		<link rel="stylesheet" href="vendor/chosen/chosen.css" media="screen">
		<link rel="stylesheet" href="vendor/magnific-popup/magnific-popup.css" media="screen">

		<!-- Theme CSS -->
		<link rel="stylesheet" href="css/theme.css">
		<link rel="stylesheet" href="css/theme-animate.css">
		
		<!-- Style Switcher-->

		<!-- Head libs -->
		<script src="vendor/modernizr/modernizr.js"></script>

		<!--[if IE]>
			<link rel="stylesheet" href="css/ie.css">
		<![endif]-->

		<!--[if lte IE 8]>
			<script src="vendor/respond/respond.js"></script>
			<script src="vendor/excanvas/excanvas.js"></script>
		<![endif]-->

        <style>
            .page-wrap {
                max-width: 75rem;
                margin: 0 auto;
            }

            h1 {

                font-size: 1.5rem;
                letter-spacing: -1px;
                margin: 1.25rem 0;
            }

            input:focus ~ label, textarea:focus ~ label, input:valid ~ label, textarea:valid ~ label {
                font-size: 0.75em;

                top: -2.25rem;
                -webkit-transition: all 0.125s ease;
                transition: all 0.125s ease;
            }

            .styled-input {
                left:10px;
                width: 90%;
                margin: 2rem 0 1rem;
                position: relative;
            }

            .styled-input label {
                color: #999;
                padding: 1rem;
                position: absolute;
                top: 0;
                left: 0;
                -webkit-transition: all 0.25s ease;
                transition: all 0.25s ease;
                pointer-events: none;
            }



            input,
            textarea {
                position: relative;
                height: 2.9em;
                border: 0px solid #bebebe;
                border-bottom-width: 1px;
                width: 100%;
            }

            input ~ span,
            textarea ~ span {
                display: block;
                width: 0;
                height:1px;
                background: #03a3e8;
                position: absolute;
                bottom: 0;
                left: 0;
                -webkit-transition: all 0.125s ease;
                transition: all 0.125s ease;
            }

            input:focus,
            textarea:focus { outline: 0; }

            input:focus ~ span,
            textarea:focus ~ span {
                width: 100%;
                -webkit-transition: all 0.075s ease;
                transition: all 0.075s ease;
            }

            textarea {
                width: 100%;
                min-height: 15em;
            }
        </style>

<!-- script back button -->
		<script src="cordova.js"></script>
		<script>
		function onLoad() 
		{
			document.addEventListener("deviceready", deviceReady, false);
		}
		function deviceReady() 
		{
			document.addEventListener("backbutton", backButtonCallback, false);
		}
		function backButtonCallback() 
		{
			navigator.app.exitApp();
		}
		</script>


	<!-- angular js -->
	<script src="js/angular-1.3.js"></script>
	<script src="js/angular_cookies.js"></script>

			<!-- Google maps -->
<script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
<script type="text/javascript"    
src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBY7Leo8nAxXuX_PpmZwkCeSB5okxW9Vbk&callback=initMap"> </script>
 <script src="dist/locationpicker.jquery.min.js"></script>
			<!-- Google maps -->
			
	</head>
	<body ng-controller="myappCtrl" class="front bg-pattern-dark">
		<div class="body">
			<header id="header">
				<div class="header-top" style="height:8em;">
					<div class="container">
						<a href="#offcanvas" class="uk-navbar-toggle" style="float:left; margin:50px 5px 10px 5px;" data-uk-offcanvas>
							<span class="sr-only">Toggle navigation</span>
							<i class="fa fa-bars"></i>
						</a>
                        <nav>
							<ul class="nav nav-pills nav-top nav-top-left">
								<div class="head">Google Map </div>
							</ul>
							<ul class="nav nav-pills nav-top nav-top-right">
								<li class="login">
									<a data-target=".form-wrapper" data-toggle="modal" ng-click="admin_logout()"><img style="margin-top:37px;" class="fa icon-x" src="images/icons/user1.png"/> </a>
								</li>
							</ul>
                        </nav>
					</div>	
				</div>
			</header>
		</div>
	</div>
	
        <div class="modal fade form-wrapper" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
            </div>
        </div>

	<div id="offcanvas" class="uk-offcanvas">
            <div class="uk-offcanvas-bar">
				<ul id="main-menu-offcanvas" class="uk-nav-offcanvas" data-uk-nav>
					<h2 style="color:#000;padding:1.5em;font-weight:bold;font-family:Segoe UI Light;">Online Portal</h2>
					<span class="uk-parent">
						<a href="home.html"><img src="images/icons/house.png" class="fa icon"> &nbsp;&nbsp;&nbsp;Home</a>
					</span>
					<span class="uk-parent">
						<a href="#"><img src="images/finances.png" class="fa icon"> &nbsp;&nbsp;&nbsp;About Us</a>
					</span>
                    <span class="uk-parent">
						<a href="index.html"><img src="images/icons/smartphone-2.png" class="fa icon"> &nbsp;&nbsp;&nbsp;Logout</a>
					</span>
				</ul>
			</div>
		</div>
		
		<div class="content" style="margin-top:3em">
		<div class="container" >
			

				<!-- Search Results --> 
				<!-- Google map --> 
				<h2 class="content-sub-heading" style="text-align:center;font-size:40px;color:rgb(69,90,100);font-weight:200">
				 Google Map Location</h2>
				
				
			<div  class="row" >
				<div  style="color:#000;font-weight:300;margin-left:10px;font-size:19px;"class="col-md-12">

		<div style="width:150px; height:auto; border-radius:3px;  border:1px solid #999;margin-top:10px;margin-bottom:10px;">
	     
		 <!-- -->

<?php
 
$cook_field_5 = preg_replace('#[^0-9a-z]#i', '', $_GET['id']);
$cook_field_6 = preg_replace('#[^0-9a-z]#i', '', $_GET['id2']);
?>	
                 <input  id="cook_field_5" type="text"  value="<?php echo $cook_field_5 =   $_GET['id']; ?>">
                 <input id="cook_field_6" type="text"  value="<?php echo $cook_field_5 =   $_GET['id2']; ?>">
			 
           <input type="text" style="display:none;"  id="us3-radius" />
		<div id="us3" style="width: 700px; height:400px;"></div>
        <div class="clearfix">&nbsp;</div>
		
    </div>   
    
					<!-- Google map-->
					
            <script>
			var lat= document.getElementById("cook_field_5").value;
			var lon= document.getElementById("cook_field_6").value;
			
            $('#us3').locationpicker({
                location: {
                    latitude:lat,
                    longitude: lon
                },
                radius: 30,
                inputBinding: {
                    latitudeInput: $('#us3-lat'),
                    longitudeInput: $('#us3-lon'),
                    radiusInput: $('#us3-radius'),
                    locationNameInput: $('#us3-address')
                },
                enableAutocomplete: true,
                onchanged: function (currentLocation, radius, isMarkerDropped) {
                    // Uncomment line below to show alert on each Location Changed event
                    //alert("Location changed. New location (" + currentLocation.latitude + ", " + currentLocation.longitude + ")");
                }
            });
        </script>
        

				</div>
				
			</div>			
				
		</div>
		</div>
			
	
		<script src="vendor/jquery/jquery.js"></script>
		<script src="vendor/bootstrap/bootstrap.js"></script>
		<script src="vendor/jquery.validation/jquery.validation.js"></script>
		<script src="vendor/owlcarousel/owl.carousel.js"></script>
		<script src="vendor/flexslider/jquery.flexslider-min.js"></script>
		<script src="vendor/countdown/countdown.min.js"></script>
		<script src="vendor/chosen/chosen.jquery.min.js"></script>
		<script src="vendor/pricefilter/jquery.pricefilter.js"></script>
		<script src="vendor/masonry/imagesloaded.pkgd.min.js"></script>
		<script src="vendor/masonry/masonry.pkgd.min.js"></script>
		<script src="vendor/uikit/uikit.js"></script>
		<script src="vendor/magnific-popup/jquery.magnific-popup.js"></script>
		
		<!--
		 Theme Base, Components and Settings -->
		<script src="js/theme.js"></script>
		
		<!-- Style Switcher -->
		<script type="text/javascript" src="style-switcher/js/switcher.js"></script>
		
	<!-- angular js -->
	<script src="js/angular_data.js"></script>
</body>
</html>		