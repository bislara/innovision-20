// Event Create Handler
$(document).on("click", "#newEvent", function() {    
    $("#create_modal").modal("show");    
});

$(document).on("click", "#createEvent", function () {
    const myForm = document.getElementById('createEventForm');
    var formObj = new FormData(myForm);
    formObj.append("fileToUpload",$("#create_modal #fileToUpload").prop("files")[0]);
    for (var key of formObj.entries()) {
        console.log(key[0] + ', ' + key[1]);
    }
    $.ajax({
        type: "POST",
        beforeSend: function(request){
            request.setRequestHeader('Authorization', 'Bearer ' + localStorage.cms_token);
        },
        url: "../../../apis/admin/events/admin/createEvent.php",
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