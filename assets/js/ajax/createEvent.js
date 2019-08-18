// Event Create Handler
$(document).on("click", "#newEvent", function() {    
    $("#create_modal").modal("show");    
});

$(document).on("click", "#createEvent", function () {
    //alert("Hii");
    var title = $("#create_modal #title").val().toString();
    var desc = $("#create_modal #desc").val().toString();
    var rules = $("#create_modal #rules").val().toString();
    var jc = $("#create_modal #jc").val().toString();
    var dat = $("#create_modal #date").val().toString();
    var time = $("#create_modal #time").val().toString();
    var dat1 = $("#create_modal #date1").val().toString();
    var time1 = $("#create_modal #time1").val().toString();
    var venue = $("#create_modal #venue").val().toString();
    var category = $("#create_modal #category").val().toString();
    //var max_par = $("#max_participants").val().toString();
    var full_name1 = $("#create_modal #full_name_1").val().toString();
    var cont1 = $("#create_modal #contact_1").val().toString();
    var full_name2 = $("#create_modal #full_name_2").val().toString();
    var cont2 = $("#create_modal #contact_2").val().toString();
    var imge = $("#create_modal #fileToUpload").prop("files")[0];
    var loginId = $("#create_modal #LoginId").val().toString();
    var loginPassword = $("#create_modal #loginPassword").val().toString();


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
    formObj.append("loginId",loginId);
    formObj.append("loginPassword",loginPassword);
    for (var key of formObj.entries()) {
        console.log(key[0] + ', ' + key[1]);
    }
    $.ajax({
        type: "POST",
        beforeSend: function(request){
            request.setRequestHeader('Authorization', 'Bearer ' + localStorage.cms_token);
        },
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