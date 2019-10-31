var url = location.href;
var ca_id = url.split("?")[1].split("=")[1];
$(document).ready(function () {
	if (ca_id == null || ca_id == "" || !ca_id) {
		alert("Problem fetching the event details!");
	} else {
		$.ajax({
			type: "GET",
			url: "../../../apis/admin/ca/fetchIndividualCA.php?ca_id=" + ca_id,
			beforeSend: function(request){
            request.setRequestHeader('Authorization', 'Bearer ' + localStorage.ca_token);
    		},
			success: function (data) {			
				var dataArray = JSON.parse(data);
				if (dataArray["status"] == "success") {
					var eventArr = dataArray["result"];
					// console.log(eventArr);

					var details="";
					details=details+'<div class="row"><div class="col-md-6"><h3>Name - '+ eventArr["q1"] +'</h3></div><div class="col-md-6"><h3>Mail Id- '+ eventArr["q2"] +'</h3></div></div><div class="row"><div class="col-md-6"><h3>Contact Number - '+ eventArr["q3"] +'</h3></div><div class="col-md-6"><h3>college - '+ eventArr["q4"] +'</h3></div></div><div class="row"><div class="col-md-6"><h3>Year of study - '+ eventArr["q6"] +'</h3></div><div class="col-md-6"><h3>Course - '+ eventArr["q5"] +'</h3></div></div><br><h4>1. Have you ever held or are currently holding a position of responsibility in your college?</h4><h4>Ans - '+ eventArr["q7"] +'</h4><h4>2. Have you ever been to Innovision earlier? If yes, when?</h4><h4>Ans - '+ eventArr["q8"] +'</h4><h4>3. What do you know about Innovision? Write in brief.</h4><h4>Ans - '+ eventArr["q9"] +'</h4><h4>4. How many students from your college do you think you can convince to participate in Innovision 2019? What will be your strategy to promote Innovision 2019 in your college?</h4><h4>Ans - '+ eventArr["q10"] +'</h4><h4>5. Which social media platforms are you active on?</h4><h4>Ans - '+ eventArr["q11"] +'</h4><h4>6. Which languages are you fluent in?</h4><h4>Ans - '+ eventArr["q12"] +'</h4><h4>7. What makes you unique?</h4><h4>Ans - '+ eventArr["q13"] +'</h4> ';
                        
                
					$('#Ca-details').html(details);

					var submit_ca="";
					if (eventArr["selected"]==1) {
					submit_ca=submit_ca+"Unselect";
					}
					else
					{
					submit_ca=submit_ca+"Confirm CA";						
					}
					$('#accept_ca').html(submit_ca);

				}
			}
		});
	} 
});

$('#accept_ca').click(function () {

		$.ajax({
			type: "POST",
			url: "../../../apis/admin/ca/CASelect.php",
			beforeSend: function(request){
            request.setRequestHeader('Authorization', 'Bearer ' + localStorage.ca_token);
    		},
			data: {
				ca_id: ca_id
			},
			success: function (data) {
				// console.log(data);
				dataArr = JSON.parse(data);
				if (dataArr["status"] == "success") {
					swal("Successful !", ": )", "success");

				} else if (dataArr["status"] == "failure") {
					swal("Confirmation failed! Please try again.", ":(", "error");
				}
				location.reload(true);
			}
		});
	
});
