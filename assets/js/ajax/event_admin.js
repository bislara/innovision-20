$(document).on("click", ".submit", function () {
            console.log($("#id").val());
            console.log($("#pwd").val());
            $.ajax({
                type: "POST",
                url: "../apis/panels/cms/login.php",
                data: {
                    username: $("#id").val().toString(),
                    password: $("#pwd").val().toString()
                },
                success: function (data) {
                    var dataSet = JSON.parse(data);
                    if(dataSet["status"].localeCompare("success") == 0)
                    {
                        localStorage.cms_token = dataSet["result"];
                        window.location.assign("./cms_events.html");
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