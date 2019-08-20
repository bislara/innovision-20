$(document).ready(function(){
  $.ajax({
    type: "POST",
    url: "../../../apis/panels/CASelection/displayResponses.php",
    data: {
      token : localStorage.ca_token
    },
    success: function (data) {
        
        var data_obj = JSON.parse(data);
        console.log(data_obj);
        if(data_obj.status == "success")
        {
          console.log(data_obj.result);
        }
      },
    error: function (data) {
      console.log(data);
    }
  });
});