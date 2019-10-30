
function populate(data_arr) {
  var str;
  var temp = '';
  for (var i = 0; i < data_arr.length; i++) {
      str = "";
      let selectedIndex={
        "def":"",
        "cvr":"",
        "kms":"",
        "ssb":"",
        "mv":"",
        "gdb":"",
        "mss":"",
        "dba":"",
        "hb":"",
        "sd":"",
        "vs":""
      }
      if(data_arr[i].allotted_hostel)
        selectedIndex[data_arr[i].allotted_hostel]="selected";
      else
        selectedIndex["def"]="selected";

      let hostelDropdown='<select class="hostelName">'+
        '<option value="" selected='+selectedIndex["def"]+' disabled="disabled">Hostel</option>'+
        '<option '+selectedIndex["cvr"]+' value="cvr">CVR</option>'+
        '<option '+selectedIndex["kms"]+' value="kms">KMS</option>'+
        '<option '+selectedIndex["ssb"]+' value="ssb">SSB</option>'+
        '<option '+selectedIndex["mv"]+' value="mv">MV</option>'+
        '<option '+selectedIndex["gdb"]+' value="gdb">GDB</option>'+
        '<option '+selectedIndex["mss"]+' value="mss">MSS</option>'+
        '<option '+selectedIndex["dba"]+' value="dba">DBA</option>'+
        '<option '+selectedIndex["hb"]+' value="hb">HB</option>'+
        '<option '+selectedIndex["sd"]+' value="sd">SD</option>'+
        '<option '+selectedIndex["vs"]+' value="vs">VS</option>'+
      '<select>';
      if (data_arr[i].checked_in == 0) str = '<td class="approval_checkbox"> <input class="checkbox" type="checkbox"> </td>';
      else str = '<td class="approval_checkbox"> <input class="checkbox" type="checkbox" checked> </td>';
      temp = temp + '<tr><td style="display:none" id="inno_id">' + data_arr[i].inno_id + '</td><td>' + (i + 1) + '</td ><td>' + data_arr[i].inno_id + '</td><td>' + data_arr[i].name + '</td><td>' + data_arr[i].gender + '</td><td>' + data_arr[i].phone + '</td><td>' + data_arr[i].email + '</td><td>' + data_arr[i].college + '</td><td>' + data_arr[i].paid + '</td><td class="hostel">' + hostelDropdown + '</td>' + str + '</tr>';
  }
  $(".list").html(temp);
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
        // console.log(data);
        var data_obj = JSON.parse(data);
        if(data_obj.status == "success")
        {
        	$('#paidCount').html(data_obj.paid);
          populate(data_obj.result);
        }
      },
    error: function (data) {
      console.log(data);
    }
  });
});

$(document).ready(()=>{
  let accom_table='<h2>Allotted Hostels</h2><table class="col-sm-12" style="border: 2px solid black;">';
  $.ajax({
    type: "GET",
    beforeSend: function(request){
      request.setRequestHeader('Authorization', 'Bearer ' + localStorage.admin_token);
    },
    url: "../../apis/admin/participant/allottedHostelsList.php",
    success: function (data) {        
        var data = JSON.parse(data);
        console.log(data.result);
        var hostel_count=data.result;
        accom_table+='<thead>'
        for(let each in hostel_count)
          accom_table+='<td>'+each.toUpperCase()+'</td>';        
        accom_table+='</thead>';
        accom_table+='<tr>';
        for(let each in hostel_count)
          accom_table+='<td>'+hostel_count[each].toUpperCase()+'</td>';        
        accom_table+='</tr>';
        accom_table+='</table>';
        $('#hostelTable').html(accom_table);
      },
    error: function (data) {
      console.log(data);
    }
  });
})