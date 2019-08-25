var temp = '';

// Script to fetch all events
$(document).ready(function() {
    $.ajax({
        url: "../../../apis/admin/events/admin/fetchAllEvents.php",
        beforeSend: function(request){
            request.setRequestHeader('Authorization', 'Bearer ' + localStorage.cms_token);
        },
        type: "GET",
        success: function(data) {
            console.log(data);
            var data_obj = JSON.parse(data);
            console.log(data_obj);
            var data_arr = data_obj.result;
            if(data_obj["status"]!=="failure"){
                    for (var i = 0; i < data_arr.length; i++) {
                        imgElement='<td><img class="img-responsive" alt="No Image" height="70px" width="auto"></td>';
                        if(data_arr[i].image_path){
                            imgElement='<td><img class="img-responsive" src="' + data_arr[i].image_path + '" height="70px" width="auto"></td>';
                        }
                        temp = temp + '<tr><td style="display:none" id="eid">' + data_arr[i].eid + '</td><td>' + (i + 1) + '</td >'+imgElement+'<td>' + data_arr[i].title + '</td><td>' + data_arr[i].venue + '</td><td>' + data_arr[i].date + '</td><td>' + data_arr[i].time + '</td><td>' + data_arr[i].date1 + '</td><td>' + data_arr[i].time1 + '</td><td><button onclick="" class="btn btn-danger" id="delete">Delete</button></td><td><button class="btn btn-warning" id="update" data-toggle="modal" data-target="#update_modal">Update</button></td></tr> ';
                }
                $('tbody').append(temp);
            }else{
                swal(data_obj["result"], "error")    
                .then((value)=>{
                    window.location.assign("index.html");
                }) 
            }
            
        },
        error: function(data) {
            //console.log(data);
        }
    });
});

// Event Update Handler
$(document).on("click", "#update", function() {
    // console.log("Hiii");
    var eid = $(this).parents("tr").find("#eid").text();
    console.log(eid);
    $.ajax({
        type: "GET",
        beforeSend: function(request){
            request.setRequestHeader('Authorization', 'Bearer ' + localStorage.cms_token);
        },
        data:{
            eid:eid
        },
        url: "../../../apis/admin/events/admin/fetchIndividualEvent.php?q=" + eid,
        success: function(data) {
            console.log(data);
            //code for modal on update button click
            var dataObj = JSON.parse(data);
            console.log(dataObj.result);
            var dataArray = dataObj.result;            
            let imgElement='<img alt="No Image" height="200" width="200">';
            if(dataArray.image_path){
                imgElement='<img src="' + dataArray.image_path + '" height="200" width="200">';
            }
            var temp = '<div style="display:none" value="' + dataArray.eid + '" id="eid"></div>  <div class="form-group"><label for= "event_name"> Event Name</label ><input type="text" id="title" name="title" value="' + dataArray.title + '" class="form-control" />  </div><div class="form-group"><label for="message-text" class="col-form-label">Description:</label><textarea class="form-control" value="" id="desc" name="description">' + dataArray.description + '</textarea></div><div class="form-group"><label for="message-text" class="col-form-label">Event Rules:</label><textarea class="form-control" value="" id="rules" name="rules">' + dataArray.rules + '</textarea></div><div class="form-group"><label for="message-text" class="col-form-label">Judging Criteria:</label><textarea class="form-control" value="" id="jc" name="judging_criteria">' + dataArray.judging_criteria + '</textarea></div><div class="form-group"><label for="date">Date1:</label><br><input type="date" id="date" name="date" value="' + dataArray.date + '"></div><div class="form-group"><label for="date1">Date2:</label><br><input type="date" id="date1" name="date1" value="' + dataArray.date1 + '"></div><div class="form-group"><label for="time">Time1</label><input type="time" id="time" value="' + dataArray.time + '" class="form-control" name="time"/></div><div class="form-group"><label for="time">Time2</label><input type="time" id="time1" value="' + dataArray.time1 + '" class="form-control" name="time1"/></div><div class="form-group"><label for="venue">Venue</label><input type="text" id="venue" value="' + dataArray.venue + '" class="form-control" name="venue" /></div><div class="form-group"><label for="category">Category</label><input type="text" id="category" value="' + dataArray.category + '" class="form-control" name="category"/></div><div class="form-group"><label for="image-path">Image Path</label>'+imgElement+'</div><div class="form-group"><label for="image-path">Update Image</label><input type="file" name="" id="fileToUpload"></div><h4>Coordinator one</h4><div class="form-group"><label for="full_name_1">Full Name</label><input type="text" id="full_name_1" value="' + dataArray.coordinatorName1 + '" class="form-control" name="coordinatorName1"/></div><div class="form-group"><label for="contact_1">Contact</label><input type="tel" id="contact_1" value="' + dataArray.coordinatorContact1 + '" class="form-control" name="coordinatorContact1"/></div><h4>Coordinator two</h4><div class="form-group"><label for="full_name_2">Full Name</label><input type="text" id="full_name_2" value="' + dataArray.coordinatorName2 + '" class="form-control" name="coordinatorName2"/></div><div class="form-group"><label for="contact_2">Contact</label><input type="tel" id="contact_2" value="' + dataArray.coordinatorContact2 + '" class="form-control" name="coordinatorContact2"/></div><div class="form-group"><label for= "LoginID">Login ID</label ><input type="text" id="loginId" name="loginId" value="' + dataArray.loginId + '" class="form-control" />  </div><div class="form-group"><label for= "login_password">Login Password</label ><input type="text" id="loginPassword" name="loginPassword" value="' + dataArray.loginPassword + '" class="form-control" />  </div><div class="form-group"><label for= "max_limit">Maximum Registration Limit</label ><input type="number" id="max_limit" name="max_limit" value="' + dataArray.max_limit + '" class="form-control" />  </div>';
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
        beforeSend: function(request){
            request.setRequestHeader('Authorization', 'Bearer ' + localStorage.cms_token);
        },
		url: "../../../apis/admin/events/admin/deleteEvent.php",
		data: {
			eid: event_id
		},
		success: function (data) {
            console.log(data);
			if (JSON.parse(data).status == "success") {
				swal("Event Deleted Successfully", ": )", "success")    
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
			alert("Failed in creating request!");
		}
	});
});

$(document).on("click", "#submit_it", function () {
    console.log("update");
    const myForm = document.getElementById('updateEvents');
    var formObj = new FormData(myForm);
     formObj.append("eid",$("#updateEvents").find("#eid")[0].attributes["value"].value.toString());    
     formObj.append("fileToUpload",$("#update_modal #fileToUpload").prop("files")[0]);
    console.log(formObj.getAll('fileToUpload'));
    
	$.ajax({
		type: "POST",
        beforeSend: function(request){
            request.setRequestHeader('Authorization', 'Bearer ' + localStorage.cms_token);
        },
		url: "../../../apis/admin/events/admin/updateEvent.php",
		data: formObj,
        cache: false,
        contentType: false,
        processData: false,
		success: function (data) {       
            console.log(data)     ;
			if (JSON.parse(data).status == "success") {			
                swal(JSON.parse(data).result, ": )", "success")    
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