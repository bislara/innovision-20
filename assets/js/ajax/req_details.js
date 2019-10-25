var url = location.href;

var parts = location.search.substring(1).split('&');
var eid = parts[0].split('=');
var e_name = parts[1].split('=');

// console.log(eid);/
// console.log(e_name);
var r = e_name[1].replace(/[^a-zA-Z]+/g, ' ');
$('#event_name').html(r);

$(document).ready(function () {
	if (eid[1] == null || eid[1] == "" || !eid[1]) {
		alert("Problem fetching the event details!");
	} else {
		console.log(eid[1]);
		$.ajax({
			type: "GET",
			url: "../../apis/admin/requirements/fetchIndividual.php?eid=" + eid[1],
			beforeSend: function(request){
            request.setRequestHeader('Authorization', 'Bearer ' + localStorage.cms_token);
    		},
			success: function (data) {			
				var dataArray = JSON.parse(data);
				// console.log(dataArray);
				if (dataArray["status"] == "success") {
					var eventArr = dataArray["result"];
					console.log(eventArr);
					
					var c1_left=eventArr["c1_left"];
					$('#stnRequired').val(c1_left);
					
					$('#stnleft').val(eventArr["c1_given"]);
					$('#woodRequired').val(eventArr["c2_left"]);
					$('#woodLeft').val(eventArr["c2_given"]);
					$('#elecRrequired').val(eventArr["c3_left"]);
					$('#elecLeft').val(eventArr["c3_given"]);
					$('#miscRequired').val(eventArr["c4_left"]);
					$('#miscLeft').val(eventArr["c4_given"]);

				}
			}
		});
	} 
});

$('#submit_req').click(function () {

		$.ajax({
	            type: "POST",
	            url: "../../apis/admin/requirements/insert_update_req.php",
	            data: {
	                                    e_id: eid[1],
	                                    c1: $("#stnRequired").val().toString(),
	                                    c2: $("#stnleft").val().toString(),
	                                    c3: $("#woodRequired").val().toString(),
	                                    c4: $("#woodLeft").val().toString(),
	                                    c5: $("#elecRrequired").val().toString(),
	                                    c6: $("#elecLeft").val().toString(),
	                                    c7: $("#miscRequired").val().toString(),
	                                    c8: $("#miscLeft").val().toString(),
	                        },
	                                success: function (data) {
	                                	var dataArray = JSON.parse(data);
										// console.log(dataArray);
										swal("Successfully submitted.", ": )", "success");
										window.location.reload();
	                                },
	                                error: function (data) {
	                                    // errorAlert();
	                                    swal("Bad luck!", "Try again!", "failed");
	                                    
	                                }

	                            });
	return false;
});
