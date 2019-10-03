$(document).on("click", "#pay_now", function () {

    if(document.getElementById("pay_now").innerHTML=="Paid")
    {
        swal("You have already paid.", ": [", "warning"); 
    }
    else
    {
    $(this).html("Processing ...");
    $(this).attr("disabled", true);

    var q = localStorage.getItem("token");
    if (q)
    {
        $.ajax({
            url:'../apis/user/auth/profile.php',
            beforeSend: function(request){
                    request.setRequestHeader('Authorization', 'Bearer ' + q);
            },
            type: 'get',
                success:function(response)
                {
                    response = JSON.parse(response);
                    if(response.status=="success")
                        {
                            var user_name = response.result['basicInfo']['name'];
                            var user_email = response.result['basicInfo']['email'];
                            var user_phone = response.result['basicInfo']['phone'];
                               
                            $.ajax({
                                type: "POST",
                                url: "../apis/user/payment/payment.php",
                                beforeSend: function(request){
                                    request.setRequestHeader('Authorization', 'Bearer ' + q);
                                },
                                data: {
                                    token: localStorage.token,
                                    name: user_name,
                                    email: user_email,
                                    phone: user_phone
                                },
                                success: function (data) {
                                    var d = JSON.parse(data);
                                    console.log(d);
                                    location.href = d.long_url;
                                },
                                error: function (data) {
                                    console.log(data);
                                }
                            });
                        }
                    else if(response.status=="failure")
                        {
                            swal("You have not registered.", ": [", "warning")    
                            .then((value)=>{
                                window.location="./login.html";
                            }) 
                            
                        }
                }
            });

    }
    else
    {
        swal("You have not logged in.", ": [", "warning")    
            .then((value)=>{
                    window.location="./login.html";
            })
    }
}
});