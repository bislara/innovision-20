$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "./apis/events/fetchRegisteredEvents.php?q=" + localStorage.innoID,
        success: function (data) {
            console.log(data);
        },
        error: function (data) {
            console.log(data);
        }
    })
});