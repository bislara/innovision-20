$(document).on("click", ".submitform", function () {
    var college_name = "";
    if($("#q4s").val().localeCompare("select") == 0)
    {
        //swal("Choose College",":|","warning");
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
    if ($("#q1").val().toString().localeCompare("") == 0 || $("#q2").val().toString().localeCompare("") == 0 || $("#q3").val().toString().localeCompare("") == 0 || college_name.localeCompare("") == 0 || $("#q5").val().toString().localeCompare("") == 0 || $("#q6").val().toString().localeCompare("") == 0 || $("#q7").val().toString().localeCompare("") == 0 || $("#q8").val().toString().localeCompare("") == 0 || $("#q9").val().toString().localeCompare("") == 0 || $("#q10").val().toString().localeCompare("") == 0 || $("#q11").val().toString().localeCompare("") == 0 || $("#q12").val().toString().localeCompare("") == 0 || $("#q13").val().toString().localeCompare("") == 0 || $("#q14").val().toString().localeCompare("") == 0) {
        swal("Fill Up All The Fields", ":|", "warning");
    }
    else {
        $.ajax({
            type: "POST",
            url: "../apis/CASelectionApplication/createCAApplication.php",
            data: {
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
                q13: $("#q13").val().toString(),
                q14: $("#q14").val().toString()
            },
            success: function (data) {
                if (JSON.parse(data).status == "success") {
                    console.log($("#q4s").val().localeCompare("Others") == 0);
                    if ($("#q4s").val().localeCompare("Others") == 0) {
                        $.ajax({
                            type: "POST",
                            url: "../apis/CollegeList/others/create.php",
                            data: {
                                college: $("#q4i").val().toString()
                            },
                            success: function (data) {
                                //console.log(JSON.parse(data).status);
                            }
                        });
                    }
                    successAlert();
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
                    //location.reload(true);
                }
                else {
                    failureAlert(JSON.parse(data));
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
                    //swal(JSON.parse(data).status, JSON.parse(data).result, "error"); 
                }
            },
            error: function (data) {
                errorAlert();
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
});