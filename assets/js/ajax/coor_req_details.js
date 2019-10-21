var url = location.href;

var parts = location.search.substring(1).split('&');
var eid = parts[0].split('=');

// console.log(eid);/
// console.log(e_name);

$(document).ready(function () {
	if (eid[1] == null || eid[1] == "" || !eid[1]) {
		alert("Problem fetching the event details!");
	} else {
		console.log(eid[1]);
		$.ajax({
			type: "GET",
			url: "../../../apis/admin/requirements/fetchIndividual.php?eid=" + eid[1],
			beforeSend: function(request){
            request.setRequestHeader('Authorization', 'Bearer ' + localStorage.cms_token);
    		},
			success: function (data) {			
				var dataArray = JSON.parse(data);
				// console.log(dataArray);
				if (dataArray["status"] == "success") {
					var eventArr = dataArray["result"];
					console.log(eventArr);
					
					$('#c1_left').html(eventArr["c1_left"]);
					$('#c1_given').html(eventArr["c1_given"]);
					$('#c2_left').html(eventArr["c2_left"]);
					$('#c2_given').html(eventArr["c2_given"]);
					$('#c3_left').html(eventArr["c3_left"]);
					$('#c3_given').html(eventArr["c3_given"]);
					$('#c4_left').html(eventArr["c4_left"]);
					$('#c4_given').html(eventArr["c4_given"]);

				}
			}
		});
	} 
});
