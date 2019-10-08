var url = location.href;
var ca_id = url.split("?")[1].split("=")[1];
$(document).ready(function () {
	
	//eid = url.split("?")[1].split("=")[1];
	if (ca_id == null || ca_id == "" || !ca_id) {
		alert("Problem fetching the CA details!");
		window.location.href('profile.html');
	} else {
		$.ajax({
			type: "GET",
			url: "../../apis/user/ca/fetchCA_user.php?ca_id=" + ca_id,
			success: function (data) {			
				var dataArray = JSON.parse(data);
				if (dataArray["status"] == "success") { 
					var eventArr = dataArray["result"];

					var q1=eventArr["q1"];
					$('#q1').val(q1);
					
					var q2=eventArr["q2"];
					$('#q2').val(q2);

					var q3=eventArr["q3"];
					$('#q3').val(q3);

					var q4=eventArr["q4"];
					$('#q4s').val(q4);

					var q5=eventArr["q5"];
					$('#q5').val(q5);

					var q6=eventArr["q6"];
					$('#q6').val(q6);

					var q7=eventArr["q7"];
					$('#q7').val(q7);

					var q8=eventArr["q8"];
					$('#q8').val(q8);

					var q9=eventArr["q9"];
					$('#q9').val(q9);

					var q10=eventArr["q10"];
					$('#q10').val(q10);

					var q11=eventArr["q11"];
					$('#q11').val(q11);

					var q12=eventArr["q12"];
					$('#q12').val(q12);

					var q13=eventArr["q13"];
					$('#q13').val(q13);
				}
			}
		});
	} 
});

$(document).on("click", ".submitform", function () {
    var college_name = "";
    if($("#q4s").val().localeCompare("select") == 0)
    {
        swal("Choose College",":|","warning");
    }
    else
    {
         if ($("#q4s").val().localeCompare("Others") == 0) {
        college_name = $("#q4i").val().toString();
        }
        else
            if ($("#q4s").val().toString().localeCompare("") != 0) {
                college_name = $("#q4s").val().toString();
            }
    }

    // console.log($("#q4").val());
    if ($("#q1").val().toString().localeCompare("") == 0 || $("#q2").val().toString().localeCompare("") == 0 || $("#q3").val().toString().localeCompare("") == 0 || college_name.localeCompare("") == 0 || $("#q5").val().toString().localeCompare("") == 0 || $("#q6").val().toString().localeCompare("") == 0 || $("#q7").val().toString().localeCompare("") == 0 || $("#q8").val().toString().localeCompare("") == 0 || $("#q9").val().toString().localeCompare("") == 0 || $("#q10").val().toString().localeCompare("") == 0 || $("#q11").val().toString().localeCompare("") == 0 || $("#q12").val().toString().localeCompare("") == 0 || $("#q13").val().toString().localeCompare("") == 0 ) {
        swal("Fill Up All The Fields", ":|", "warning");
    }
    else {
        $.ajax({
            type: "POST",
            url: "../../apis/user/ca/updateCAapplication.php",
            data: {
            	ca_id: ca_id,
                q1: $("#q1").val().toString(),
                q2: $("#q2").val().toString(),
                q3: $("#q3").val().toString(),
                q4: college_name,
                q5: $("#q5").val().toString(),
                q6: $("#q6").val().toString(),
                q7: $("#q7").val().toString(),
                q8: $("#q8").val().toString(),
                q9: $("#q9").val().toString(),
                q10: $("#q10").val().toString(),
                q11: $("#q11").val().toString(),
                q12: $("#q12").val().toString(),
                q13: $("#q13").val().toString()
            },
            success: function (data) {
            	console.log(JSON.parse(data).result);
                if (JSON.parse(data).status == "success") {
                    // console.log(data);
                // }
                    if (JSON.parse(data).result=="successful entry") {
                    swal("Update Successful !", ": )", "success");

                    }
                    if ($("#q4s").val().localeCompare("Others") == 0) {
                        $.ajax({
                            type: "POST",
                            url: "../../apis/misc/CollegeList/others/create.php",
                            data: {
                                cname: $("#q4i").val().toString()
                            },
                            success: function (data) {
                                // swal("Good job!", "College Added", "success");
                            }
                        });
                    }
                    // successAlert();
                    // swal({icon: "success", 
                    //     title: "Successfully registered",
                    //     text: ":)",
                    //     buttons: {
                    //         sure : "Okay"
                    //     },
                    // }).then((value) => {
                    //     switch(value){
                    //         case "sure":
                    //         location.reload(true);
                    //         break;
                    //     }
                    // });
                    location.reload(true);
                }
                else {
                    // failureAlert(JSON.parse(data));
                    // swal({icon: "error", 
                    //     title: JSON.parse(data).status,
                    //     text: JSON.parse(data).result,
                    //     buttons: {
                    //         sure : "Okay"
                    //     },
                    // }).then((value) => {
                    //     switch(value){
                    //         case "sure":
                    //         location.reload(true);
                    //         break;
                    //     }
                    // });
                    swal(JSON.parse(data).status, JSON.parse(data).result, "error"); 
                }
            },
            error: function (data) {
                // errorAlert();
                swal("Bad luck!", "You clicked the button!", "failed");
                // swal({icon: "error", 
                //        title: "Failure",
                //        text: "Could not process request! Try again later.",
                //        buttons: {
                //            sure : "Okay"
                //        },
                //    }).then((value) => {
                //        switch(value){
                //            case "sure":
                //            location.reload(true);
                //            break;
                //        }
                //    });
                //swal("Failure", "Could not process request! Try again later.", "error");
            }

        });
    }
    return false;
});