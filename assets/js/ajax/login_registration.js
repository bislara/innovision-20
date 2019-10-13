 $(document).ready(function(){
        
        if(localStorage.getItem("token") != null)
        {
            q = localStorage.getItem("token")
            $.ajax({
                url:'../apis/user/auth/profile.php',
                beforeSend: function(request){
                    request.setRequestHeader('Authorization', 'Bearer ' + q);
                },
                type: 'get',
                success:function(response)
                {
                    //console.log(response)
                    response = JSON.parse(response);
                    if(response.status=="success")
                    {
                        window.location="./profile.html"
                    }             
                }
            });            
        }


});
function myFunction() {
  var x = document.getElementById("error");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

$(document).ready(function(){
        //if(localStorage.getItem("token") != null)
          //  window.location="./profile.html"

            $('#college_add').hide();
            $.ajax({
                url:'../apis/misc/collegeList/readCollege.php',
                type: 'get',
                success:function(response)
                {
                    response = JSON.parse(response);
                    if(response.status=="success")
                    {
                        // console.log(response.result)
                        for(var i=0; i<response.result.length; i=i+1)
                        {
                            var x = document.getElementById("college");
                              var option = document.createElement("option");
                              option.text = response.result[i].college_name;
                              option.value = response.result[i].college_name;
                              x.add(option);
                        }
                              var x = document.getElementById("college");
                              var option = document.createElement("option");
                              option.text = "Other";
                              option.value = "other";
                              x.add(option);
                    }             
                }
            });
        $('#college').change(function()
        {
           selection = $(this).val();
           switch(selection)
           {
               case 'other':
                   $('#college_add').show();
                   break;
           }
           if(selection != "other")
                 $('#college_add').hide();
        });
    
        $("#phone").focusout(function(){
            var phone=$("#phone").val();
            if(phone.length != 10){
            	$("#error").html("Not a valid phone number");
                // $("#error").html("<div style=\"color:#ff6666;height:40px;padding : 10px;\"><center><strong>Not a valid phone number</strong></center></div>");
            	myFunction();
            }
            else{
                // $("#error").html("<div style=\"color:#4dff88;height:40px;padding : 10px;\"><strong><center>Valid phone number</strong></center></div>");
            	$("#error").html("Valid phone number");
				myFunction();
            }   
        });

        $('#login_button').on('click', function(){
            var mail=$("#login_email").val();
            var passw=$("#login_password").val();   
            $.ajax({
                url:'../apis/user/auth/login.php',
                data:"email="+mail+"&password="+passw,
                type: 'post',
                success:function(response)
                {
                    
                    console.log(response);
                    var response = JSON.parse(response);
                    if(response.status == "success"){
                         localStorage.setItem("token", response.result);
                        window.location='./profile.html';
                   }
                  else if(response.status=="failure"){
                    //swal(response.result, ": [", "warning");
                    console.log(response.result)
                    $("#error1").html('<div style="background-color:#ff6666;height:40px;padding:10px;width:50%;border-radius:10px;">'+response.result+'</div>');
                  	// $("#error1").html(response.result);
					// myFunction();
                  }               
              }
              });
        });
    
        $('#signup').on('click', function(){ 
            var gender =  $('input[name=gen]:checked', '#gender').val(); 
            var e = document.getElementById("college");
            var college_name_input = e.options[e.selectedIndex].value;
            if(college_name_input=="other")
            {
                college_name_input = $("#new_college").val();
                if(college_name_input)
                {
                   // console.log(college_name_input)
                    $.ajax({
                        url: '../apis/misc/collegeList/others/create.php',
                        data: "cname="+college_name_input,
                        type: 'post',
                        success: function(response) {
                            var response = JSON.parse(response);
                            if(response.status=="success")
                            {
                                console.log("New College Created");
                            }
                            else
                            {

                                // $("#error").html("<div style=\"color:#ff6666;height:40px;padding : 10px;\"><center><strong>"+response.message+"</center></strong></div>");
                            	$("#error").html(response.message);
								myFunction();
                            }
                       }
                    });
                }
            }
            var user_data="name="+$("#name").val()+"&gender="+gender+"&phone="+$("#phone").val()+"&college="+college_name_input+"&address="+$("#address").val()+"&email="+$("#email").val()+"&password="+$("#password").val();
            if($("#password").val() != $("#cpassword").val())
            {
                // $("#error").html("<div style=\"color:#ff6666;height:40px;padding : 10px;\"><center><strong>Confirm your password</center></strong></div>");
            	$("#error").html("Confirm your password");
				myFunction();
            }
            else
            {
                $.ajax({
                    url: '../apis/user/auth/registration.php',
                    data:user_data,
                    type: 'post',
                    success: function(response) {
                        console.log(response)
                        var response = JSON.parse(response);
                        if(response.status=="success")
                        {
                            localStorage.setItem("token", response.message);
                            var url='./profile.html';
                            swal("successfully registered", ":)", "success");
                            window.location=url;
                        }
                        else
                        {
                            swal(response.message, ": [", "warning");
                            $("#error").html("<div style=\"color:#ff6666;height:40px;padding : 10px;\"><center><strong>"+response.result+"</center></strong></div>");
                             //swal(response.message, ": [", "warning");
                            // $("#error").html("<div style=\"color:#ff6666;height:40px;padding : 10px;\"><center><strong>"+response.result+"</center></strong></div>");
                        	$("#error").html(response.result);
							myFunction();
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
                // $("#error").html("<div style=\"color:#ff6666;height:40px;padding : 10px;\"><center><strong>Not a valid email address</center></strong></div>");
                $("#error").html("Not a valid email address");
				myFunction();   
            	return false;
            }
            else{
                $.ajax({
                url: '../apis/user/auth/check_email.php',
                type: 'post',
                data:link_email,
                    success: function(response) {
                    // $("#error").html(response);
                    $("#error").html(response);
					myFunction();
                    }
                });
            }
        });
    });

$(document).on("click","#recoveryEmailBtn",function(){
    var email=$("#recoveryEmail");
    if(email.length!==""){
        $.ajax({
            url: '../apis/user/auth/forgot_password.php',
            data: {
                email: email
            },
            type: 'POST',
            success: function(response) {
                var response = JSON.parse(response);
                var msg=response.status;
                $("#forgotPasswordModal modal-body").html("<h1>"+msg+"</h1>");
           }
        });
    }
});