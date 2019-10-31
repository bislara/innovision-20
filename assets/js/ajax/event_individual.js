var url = location.href;
var eid = url.split("?")[1].split("=")[1];
var status;
var dataArray;
setMetaTags=(eventArr)=>{
	

	$('head').prepend('<meta property="og:image:height" content="280">');
	$('head').prepend('<meta property="og:image:width" content="806">');
	$('head').prepend('<meta property="og:image" content="https://innonitr.com/'+eventArr["image_path"]+'">');
	$('head').prepend('<meta property="og:url" content="'+window.location.href+'">');					
	$('head').prepend('<meta property="og:type" content="website">');					
	$('head').prepend('<meta property="og:description" content="'+eventArr["description"]+'">');
	$('head').prepend('<meta property="og:title" content="'+eventArr["title"]+',innovision,inno nitrkl">');		
	$('head').prepend('<meta name="keywords" content="'+eventArr["title"]+'">');
	$('head').prepend('<title>'+eventArr["title"]+'</title>');	
	$('head').prepend('<meta charset="utf-8">');	
}
function registerEvent()
{
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
					// swal("Registration Successful !", ": )", "success");
					// window.location.assign('event-details.html?eid='+ eid);
        			// swal({
        			// title: "Registration Successful !",
        			// text: ": )",
        			// type: "success"
        			// }, function() {
        			// window.location = 'event-details.html?eid='+ eid;
        			// });
        			
                	if (eid!=148) {

                	swal({
           			title: "Registration Successful !",
            		text: ": )",
            		type: "success"
        			}, function() {
            			window.location = 'event-details.html?eid='+ eid;
        			});
                }
                else if (eid==148) {
                	swal("Registration Successful !", ": )", "success");
					window.location.assign('https://participate.redbull.com/en/registration/red-bull-river-runes/college-qualifiers/red-bull-river-runes-2019?athleteTypeId=78b26e5ef1a811e98cde0242ac110003#/participant');
                }
        			 
        			

				} else if (dataArr["status"] == "failure") {
					swal("Session Expired! Please login to register for the event.", ":(", "error");

				}
				else if (dataArr["status"] == "DeRegistration done") {
					// swal("De registration Successful !", ": )", "success");
					// window.location.assign('event-details.html?eid='+ eid);
					swal({
           			title: "De registration Successful !",
            		text: ": )",
            		type: "success"
        			}, function() {
            			window.location = 'event-details.html?eid='+ eid;
        			});

				}
			}
		});
}
$(document).ready(function () {
	//$('#details_modal').hide();
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

				dataArray = JSON.parse(data);

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
						status = 0;
						$('#register').html("DeRegister");
					}
					else
					{
						status = 1;
                    	if (eid==33) 
						{
						$('#register').hide();
						}
						$('#register').html("Register");
                    }
					setMetaTags(eventArr);
					if(eventArr['category']==='paidworkshops')
						$('#paymentBtn').show();

				}
			}
		});
	}
	 else {
		$.ajax({
			type: "GET",
			url: "../apis/admin/events/admin/fetchIndividualEvent.php?eid=" + eid,
			success: function (data) {			
				dataArray = JSON.parse(data);
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
					status = 1;
                	if (eid==33) 
					{
					$('#register').hide();
					}
					$('#register').html("Register");                
					setMetaTags(eventArr);
					if(eventArr['category']==='paidworkshops')
						$('#paymentBtn').show();
				}
			}
		});
	} 
});

$(document).on("click", "#detailsButton", function () {
	
    var q = localStorage.getItem("token");
    if (q == null || q == "" || !(q)) {
		swal("Please Login First to register for the event.", ": [", "warning");
	}
	else
	{
		var e = document.getElementById("graduation_year");
        var gyear = e.options[e.selectedIndex].value;
        var details_user = {"cgpa": $('#cgpa').val(), "grad_year": gyear, "cv": $('#cvLink').val(), "backlogs": $('#backlogs').val()};
        details_user = JSON.stringify(details_user);
        

		$.ajax({
				type: "POST",
				url: "../apis/user/specialeventRegistration.php",
				data: {
					token: q,
					eid: eid,
					details:details_user 
				},
				beforeSend: function(request) {
				request.setRequestHeader('Authorization', 'Bearer ' + q);
				},
				success: function (data) {
				    dataArr = JSON.parse(data);
					if (dataArr["status"] == "registration done") {
						// swal("Registration Successful !", ": )", "success");
						// window.location.assign('event-details.html?eid='+ eid);
	                	swal({
	           			title: "Registration Successful !",
	            		text: ": )",
	            		type: "success"
	        			}, function() {
	            			window.location = 'event-details.html?eid='+ eid;
	        			});

					} else if (dataArr["status"] == "failure") {
						swal("Session Expired! Please login to register for the event.", ":(", "error");

					}
					else if (dataArr["status"] == "DeRegistration done") {
						// swal("De registration Successful !", ": )", "success");
						// window.location.assign('event-details.html?eid='+ eid);
						swal({
	           			title: "De registration Successful !",
	            		text: ": )",
	            		type: "success"
	        			}, function() {
	            			window.location = 'event-details.html?eid='+ eid;
	        			});

					}
				}
			});
			
	}
	
	//registerEvent();		
	
});
$(document).on("click", ".register", function () {	
    var q = localStorage.getItem("token");
    console.log(eid);
	// console.log(q);	
	if (q == null || q == "" || !(q)) {
		swal("Please Login First to register for the event.", ": [", "warning");
	} 
	else if(eid == 105)
	{
		if(status == 0)
		{
			registerEvent();
		}
		else
		{
		 $("#details_modal").modal("show");   
		}
	}
	else {

		registerEvent();		
	}
});

$('#paymentBtn').click(()=>{
	
	var p = $('#paymentBtn');
	p.text("Processing...");

	var q = localStorage.getItem('token');
	var url = location.href;
	var eid = url.split("?")[1].split("=")[1];		
    $.ajax({
        url: '../apis/user/payment/specialPayment.php',        
		data:{
			eid:eid,
        	token:q,
			title:dataArray["result"]["title"]
		},
        type: 'POST',
        success:(response)=>{
            
			console.log(response);
			response=JSON.parse(response);
			if (response["status"] == "failure") {
				swal("Please login to pay for the event.", ":(", "error");
				var p = $('#paymentBtn').text('Payment');				
			}else{
				let url=JSON.parse(response.result).pgUrl;
				window.location=url;
			}			
        }
    });
})
