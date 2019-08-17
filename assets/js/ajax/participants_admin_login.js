$(document).on("click", ".submit", function () {
        	//console.log($("#pwd").val());
            $.ajax({
                type: "POST",
                url: "../apis/panels/admin_participants/login.php",
                data: {
                    username: $("#id").val().toString(),
                    password: $("#pwd").val().toString()
                },
                success: function (data) {
                    var dataSet = JSON.parse(data);
                    if(dataSet["status"].localeCompare("success") == 0)
                    {
                        localStorage.admin_token = dataSet["result"];
                        window.location.assign("./admin_panel.html");
                    }
                    else
                    {
                        alert(dataSet["result"]);
                        //console.log($("#pwd").val());
                    }
                },
                error: function (data) {
                    console.log(data);
                }
            });
        });