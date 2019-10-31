$(document).ready(function() {
	$('#ca_button1').html('APPLY FOR CA !');
	var q = localStorage.getItem('token');
	$('#ca_button1').on('click', function() {
		window.location = './ca/index.html';
	});
	if (q) {
		//var id=0;
		$.ajax({
			url: '../apis/user/auth/profile.php',
			beforeSend: function(request) {
				request.setRequestHeader('Authorization', 'Bearer ' + q);
			},
			type: 'get',
			success: function(response) {
				// console.log(response);
				response = JSON.parse(response);
				if (response.status == 'success') {
					var id = response.result['basicInfo']['inno_id'];
					var name = response.result['basicInfo']['name'];
					var email = response.result['basicInfo']['email'];
					var college = response.result['basicInfo']['college'];
					var ca_id = response.result['basicInfo']['ca_id'];
					var paid=parseInt(response.result['basicInfo']['paid']);
					var under_CA=parseInt(response.result['basicInfo']['ca_response']);
					var hostel=response.result['basicInfo']['allotted_hostel'];
					var payment=response.result['basicInfo']['payment_response'];
					console.log(paid);
					console.log('hello');
					
					if(paid==1){
						$('#paymentBtn').hide();						
						$("#ticket").html("<b>Ticket ID :  </b>"+JSON.parse(payment).ticketId);
                    }
                	else if(paid==2){
						$('#paymentBtn').hide();
                    	$('#paidMsg').html('You are an NITian,no need to pay !');
					}else{
						$('#paidMsg').hide();
					}

					if(under_CA){
						$('#under_CA').html("<b>Under CA</b> :  "+under_CA);
						$(".ca").css('display','flex');
					}else{
						$(".ca").css('display','flex');
						$('#ca_button2').html("Add Under CA");
					}

					if(hostel.length){
						$("#planet").html("Your Hostel is "+hostel.toUpperCase())
					}

                
					$('#participant_ca_id').hide();
					// console.log(ca_id);
					if(ca_id != 0)
                    {
                    	$('#participant_ca_id').show();
						$('#ca_button1').html('EDIT CA APPLICATION');
                    	document.getElementById('participant_ca_id').innerHTML = '<b>CA ID</b> : ' + ca_id;
                    }
					document.getElementById('participant_id').innerHTML = '<b>Inno ID</b> : ' + id;
					document.getElementById('participant_name').innerHTML = '<b>Name</b> : ' + name;
					document.getElementById('participant_email').innerHTML = '<b>Email</b> : ' + email;
                    document.getElementById('participant_college').innerHTML = '<b>College</b> : ' + college;

					// console.log(response.result['regEvents']);
					regevents = response.result['regEvents'];
					if (regevents.length > 0) {
						var num_of_events = regevents.length;
						for (var i = 0; i < num_of_events; i = i + 4) {
							var j = i;
							var temp = '';
							for (var j = i; j < i + 4; j = j + 1) {
								if (j >= num_of_events) break;
								else {
									var image_path = regevents[j]['image_path'];
									var event_name = regevents[j]['title'];
									var eid = regevents[j]['eid'];
									var link = './event-details.html?eid=' + eid;
									temp =
										temp +
										"<div class='col-lg-3 col-6 col-md-6'><div class='hotel'><div class='hotel-img'><a href=" +
										link +
										"><img src=../" +
										image_path +
										" alt='" +
										event_name +
										"' class='img-fluid'></div><h3>" +
										event_name +
										'</h3></a></div></div>';
									//temp = temp+"<div class='col-lg-3 col-md-6'>                  <div class='hotel'><div class='hotel-img'><img src='../"+image_path+"' alt='"+event_name+"' class='img-fluid'></div><h3><a href="+link+">"+event_name+"</a></h3></div></div>"
								}
							}
							$('#profile_events').append(
								"<div class='row' style='text-align: center;'>" + temp + '</div><br>'
							);
						}
					} else {
						$('#profile_events').append(
							"<div class='row' style='text-align: center;'><h2 style='color:white;'><center>You have not Registered for any event</center></h2></div>"
						);
					}
				}
				if (response.status == 'failure') {
					swal('Please Login First to open profile page !', ': [', 'warning').then((value) => {
						window.location = './login.html';
					});
				}
			}
		});
	} else {
		    swal('Please Login First to open profile page !', ': [', 'warning').then((value) => {
						window.location = './login.html';
					});
		// swal('You have not registered.', ': [', 'warning');
		// window.location = './login.html';
				// swal({
				// title: "Please Login First to open profile page !",
				// text: ": )",
				// type: "warning"
				// }, function() {
				// window.location = './login.html';
				// });
	}
});

$('#paymentBtn').click(()=>{
	
	var p = $('#paymentBtn');
	p.text("Processing...");

    var q = localStorage.getItem('token');
    $.ajax({
        url: '../apis/user/payment/payment.php',
        beforeSend: function(request) {
            request.setRequestHeader('Authorization', 'Bearer ' + q);
        },
        type: 'POST',
        success:(response)=>{
            
			console.log(response);
			response=JSON.parse(response);
			let url=JSON.parse(response.result).pgUrl;
			window.location=url;
        }
    });
})
$('#signoutBtn').click(()=>{
	localStorage.removeItem('token');
	window.location='/';
})

$('#ca_button2').click(()=>{
	console.log("hell");
	$(".ca").html('<input style="border-radius: 0.75em;" type="number" min="1" step="1" name="under_CA" / placeholder="CA_ID"><button class="about-btn" style="background-color: black;" id="editCaButton">&nbsp; Submit &nbsp;</button>')

})

$('.ca').on('click','#editCaButton', function(){
	var q = localStorage.getItem('token');
	let id=$("input[type=number]").val();
    $.ajax({
        url: '../apis/user/ca/changeUnderCA.php',        
		data:{
			token:q,
			underCA:id
		},
        type: 'POST',
        success:(response)=>{
			response=JSON.parse(response);
			swal(response.result, "success")    
                .then((value)=>{
                    window.location.reload();
                }) 
			// let url=JSON.parse(response.result).pgUrl;
			// window.location=url;
        }
    });
} );