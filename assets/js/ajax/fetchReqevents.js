$(document).ready(function(){
  $.ajax({
    type: "POST",
    url: "../../apis/admin/requirements/displayResponses.php",
    beforeSend: function(request){
            request.setRequestHeader('Authorization', 'Bearer ' + localStorage.cms_token);
    },
    success: function (data) {
        // console.log(data);
        var data_obj = JSON.parse(data);
        // console.log(data_obj);
        if(data_obj.status == "success")
        {
          console.log(data_obj.result);
          var data_arr = data_obj.result;
          var temp=0;
          for (var i = 0; i < data_arr.length; i++) {
                    // temp = temp + '<tr><td style="display:none">' + data_arr[i].ca_applicant_id + '</td><td>' + (i + 1) + '</td ><td>'+ data_arr[i].q1 +'</td><td>' + data_arr[i].q2 + '</td><td>' + data_arr[i].q3 + '</td><td>' + data_arr[i].q4 + '</td><td align="center"> ' + data_arr[i].selected + ' </td><td align="center"><a href="ca_individual.html?ca_id='+ data_arr[i].ca_applicant_id +'"> <button type="button" class="btn btn-info" > Show More </button></a> </td></tr> ';
					temp = temp + '<tr><td>'  +(i+1)+ '</td><td>' + data_arr[i].title + '</td><td>'+ data_arr[i].eid +'</td><td align="center"><a href="editReq.html?req_id='+ data_arr[i].eid +'&name='+data_arr[i].title+'"> <button type="button" class="btn btn-info" > Edit Requirements </button></a> </td></tr> ';

              }
          $('tbody').append(temp);

        }
      },
    error: function (data) {
      console.log(data);
    }
  });
});