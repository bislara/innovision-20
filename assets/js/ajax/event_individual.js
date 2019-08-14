var url = location.href;
var eid = url.split("?")[1].split("=")[1];
$(document).ready(function () {
	if (eid == null || eid == "" || !eid) {
		alert("Problem fetching the event details!");
	} else {
		$.ajax({
			type: "GET",
			url: "./apis/events/fetchIndividualEvent.php?q=" + eid,
			success: function (data) {
				var dataArray = JSON.parse(data);
				if (dataArray["status"] == "success") {
					var eventArr = dataArray["result"];
					populate(eventArr);
				}
			}
		});
	}
});

$(document).on("click", ".register", function () {
	if (localStorage.innoID == null || localStorage.innoID == "" || !(localStorage.innoID)) {
		swal("Please Login First to register.", ": [", "warning");
	} else {
		$.ajax({
			type: "POST",
			url: "./apis/events/eventRegistration.php",
			data: {
				innoID: localStorage.innoID,
				eid: eid
			},
			success: function (data) {
				//console.log(data);
				dataArr = JSON.parse(data);
				if (dataArr["status"] == "already registered") {
					swal("You have already registered for the event.", ":)", "warning");

				} else if (dataArr["status"] == "registration done") {
					swal("Registration Successful !", ": )", "success");

				} else if (dataArr["status"] == "failure") {
					swal("Registration failed! Please try again.", ":(", "error");

				}
			}
		});
	}
});