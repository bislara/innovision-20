$(document).on("click", "#delete", function () {
	var event_id = $(this).parents("td").siblings("#eid").html();
	$.ajax({
		type: "POST",
		url: "../apis/events/deleteEvent.php",
		data: {
			eid: event_id
		},
		success: function (data) {
			if (JSON.parse(data).status == "success") {
				alert("Event successfully deleted!");
			} else {
				alert("Event deletion failed!");
			}
			window.location.assign("manage_events.html");
		},
		error: function (data) {
			alert("Failed in creating request!");
		}
	});
});

$(document).on("click", "#submit_it", function () {
	$.ajax({
		type: "POST",
		url: "../apis/events/updateEvent.php",
		data: {
			eid: $("#updateEvents").find("#eid")[0].attributes["value"].value.toString(),
			title: $("#title").val().toString(),
			description: $("#desc").val().toString(),
			rules: $("#rules").val().toString(),
			judging_criteria: $("#jc").val().toString(),
			date: $("#date").val().toString(),
			time: $("#time").val().toString(),
			date1: $("#date1").val().toString(),
			time1: $("#time1").val().toString(),
			venue: $("#venue").val().toString(),
			category: $("#category").val().toString(),
			coordinatorName1: $("#full_name_1").val().toString(),
			coordinatorContact1: $("#contact_1").val().toString(),
			coordinatorName2: $("#full_name_2").val().toString(),
			coordinatorContact2: $("#contact_2").val().toString(),
			token: localStorage.cms_token,
			loginId: $("#loginId").val().toString(),
			loginPassword: $("#loginPassword").val().toString()
		},
		success: function (data) {
			console.log(JSON.parse(data));
			if (JSON.parse(data).status == "success") {
				alert("Event info successfully updated.");
			} else {
				alert(JSON.parse(data).result);
			}
			window.location.assign("manage_events.html");
		},
		error: function (data) {
			alert("Failed in processing request.");
		}
	});
});