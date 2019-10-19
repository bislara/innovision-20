function uncheckFunc(inno_id)
{
    //console.log("here");
     $.ajax({
            type: "GET",
            beforeSend: function(request){
                request.setRequestHeader('Authorization', 'Bearer ' + localStorage.cms_token);
            },
            url: "../../../apis/admin/events/coordinator/uncheckEvent.php?q=" + localStorage.eid+"&i="+inno_id,
            success: function (data) {
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
                alert(data);
            }
        });
}

$(document).ready(function () {
            if(localStorage.eid == 105)
                document.getElementById("checkedin-table").style.display = "none";
            else
                document.getElementById("special-checkedin-table").style.display = "none";
    $.ajax({
        type: "GET",
        beforeSend: function(request){
            request.setRequestHeader('Authorization', 'Bearer ' + localStorage.cms_token);
        },
        url: "../../../apis/admin/events/coordinator/checkedInList.php?q=" + localStorage.eid,
        success: function (data) {
            //console.log(data);
            data=JSON.parse(data);
            //console.log(data);
            if(data.status==="failure")
                window.location.assign("index.html");
            data=data.result;

            if(localStorage.eid != 105)
            {
                var temp = '';
                for (var i = 0; i < data.length; i++) {

                    temp = temp + '<tr><td>' + (i + 1) + '</td><td>' + data[i].inno_id + '</td><td>' + data[i].name + '</td><td>' + data[i].phone + '</td><td>' + data[i].email + '</td><td>' + data[i].college + '</td><td>'+'<center><button class="btn btn-primary" onclick="uncheckFunc('+data[i].inno_id +')">Uncheck</button></center>' +'</td></tr>';
                }
                $("#cil").append(temp);
            }
            else
            {
                var temp = '';
                for (var i = 0; i < data.length; i++) {
                    var details = JSON.parse(data[i].details);
                            
                    temp = temp + '<tr><td>' + (i + 1) + '</td><td>' + data[i].inno_id + '</td><td>' + data[i].name + '</td><td>' + data[i].phone + '</td><td>' + data[i].email + '</td><td>' + data[i].college + '</td><td>'+details["grad_year"]+'</td><td>'+details["backlogs"] +'</td><td><a target="_blank" href="'+details["cvLink"] +'">Link to CV</a></td><td>'+details["cgpa"]+'</td><td>'+'<center><button class="btn btn-primary" onclick="uncheckFunc('+data[i].inno_id +')">Uncheck</button></center>' +'</td></tr>';
                }
                $("#cil-special").append(temp);
            }
        },
        error: function (data) {
            console.log(data);
        }
    });
});