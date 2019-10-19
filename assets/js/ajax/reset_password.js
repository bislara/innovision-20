$(document).ready(()=>{
    var url_string = window.location.href
    var url = new URL(url_string);
    var c = url.searchParams.get("q");
	
    if(!c){
        alert("Invalid URL");
        window.location='https://innonitr.com';
    }
	$.ajax({
		url: '../apis/user/auth/check_reset_link.php',
		data:{			
			token: c
		},
		type: 'post',
		success: function(response) {
			console.log(response)
			var response = JSON.parse(response);
			if(response.status!=="success")
			{				
				var url='./login.html';
				alert(response.result);			
				window.location=url;
			}			
		}
	});
	
})

$('#reset_button').click(()=>{
	let password=$('#pwd').val(),cnf_password=$('#cnf_pwd').val();
	if(password&&cnf_password){
        if(password===cnf_password){
            if(password.length>7){  
            	var url_string = window.location.href
                var url = new URL(url_string);
                var c = url.searchParams.get("q");
                $.ajax({
                    url: '../apis/user/auth/update_password.php',
                    data:{
                        password: password,
                        token: c
                    },
                    type: 'post',
                    success: function(response) {
                        console.log(response)
                        var response = JSON.parse(response);
                        if(response.status=="success")
                        {
                            localStorage.setItem("token", response.message);
                            var url='./login.html';
                            alert(response.result);
                        
                            window.location=url;
                        }
                        else
                        {
                                //swal(response.message, ": [", "warning");
                            // $("#error").html("<div style=\"color:#ff6666;height:40px;padding : 10px;\"><center><strong>"+response.result+"</center></strong></div>");
                            $("#error").html(response.result);
                            myFunction();
                        }
                    }
                });
            }else{
                alert('Password need to have atleast 8 characters');
            }
        }else{
            alert('Passwords doesnt match');
        }
    }else{
        alert("Enter Password and Confirm Password");
    }
})