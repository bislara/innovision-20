$(document).on("click", "#add_college", function () {
    $.ajax({
        type: "POST",
        url: "http://localhost/Innovision/apis/collegeList/createCollege.php",
        data: {
            cname: $("#cname").val().toString(),
            city: $("#city").val().toString()
        },
        success: function (data) {
            console.log(data);
        },
        error: function (data) {
            console.log(data);
        }
    });
});