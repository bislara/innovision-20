$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "./apis/participantRegistration/profile.php?q=" + localStorage.token,
        success: function (data) {
            //console.log(data);

            display_profile(JSON.parse(data));
        },
        error: function (data) {
            console.log(data);
        }
    });
});