$(document).on("click", ".submit", function () {
    $.ajax({
        type: "POST",
        url: "../apis/events/login.php",
        data: {
            loginid: $("#id").val().toString(),
            password: $("#pwd").val().toString()
        },
        success: function (data) {
            console.log(data);
            if (JSON.parse(data).status == "success") {
                localStorage.loginid = $("#id").val().toString();
                localStorage.password = $("#pwd").val().toString();
                localStorage.eid = JSON.parse(data).result.eid;
                localStorage.name = JSON.parse(data).result.title;
                localStorage.bool = JSON.parse(data).result.results_submitted;
                window.location.assign("./admin_panel.html");
            } else {
                alert(JSON.parse(data).message);
            }
        },
        error: function (data) {
            alert("failed to process request.");
        }
    });
});