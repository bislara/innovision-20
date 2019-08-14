$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "../../../apis/participantRegistration/fetch_certificate.php?inno_id=" + localStorage.innoID,
        success: function (data) {
            console.log(data);
            if (JSON.parse(data).status == "success") {
                var dataArr = JSON.parse(data).message;
                console.log(dataArr);
                for (var i = 0; i < dataArr.length; i++) {
                    console.log(dataArr[i][2]);
                    $(".certificates").append('<h2 style="color:orange">Your Certificates</h2><div style="display: block"><a href="' + dataArr[i][2] + '" download><span class="fa fa-download"></span></a> <span>CERTIFICATE ' + (i + 1) + '</span></div>');
                }
            } else {
                console.log(JSON.parse(data).result);
            }
        },
        error: function (data) {
            console.log("Request for fetching certificates failed.");
        }
    });
});