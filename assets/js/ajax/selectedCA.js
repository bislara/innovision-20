$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "../../apis/panels/CASelection/selectedCA.php",
        success: function (data) {
            var d = JSON.parse(data);
            console.log(d.result);
            show_ca(d.result);
            //,k
        },
        error: function (data) {

        }
    });
});