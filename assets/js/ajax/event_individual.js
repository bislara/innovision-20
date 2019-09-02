var url = location.href;
var eid = url.split("?")[1].split("=")[1];
$(document).ready(function () {
    var q = localStorage.getItem("token");
	// console.log(q);
	if (eid == null || eid == "" || !eid) {
		alert("Problem fetching the event details!");
		window.location.href('eventsSection.html');
	}
	else if(q)
	{
           $.ajax({
			type: "POST",
			url: "../apis/admin/events/admin/fetchEvent_user.php",
			data: {
				token: q,
				eid: eid
			},
			success: function (data) {
				// console.log(data);

				var dataArray = JSON.parse(data);

				if (dataArray["status"] == "success") {
					var eventArr = dataArray["result"];

					var name=eventArr["title"];
					$('#eid_name').html(name);

					var date=eventArr["date"];
					$('#eid_date').html(date);

					var time=eventArr["time"];
					$('#eid_time').html(time);

					var venue=eventArr["venue"];
					$('#eid_venue').html(venue);

					var img='<img src="../'+ eventArr["image_path"] +'" title="Event" class="img-fluid">';
					$('#eid_img').html(img);

					var des=eventArr["description"];
					$('#eid_des').html(des);
										
					var rule=eventArr["rules"];
					$('#eid_rule').html(rule);

					var judging_criteria=eventArr["judging_criteria"];
					$('#eid_judge').html(judging_criteria);

					var cd1=eventArr["coordinatorName1"];
					$('#eid_cd1').html(cd1);
					
					var no1=eventArr["coordinatorContact1"];
					$('#eid_no1').html(no1);
					
					var cd2=eventArr["coordinatorName2"];
					$('#eid_cd2').html(cd2);
					
					var no2=eventArr["coordinatorContact2"];
					$('#eid_no2').html(no2);

					if (dataArray['register_status']==1) {
						$('#register').html("DeRegister");
					}
					else
						$('#register').html("Register");

				}
			}
		});
	}
	 else {
		$.ajax({
			type: "GET",
			url: "../apis/admin/events/admin/fetchIndividualEvent.php?eid=" + eid,
			success: function (data) {			
				var dataArray = JSON.parse(data);
				if (dataArray["status"] == "success") {
					var eventArr = dataArray["result"];

					var name=eventArr["title"];
					$('#eid_name').html(name);

					var date=eventArr["date"];
					$('#eid_date').html(date);

					var time=eventArr["time"];
					$('#eid_time').html(time);

					var venue=eventArr["venue"];
					$('#eid_venue').html(venue);

					var img='<img src="../'+ eventArr["image_path"] +'" title="Event" class="img-fluid">';
					$('#eid_img').html(img);

					var des=eventArr["description"];
					$('#eid_des').html(des);
										
					var rule=eventArr["rules"];
					$('#eid_rule').html(rule);

					var judging_criteria=eventArr["judging_criteria"];
					$('#eid_judge').html(judging_criteria);

					var cd1=eventArr["coordinatorName1"];
					$('#eid_cd1').html(cd1);
					
					var no1=eventArr["coordinatorContact1"];
					$('#eid_no1').html(no1);
					
					var cd2=eventArr["coordinatorName2"];
					$('#eid_cd2').html(cd2);
					
					var no2=eventArr["coordinatorContact2"];
					$('#eid_no2').html(no2);
					// populate(eventArr);

					$('#register').html("Register");
				}
			}
		});
	} 
});

$(document).on("click", ".register", function () {
	// alert("hi lara");
	// localStorage.innoID = 3;
	// console.log(eid);
	// eid = url.split("?")[1].split("=")[1];
    var q = localStorage.getItem("token");

	// console.log(q);	
	if (q == null || q == "" || !(q)) {
		swal("Please Login First to register.", ": [", "warning");
	} else {
		$.ajax({
			type: "POST",
			url: "../apis/user/eventRegistration.php",
			data: {
				token: q,
				eid: eid
			},
			success: function (data) {
				//console.log(data);
				dataArr = JSON.parse(data);
				if (dataArr["status"] == "already registered") {
					swal("You have already registered for the event.", ":)", "warning");

				} else if (dataArr["status"] == "registration done") {
					swal("Registration Successful !", ": )", "success");
					window.location.assign('event-details.html?eid='+ eid);

				} else if (dataArr["status"] == "failure") {
					swal("Registration failed! Please try again.", ":(", "error");

				}
				else if (dataArr["status"] == "DeRegistration done") {
					swal("De registration Successful !", ": )", "success");
					window.location.assign('event-details.html?eid='+ eid);
					
				}
			}
		});
	}
});