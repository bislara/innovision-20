function checkInFun(inno_id)
{
    //console.log("here");
    $.ajax({
            type: "GET",
            beforeSend: function(request){
                request.setRequestHeader('Authorization', 'Bearer ' + localStorage.cms_token);
            },
            url: "../../../apis/admin/events/coordinator/checkInEvent.php?q=" + localStorage.eid+"&i="+inno_id,
            success: function (data) {
                //console.log(data);
                data=JSON.parse(data);
                if(data.status==="failure"){
                    alert(data.result);
                    //window.location.assign("index.html");                
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
/*
function uncheckFun(inno_id)
{
    console.log("here");
     $.ajax({
            type: "GET",
            beforeSend: function(request){
                request.setRequestHeader('Authorization', 'Bearer ' + localStorage.cms_token);
            },
            url: "../../../apis/admin/events/coordinator/uncheckEvent.php?q=" + localStorage.eid+"&i="+inno_id,
            success: function (data) {
                //console.log(data);
                data=JSON.parse(data);
                //console.log(data);
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
}*/
$(document).ready(function () {
    $.ajax({
        type: "GET",
        beforeSend: function(request){
            request.setRequestHeader('Authorization', 'Bearer ' + localStorage.cms_token);
        },
        url: "../../../apis/admin/events/coordinator/displayParticipants.php?q=" + localStorage.eid,
        success: function (data) {
            //console.log(data);
            data=JSON.parse(data);
            //console.log(data);
            if(data.status==="failure"){
                alert("Invalid Credentials");
                window.location.assign("index.html");                
            }

            if(localStorage.eid == 105)
                document.getElementById("event-registered").style.display = "none";
            else
                document.getElementById("special-event-registered").style.display = "none";

            data=data.result;
            var temp = '';
            if(data.status!=='empty'){
                //console.log(data);
                if(localStorage.eid == 105)
                {
                    var temp = '';
                    for (var i = 0; i < data.length; i++) 
                    {
                        if(data[i].checkInStatus==0)
                        {
                            var details = JSON.parse(data[i].details);
                            
                            temp = temp + '<tr><td>' + (i + 1) + '</td><td>' + data[i].inno_id + '</td><td>' + data[i].name + '</td><td>' + data[i].phone + '</td><td>' + data[i].email + '</td><td>' + data[i].college +'</td><td>'+details["grad_year"]+'</td><td>'+details["backlogs"] +'</td><td><a target="_blank" href="'+details["cvLink"] +'">Link to CV</a></td><td>'+details["cgpa"]+'</td><td>'+'<center><button class="btn btn-primary" onclick="checkInFun('+data[i].inno_id +')">Check In</button></center>' +'</td></tr>';
                        }
                    }
                    //console.log(temp);
                    $("#dp-special").append(temp); 
                }
                else
                {
                    for (var i = 0; i < data.length; i++) 
                    {
                        if(data[i].checkInStatus==0)
                        {
                            temp = temp + '<tr><td>' + (i + 1) + '</td><td>' + data[i].inno_id + '</td><td>' + data[i].name + '</td><td>' + data[i].phone + '</td><td>' + data[i].email + '</td><td>' + data[i].college + '</td><td>' + data[i].paid + '</td><td>'+'<center><button class="btn btn-primary" onclick="checkInFun('+data[i].inno_id +')">Check In</button></center>' +'</td></tr>';
                        }
                        /*else
                        {
                        temp = temp + '<tr><td>' + (i + 1) + '</td><td>' + data[i].inno_id + '</td><td>' + data[i].name + '</td><td>' + data[i].phone + '</td><td>' + data[i].email + '</td><td>' + data[i].college + '</td><td>'+'<center><button class="btn btn-primary" onclick="uncheckFun('+data[i].inno_id +')">Uncheck</button></center>' +'</td></tr>';
                        }*/
                    }
                //console.log(temp);
                    $("#dp").append(temp);
                }
                  
            }   
            else{
                alert(data.result);
            }
                
            
            
        },
        error: function (data) {
            console.log(data);
        }
    });
});

