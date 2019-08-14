$(document).on("click", ".pay_now", function () {
    //consle.log(localStorageemail);
    $(this).html("Processing ...");
    $(this).attr("disabled", true);
    $.ajax({
        type: "POST",
        url: "./apis/participantRegistration/payment.php",
        data: {
            token: localStorage.token,
            name: localStorage.name,
            email: localStorage.email,
            phone: localStorage.phone
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
});