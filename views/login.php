<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>TheEvent - Bootstrap Event Template</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta content="" name="keywords">
    <meta content="" name="description">

    <!-- Favicons -->
    <link href="../assets/images/favicon.png" rel="icon">
    <link href="../assets/images/apple-touch-icon.png" rel="apple-touch-icon">

    <!-- Google Fonts -->
    <link href="../assets/lib/google-fonts/fonts.css" rel="stylesheet">

    <!-- Bootstrap CSS File -->
    <link href="../assets/lib/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- Libraries CSS Files -->
    <link href="../assets/lib/font-awesome/css/font-awesome.min.css" rel="stylesheet">
    <link href="../assets/lib/animate/animate.min.css" rel="stylesheet">
    <link href="../assets/lib/venobox/venobox.css" rel="stylesheet">
    <link href="../assets/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">

    <!-- Main Stylesheet File -->
    <link href="../assets/css/style.css" rel="stylesheet">
    <link href="../assets/css/login.css" rel="stylesheet">

    <!-- =======================================================
    Theme Name: TheEvent
    Theme URL: https://bootstrapmade.com/theevent-conference-event-bootstrap-template/
    Author: BootstrapMade.com
    License: https://bootstrapmade.com/license/
  ======================================================= -->
</head>

<body>

    <!--==========================
    Header
  ============================-->
    <header id="header">
        <div class="container">

            <div id="logo" class="pull-left">
                <!-- Uncomment below if you prefer to use a text logo -->
                <!-- <h1><a href="#main">C<span>o</span>nf</a></h1>-->
                <a href="#intro" class="scrollto"><img src="../assets/images/logo.png" alt="" title=""></a>
            </div>

            <nav id="nav-menu-container">
                <ul class="nav-menu">
                    <li class="menu-active"><a href="#intro">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#speakers">Speakers</a></li>
                    <li><a href="#schedule">Schedule</a></li>
                    <li><a href="#venue">Venue</a></li>

                    <li><a href="#gallery">Gallery</a></li>
                    <li><a href="#supporters">Sponsors</a></li>
                    <li><a href="#contact">Contact</a></li>

                </ul>
            </nav>
            <!-- #nav-menu-container -->
        </div>
    </header>
    <!-- #header -->

    <!--==========================
    Login and Registration Section
  ============================-->


    <section id="signin_id" class="section-with-bg">
        <div class="container wow fadeInUp">



            <div class="tab-content row justify-content-center" id="login_inno">

                <ul class="nav nav-tabs" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" href="#registration" role="tab" data-toggle="tab"> Registration </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#login" role="tab" data-toggle="tab">Login</a>
                    </li>

                </ul>
                <!-- Schdule Day 1 -->
                <div role="tabpanel" class="col-lg-7 tab-pane fade show active" id="registration" style="background-color: #0e1735;">
                    
                    <form class="form-horizontal" action="" method="post">
                        <div id="error"></div>
                        <div class="form-group">
                            <label class="control-label col-sm-6" for="Name" style="color:white;">Name:</label>

                            <div class="col-sm-12">

                                <input type="text" class="form-control" id="name" placeholder="Enter Name" name="first_name">

                            </div>
                        </div>

                        <div class="form-group">
                            <label class="control-label col-sm-6" for="email" style="color:white">Email:</label>
                            <div class="col-sm-12">

                                <input type="email" class="form-control" id="email" placeholder="Enter email" name="email">

                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-sm-6" for="phone" style="color:white">Contact No:</label>
                            <div class="col-sm-12">

                                <input type="tel" class="form-control" id="phone" placeholder="Enter Your contact number" name="phone">

                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-sm-2" for="college" style="color:white">College:</label>
                            <div>

                                <select name="college" id="college" class="col-sm-12 form-control">
                                </select>
                                <!--<input type="text" class="form-control" id="college" placeholder="Enter College" name="college">-->
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-sm-2" for="college" style="color:white">Address:</label>
                            <div class="col-sm-12">
                                <input type="text" class="form-control" id="address" placeholder="Enter Address" name="address">
                            </div>
                        </div>
                        <div class="form-group" style="color:white" id="gender">
                            <label class="control-label col-sm-2" for="Gender" style="color:white">Gender:</label>
                            <form > 
                                <label> 
                                    <input type="radio" name="gen" value="male"> &nbsp; Male &nbsp; 
                                </label> 
                                <label> 
                                    <input type="radio" name="gen" value="female"> &nbsp; Female &nbsp; 
                                </label> 
                                <label> 
                                    <input type="radio" name="gen" value="others"> &nbsp; Other &nbsp; 
                                </label> 
                            </form> 
                        </div>
                       
                        <div class="form-group">
                            <label class="control-label col-sm-6" for="email" style="color:white">Password:</label>
                            <div class="col-sm-12">

                                <input type="password" class="form-control" id="password" placeholder="Enter password" name="password">

                            </div>
                        </div>

                        <div class="form-group">
                            <label class="control-label col-sm-6" for="pwd" style="color:white">Confirm Password:</label>
                            <div class="col-sm-12">

                                <input type="password" class="form-control" id="cpassword" placeholder="Enter confirmed password" name="r_password">

                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-sm-offset-2 col-sm-10" style="color: white;text-align: left;">
                                <div class="checkbox">

                                    <label><input type="checkbox" name="remember"> Remember me</label>

                                </div>
                            </div>

                        </div>

                        <div class="form-group">
                            <div class="col-sm-offset-2 col-sm-12" align="center">
                                <!--<a href="#about" class="about-btn scrollto">&nbsp;&nbsp; SUBMIT&nbsp;&nbsp;</a> <br>-->
                                <button id="signup" class="about-btn scrollto">&nbsp;&nbsp; SUBMIT&nbsp;&nbsp;</button>
                                <!-- <center><button type="submit" class="btn btn-default" style="color:black">Submit</button></center> -->
                            </div>
                        </div>

                    </form>

                </div>
                <!-- End Schdule Day 1 -->

                <!-- Schdule Day 2 -->
                <div role="tabpanel" class="col-lg-7  tab-pane fade" id="login" style="background-color: #0e1735;" align="center">

                    <form class="form-horizontal" action="" method="post">

                        <div class="form-group">
                            <label class="control-label col-sm-2" for="email" style="color:white">Email:</label>
                            <div class="col-sm-12">

                                <input type="email" class="form-control" id="login_email" placeholder="Enter email" name="email">

                            </div>
                        </div>

                        <div class="form-group">
                            <label class="control-label col-sm-2" for="pwd" style="color:white">Password:</label>
                            <div class="col-sm-12">

                                <input type="password" class="form-control" id="login_password" placeholder="Enter password" name="password">

                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-sm-offset-2 col-sm-12" style="color: white; text-align: left;">
                                <div class="checkbox">

                                    <label><input type="checkbox" name="remember"> Remember me</label>

                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-sm-offset-2 col-sm-12" align="center">
                                <!--<a href="#about" class="about-btn scrollto">&nbsp;&nbsp; SUBMIT&nbsp;&nbsp;</a> <br>-->
                                <button id="signin" class="about-btn scrollto">&nbsp;&nbsp; SUBMIT&nbsp;&nbsp;</button>
                                
                                <!-- <center><button type="submit" class="btn btn-default" style="color:black">Submit</button></center> -->

                            </div>

                        </div>
                    </form>

                </div>
                <!-- End Schdule Day 2 -->

            </div>
        </div>
    </section>



    <!--==========================
    Footer
  ============================-->
    <footer id="footer">
        <div class="footer-top">
            <div class="container">
                <div class="row">

                    <div class="col-lg-3 col-md-6 footer-info">
                        <img src="../assets/images/logo.png" alt="TheEvenet">
                        <p>In alias aperiam. Placeat tempore facere. Officiis voluptate ipsam vel eveniet est dolor et totam porro. Perspiciatis ad omnis fugit molestiae recusandae possimus. Aut consectetur id quis. In inventore consequatur ad voluptate
                            cupiditate debitis accusamus repellat cumque.</p>
                    </div>

                    <div class="col-lg-3 col-md-6 footer-links">
                        <h4>Useful Links</h4>
                        <ul>
                            <li><i class="fa fa-angle-right"></i> <a href="#">Home</a></li>
                            <li><i class="fa fa-angle-right"></i> <a href="#">About us</a></li>
                            <li><i class="fa fa-angle-right"></i> <a href="#">Services</a></li>
                            <li><i class="fa fa-angle-right"></i> <a href="#">Terms of service</a></li>
                            <li><i class="fa fa-angle-right"></i> <a href="#">Privacy policy</a></li>
                        </ul>
                    </div>

                    <div class="col-lg-3 col-md-6 footer-links">
                        <h4>Useful Links</h4>
                        <ul>
                            <li><i class="fa fa-angle-right"></i> <a href="#">Home</a></li>
                            <li><i class="fa fa-angle-right"></i> <a href="#">About us</a></li>
                            <li><i class="fa fa-angle-right"></i> <a href="#">Services</a></li>
                            <li><i class="fa fa-angle-right"></i> <a href="#">Terms of service</a></li>
                            <li><i class="fa fa-angle-right"></i> <a href="#">Privacy policy</a></li>
                        </ul>
                    </div>

                    <div class="col-lg-3 col-md-6 footer-contact">
                        <h4>Contact Us</h4>
                        <p>
                            A108 Adam Street <br> New York, NY 535022<br> United States <br>
                            <strong>Phone:</strong> +1 5589 55488 55<br>
                            <strong>Email:</strong> info@example.com<br>
                        </p>

                        <div class="social-links">
                            <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
                            <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
                            <a href="#" class="instagram"><i class="fa fa-instagram"></i></a>
                            <a href="#" class="google-plus"><i class="fa fa-google-plus"></i></a>
                            <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
                        </div>

                    </div>

                </div>
            </div>
        </div>

        <div class="container">
            <div class="copyright">
                &copy; Copyright <strong>TheEvent</strong>. All Rights Reserved
            </div>
            <div class="credits">
                <!--
          All the links in the footer should remain intact.
          You can delete the links only if you purchased the pro version.
          Licensing information: https://bootstrapmade.com/license/
          Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=TheEvent
        -->
                Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
            </div>
        </div>
    </footer>
    <!-- #footer -->

  


    <a href="#" class="back-to-top"><i class="fa fa-angle-up"></i></a>

    <script src="../assets/lib/jquery/jquery.min.js"></script>
    <script src="../assets/lib/jquery/jquery-migrate.min.js"></script>
    <script src="../assets/lib/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="../assets/lib/easing/easing.min.js"></script>
    <script src="../assets/lib/superfish/hoverIntent.js"></script>
    <script src="../assets/lib/superfish/superfish.min.js"></script>
    <script src="../assets/lib/wow/wow.min.js"></script>
    <script src="../assets/lib/venobox/venobox.min.js"></script>
    <script src="../assets/lib/owlcarousel/owl.carousel.min.js"></script>

    <!-- Contact Form JavaScript File -->
    <script src="../assets/js/contactform.js"></script>

    <!-- Template Main Javascript File -->
    <script src="../assets/js/main.js"></script>
    <script src= "https://code.jquery.com/jquery-2.2.4.min.js"></script>
     <script type="text/javascript">
    $(document).ready(function(){
            $.ajax({
                url:'../apis/CollegeList/readCollege.php',
                type: 'get',
                success:function(response)
                {
                    response = JSON.parse(response)
                    if(response.status=="success")
                    {
                        console.log(response.result)
                        for(var i=0; i<response.result.length; i=i+1)
                        {
                            var x = document.getElementById("college");
                              var option = document.createElement("option");
                              option.text = response.result[i].college_name;
                              option.value = response.result[i].college_name;
                              x.add(option);
                        }
                    }             
                }
            });
        $("#phone").focusout(function(){
            var phone=$("#phone").val();
            if(phone.length != 10){
                $("#error").html("<div style=\"color:#ff6666;height:40px;padding : 10px;\"><center><strong>Not a valid phone number</strong></center></div>");
            }
            else{
                $("#error").html("<div style=\"color:#4dff88;height:40px;padding : 10px;\"><strong><center>Valid phone number</strong></center></div>");
            }   
        });
    
         $('#signin').on('click', function(){
         console.log("Here")      
        var mail=$("#login_email").val();
        var passw=$("#login_password").val();   
            console.log(mail);
            console.log(passw);
            // $.ajax({
            //     url:'../apis/participantRegistration/login.php',
            //     data:"email="+mail+"&password="+passw,
            //     type: 'post',
            //     success:function(response)
            //     {
            //         var response = JSON.parse(response);
            //         console.log(response);
            //         if(response.status == "success"){
            //               console.log(response.result)
            //        }
            //       else if(response.status=="failure"){
            //         $("#error").html('<div style="background-color:#ff6666;height:40px;padding:10px;width:50%;border-radius:10px;">'+response.result+'</div>');
            //       }               
            //   }
            //   });
        });

        $('#signup').on('click', function(){ 
            var gender =  $('input[name=gen]:checked', '#gender').val(); 
            var e = document.getElementById("college");
            var college_name_input = e.options[e.selectedIndex].value;
            var user_data="name="+$("#name").val()+"&gender="+gender+"&phone="+$("#phone").val()+"&college="+college_name_input+"&address="+$("#address").val()+"&email="+$("#email").val()+"&password="+$("#password").val();
            if($("#password").val() != $("#cpassword").val())
            {
                $("#error").html("<div style=\"color:#ff6666;height:40px;padding : 10px;\"><center><strong>Confirm your password</center></strong></div>");
            }
            else
            {
                $.ajax({
                    url: '../apis/participantRegistration/registration.php',
                    data:user_data,
                    type: 'post',
                    success: function(response) {
                        /*var response = JSON.parse(response);
                        console.log(response);*/
                        if(response.status=="success")
                            console.log(response.result);
                        else
                        {
                            $("#error").html("<div style=\"color:#ff6666;height:40px;padding : 10px;\"><center><strong>"+response.result+"</center></strong></div>");
                            console.log(response.result);
                        }
                   }
                });
            }
        });
        $("#email").focusout(function(){
            var email=$("#email").val();
            var atpos = email.indexOf("@");
            var dotpos = email.lastIndexOf(".");  
            var link_email = "email="+email;
            if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
                $("#error").html("<div style=\"color:#ff6666;height:40px;padding : 10px;\"><center><strong>Not a valid email address</center></strong></div>");
                    return false;
            }
            else{
                $.ajax({
                url: '../apis/participantRegistration/check_email.php',
                type: 'post',
                data:link_email,
                    success: function(response) {
                    $("#error").html(response);
                    }
                });
            }
        });
    });
    </script>
</body>

</html>