$(document).on("click", ".submit", function () {
    $.ajax({
        type: "POST",
        url: "../../../apis/admin/events/coordinator/login.php",
        data: {
            loginid: $("#id").val().toString(),
            password: $("#pwd").val().toString()
        },
        success: function (data) {
            data=JSON.parse(data);
            if (data.status == "success") {
                localStorage.cms_token=data.result.jwt;
                localStorage.eid=data.result.eid;
                localStorage.name=data.result.name;
                window.location.assign("./admin_panel.html");
            } else {
                alert(data.message);
            }
        },
        error: function (data) {
            alert("failed to process request.");
        }
    });
});