var url = location.href;
var inno_id = url.split("?")[1].split("=")[1];

$(document).ready(function () {
    if (inno_id == null || inno_id == "" || !inno_id) {
        alert("Problem in Unchecking!");
    }
    else
    {
        $.ajax({
            type: "GET",
            beforeSend: function(request){
                request.setRequestHeader('Authorization', 'Bearer ' + localStorage.cms_token);
            },
            url: "../../../apis/admin/events/coordinator/uncheckEvent.php?q=" + localStorage.eid+"&i="+inno_id,
            success: function (data) {
                //console.log(data);
                data=JSON.parse(data);
                console.log(data);
                if(data.status==="failure"){
                    alert(data.result);
                    window.location.assign("index.html");                
                }
                else
                    window.location.assign("admin_panel.html");
            },
            error: function (data) {
                console.log(data);
                alert(data);
            }
        });
    }
});