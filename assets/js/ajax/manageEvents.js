var temp = '';

// Script to fetch all events
$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "../../../apis/events/fetchAllEvents.php",
        success: function(data) {
            //console.log(data);
            var data_obj = JSON.parse(data);
            console.log(data_obj);
            var data_arr = data_obj.result;
            for (var i = 0; i < data_arr.length; i++) {
                temp = temp + '<tr><td style="display:none" id="eid">' + data_arr[i].eid + '</td><td>' + (i + 1) + '</td ><td><img class="img-responsive" src="' + data_arr[i].image_path + '" height="70px" width="auto"></td><td>' + data_arr[i].title + '</td><td>' + data_arr[i].venue + '</td><td>' + data_arr[i].date + '</td><td>' + data_arr[i].time + '</td><td>' + data_arr[i].date1 + '</td><td>' + data_arr[i].time1 + '</td><td><button onclick="" class="btn btn-danger" id="delete">Delete</button></td><td><button class="btn btn-warning" id="update" data-toggle="modal" data-target="#update_modal">Update</button></td></tr> ';

            }
            $('tbody').append(temp);
        },
        error: function(data) {
            //console.log(data);
        }
    });
});

// Event Update Handler
$(document).on("click", "#update", function() {
    console.log("Hiii");
    var eid = $(this).parents("tr").find("#eid").text();
    console.log(eid);
    $.ajax({
        type: "GET",
        url: "../../../apis/events/fetchIndividualEvent.php?q=" + eid,
        success: function(data) {
            //console.log(data);
            //code for modal on update button click
            var dataObj = JSON.parse(data);
            console.log(dataObj.result);
            var dataArray = dataObj.result;
            var temp = '<div style="display:none" value="' + dataArray.eid + '" id="eid"></div>  <div class="form-group"><label for= "event_name"> Event Name</label ><input type="text" id="title" name="title" value="' + dataArray.title + '" class="form-control" />  </div><div class="form-group"><label for="message-text" class="col-form-label">Description:</label><textarea class="form-control" value="" id="desc" name="description">' + dataArray.description + '</textarea></div><div class="form-group"><label for="message-text" class="col-form-label">Event Rules:</label><textarea class="form-control" value="" id="rules" name="rules">' + dataArray.rules + '</textarea></div><div class="form-group"><label for="message-text" class="col-form-label">Judging Criteria:</label><textarea class="form-control" value="" id="jc" name="judging_criteria">' + dataArray.judging_criteria + '</textarea></div><div class="form-group"><label for="date">Date1:</label><br><input type="date" id="date" name="date" value="' + dataArray.date + '"></div><div class="form-group"><label for="date1">Date2:</label><br><input type="date" id="date1" name="date1" value="' + dataArray.date1 + '"></div><div class="form-group"><label for="time">Time1</label><input type="time" id="time" value="' + dataArray.time + '" class="form-control" name="time"/></div><div class="form-group"><label for="time">Time2</label><input type="time" id="time1" value="' + dataArray.time1 + '" class="form-control" name="time1"/></div><div class="form-group"><label for="venue">Venue</label><input type="text" id="venue" value="' + dataArray.venue + '" class="form-control" name="venue" /></div><div class="form-group"><label for="category">Category</label><input type="text" id="category" value="' + dataArray.category + '" class="form-control" name="category"/></div><div class="form-group"><label for="image-path">Image Path</label><img src="' + dataArray.image_path + '" height="200" width="200"></div><h4>Coordinator one</h4><div class="form-group"><label for="full_name_1">Full Name</label><input type="text" id="full_name_1" value="' + dataArray.coordinatorName1 + '" class="form-control" name="coordinatorName1"/></div><div class="form-group"><label for="contact_1">Contact</label><input type="tel" id="contact_1" value="' + dataArray.coordinatorContact1 + '" class="form-control" name="coordinatorContact1"/></div><h4>Coordinator two</h4><div class="form-group"><label for="full_name_2">Full Name</label><input type="text" id="full_name_2" value="' + dataArray.coordinatorName2 + '" class="form-control" name="coordinatorName2"/></div><div class="form-group"><label for="contact_2">Contact</label><input type="tel" id="contact_2" value="' + dataArray.coordinatorContact2 + '" class="form-control" name="coordinatorContact2"/></div><div class="form-group"><label for= "LoginID">Login ID</label ><input type="text" id="loginId" name="loginId" value="' + dataArray.loginId + '" class="form-control" />  </div><div class="form-group"><label for= "login_password">Login Password</label ><input type="text" id="loginPassword" name="loginPassword" value="' + dataArray.loginPassword + '" class="form-control" />  </div>';
            $("#updateEvents").html(temp);
            // $("#update_modal").toggle();
            //console.log($("#updateEvents").html());
        },
        error: function(data) {
            console.log(data);
        }
    });
});
// Delete Event Handler
$(document).on("click", "#delete", function () {
	var event_id = $(this).parents("td").siblings("#eid").html();
	$.ajax({
		type: "POST",
		url: "../../../apis/events/deleteEvent.php",
		data: {
			eid: event_id
		},
		success: function (data) {
            console.log(data);
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
    console.log("update");
    var formobj={
			eid: $("#updateEvents").find("#eid")[0].attributes["value"].value.toString(),
			title: $("#update_modal #title").val().toString(),
			description: $("#update_modal #desc").val().toString(),
			rules: $("#update_modal #rules").val().toString(),
			judging_criteria: $("#update_modal #jc").val().toString(),
			date: $("#update_modal #date").val().toString(),
			time: $("#update_modal #time").val().toString(),
			date1: $("#update_modal #date1").val().toString(),
			time1: $("#update_modal #time1").val().toString(),
			venue: $("#update_modal #venue").val().toString(),
			category: $("#update_modal #category").val().toString(),
			coordinatorName1: $("#update_modal #full_name_1").val().toString(),
			coordinatorContact1: $("#update_modal #contact_1").val().toString(),
			coordinatorName2: $("#update_modal #full_name_2").val().toString(),
			coordinatorContact2: $("#update_modal #contact_2").val().toString(),
			token: localStorage.cms_token,
			loginId: $("#update_modal #loginId").val().toString(),
			loginPassword: $("#update_modal #loginPassword").val().toString()
		};
	$.ajax({
		type: "POST",
		url: "../../../apis/events/updateEvent.php",
		data: formobj,
		success: function (data) {            
			if (JSON.parse(data).status == "success") {			
                swal("Event Updated Successfully", ": )", "success")    
                .then((value)=>{
                    window.location.assign("manage_events.html");
                }) 
			} else {
                swal(JSON.parse(data).result, ": )", "error")
                .then((value)=>{
                    console.log("close");
                    window.location.assign("manage_events.html");
                })
			}
		},
		error: function (data) {
			alert("Failed in processing request.");
		}
	});
});