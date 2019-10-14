
function populate(data_arr) {
  var str;
  var temp = '';
  for (var i = 0; i < data_arr.length; i++) {
      str = "";
      if (data_arr[i].checked_in == 0) str = '<td class="approval_checkbox"> <input class="checkbox" type="checkbox"> </td>';
      else str = '<td class="approval_checkbox"> <input class="checkbox" type="checkbox" checked> </td>';
      temp = temp + '<tr><td style="display:none" id="inno_id">' + data_arr[i].inno_id + '</td><td>' + (i + 1) + '</td ><td>' + data_arr[i].inno_id + '</td><td>' + data_arr[i].name + '</td><td>' + data_arr[i].gender + '</td><td>' + data_arr[i].phone + '</td><td>' + data_arr[i].email + '</td><td>' + data_arr[i].college + '</td><td>' + data_arr[i].paid + '</td>' + str + '</tr>';
  }
  $("tbody").html(temp);
}
$(document).on("click", "#searchBtn", function(){
  var inp=$("#inputId").val();
  if(inp==="") 
    inp=0;
  $.ajax({
    type: "GET",
    beforeSend: function(request){
      request.setRequestHeader('Authorization', 'Bearer ' + localStorage.admin_token);
    },
    url: "../../apis/admin/participant/displayParticipantsList.php?q="+inp,
    success: function (data) {
        console.log(data);
        var data_obj = JSON.parse(data);
        if(data_obj.status == "success")
        {
          populate(data_obj.result);
        }
      },
    error: function (data) {
      console.log(data);
    }
  });
});