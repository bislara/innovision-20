$(document).on("click", ".submit_button", function () {
    swal({
        icon: "warning",
        title: "Are you sure?",
        text: "You can't recover it afterwards!",
        buttons: {
            cancel: "Cancel",
            sure: "Yeah"
        },
    }).then((value) => {
        switch (value) {

            case "sure":
                //ajax
                $.ajax({
                    type: "POST",
                    url: "../../../apis/events/certificate.php",
                    data: {
                        id: localStorage.loginid,
                        password: localStorage.password,
                        winner: $("#winners").val().toString(),
                        runner: $("#runners").val().toString()
                    },
                    success: function (data) {
                        console.log(data);
                        var d = JSON.parse(data);
                        console.log(d)
                        alert(d.message);
                        if (d.status == 'success') {
                            localStorage.bool = 1;
                            window.location.assign("./admin_panel.html")
                        }

                    },
                    error: function (data) {
                        alert("failed to process request.");
                    }
                });

                break;

            case "cancel":
                break;
        }
    });

});