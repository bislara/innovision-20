// Event Create Handler
$(document).on("click", "#newEvent", function() {    
    $("#create_modal").modal("show");    
});

$(document).on("click", "#createEvent", function () {
    //alert("Hii");
    var title = $("#title").val().toString();
    var desc = $("#desc").val().toString();
    var rules = $("#rules").val().toString();
    var jc = $("#jc").val().toString();
    var dat = $("#date").val().toString();
    var time = $("#time").val().toString();
    var dat1 = $("#date1").val().toString();
    var time1 = $("#time1").val().toString();
    var venue = $("#venue").val().toString();
    var category = $("#category").val().toString();
    //var max_par = $("#max_participants").val().toString();
    var full_name1 = $("#full_name_1").val().toString();
    var cont1 = $("#contact_1").val().toString();
    var full_name2 = $("#full_name_2").val().toString();
    var cont2 = $("#contact_2").val().toString();
    var imge = $("#fileToUpload").prop("files")[0];


    var formObj = new FormData();
    formObj.append("title", title);
    formObj.append("description", desc);
    formObj.append("rules", rules);
    formObj.append("judging_criteria", jc);
    formObj.append("date", dat);
    formObj.append("date1", dat1);
    formObj.append("venue", venue);
    formObj.append("time", time);
    formObj.append("time1", time1);
    formObj.append("category", category);
    //formObj.append("max_par", max_par);
    formObj.append("coordinatorName1", full_name1);
    formObj.append("coordinatorContact1", cont1);
    formObj.append("coordinatorName2", full_name2);
    formObj.append("coordinatorContact2", cont2);
    formObj.append("token", localStorage.cms_token);
    formObj.append("fileToUpload", imge);
    for (var key of formObj.entries()) {
        console.log(key[0] + ', ' + key[1]);
    }
    $.ajax({
        type: "POST",
        url: "../../../apis/events/createEvent.php",
        cache: false,
        contentType: false,
        processData: false,
        data: formObj,
        success: function (data) {
            console.log(data);
            var d = JSON.parse(data);
            if (d.status == "success") {
                swal("Event Updated Successfully", ": )", "success")    
                .then((value)=>{
                    console.log("close");
                    window.location.assign("manage_events.html");
                })                            
            } else {
                swal(d.result, ": )", "error")
                .then((value)=>{
                    console.log("close");
                    window.location.assign("manage_events.html");
                })               
            }            
        },
        error: function (data) {
            alert("Error");
        }
    });
});