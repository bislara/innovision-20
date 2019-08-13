$(document).on("click", ".submit_feedback", function () {
    // var _id = localStorage.inno_id;
    // var Name = localStorage.name;
    // var clg = localStorage.college;
    var tkn = localStorage.token;
    var liked_event = $("#liked_event").val();
    var disliked_event = $("#disliked_event").val();
    var rtg = $("#ratings").val();
    var sg = $("#suggest_improve").val();
    var last = $(":checked").val();

    if (tkn == "" || liked_event == "" || disliked_event == "" || rtg == "" || sg == "" || last == "") {
        swal("Please fill up all the fields", ":(", "warning");
    } else {
        $.ajax({
            type: "POST",
            url: "./apis/participantRegistration/feedback.php",
            data: {
                token: tkn,
                liked: liked_event,
                disliked: disliked_event,
                rating: rtg,
                suggestion: sg,
                next_yr: last
            },
            success: function (data) {
                if (JSON.parse(data).status == "success") {
                    swal("Success!", JSON.parse(data).message, "success");
                    location.href = "./profile.html";
                } else {
                    swal("Sorry!", JSON.parse(data).message, "error");
                }
            },
            error: function (data) {
                console.log("Couldn't process request");
            }
        });
    }

});