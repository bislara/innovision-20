$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "../apis/panels/eventCoordinator/displayParticipants.php?q=" + localStorage.eid,
        success: function (data) {
            console.log(data);
            var d = JSON.parse(data).result;
            console.log(d);
            var temp = '';
            for (var i = 0; i < d.length; i++) {
                temp = temp + '<tr><td>' + (i + 1) + '</td><td>' + d[i].inno_id + '</td><td>' + d[i].name + '</td><td>' + d[i].phone + '</td><td>' + d[i].email + '</td><td>' + d[i].college + '</td></tr>';
            }
            $("#dp").append(temp);
        },
        error: function (data) {
            console.log(data);
        }
    });
});