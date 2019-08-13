$(document).on("click", "#send_reset_request", function () {
    $(".mail_status").html("<p style='font-size: 13px; color: blue'> Processing... </p>");
    var send_link_email = $("#forgot_password_email_id").val();
    //check if empty
    //console.log(send_link_email);
    if (send_link_email.localeCompare("") == 0) {
        $(".mail_status").html("<p style='font-size: 13px; color: red'> Please enter your Registered Email Id to proceed. </p>");
    } else {
        //email validation
        var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
        if (!(emailRegex.test(send_link_email))) {
            $(".mail_status").html("<p style='font-size: 13px; color: red'> Please enter a valid Email Id(match the format). </p>");
        } else {

            $.ajax({
                type: "POST",
                url: "./apis/participantRegistration/forgot_password.php",
                data: {
                    email: send_link_email.toString()
                },
                success: function (data) {
                    if (JSON.parse(data).status == "success") {
                        $(".mail_status").html("<p style='font-size: 13px; color: green'>" + JSON.parse(data).result + "</p>");
                    } else {
                        $(".mail_status").html("<p style='font-size: 13px; color: red'> " + JSON.parse(data).result + " </p>");
                    }
                },
                error: function (data) {
                    $(".mail_status").html("<p style='font-size: 13px; color: red'> Failed in processing request. Please try again later. </p>");
                }
            });
        }
    }
});