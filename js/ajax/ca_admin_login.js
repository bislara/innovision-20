$(document).on("click", ".submit", function () {
        	//console.log($("#pwd").val());
            $.ajax({
                type: "POST",
                url: "../apis/panels/CASelection/login.php",
                data: {
                    username: $("#id").val().toString(),
                    password: $("#pwd").val().toString()
                },
                success: function (data) {
                    var dataSet = JSON.parse(data);
                    if(dataSet["status"].localeCompare("success") == 0)
                    {
                        localStorage.ca_token = dataSet["result"];
                        window.location.assign("./campus_ambassador_admin.html");
                    }
                    else
                    {
                        alert(dataSet["result"]);
                    }
                },
                error: function (data) {
                    console.log(data);
                }
            });
        });