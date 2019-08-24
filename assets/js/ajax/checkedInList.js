$(document).ready(function () {
    $.ajax({
        type: "GET",
        beforeSend: function(request){
            request.setRequestHeader('Authorization', 'Bearer ' + localStorage.cms_token);
        },
        url: "../../../apis/admin/events/coordinator/checkedInList.php?q=" + localStorage.eid,
        success: function (data) {
            //console.log(data);
            data=JSON.parse(data);
            console.log(data);
            if(data.status==="failure")
                window.location.assign("index.html");
            data=data.result;
            var temp = '';
            for (var i = 0; i < data.length; i++) {
                temp = temp + '<tr><td>' + (i + 1) + '</td><td>' + data[i].inno_id + '</td><td>' + data[i].name + '</td><td>' + data[i].phone + '</td><td>' + data[i].email + '</td><td>' + data[i].college + '</td></tr>';
            }
            $("#cil").append(temp);
        },
        error: function (data) {
            console.log(data);
        }
    });
});