var temp = '';
$(document).ready(function(){
  $.ajax({
    type: "POST",
    url: "../apis/panels/CASelection/displayResponses.php",
    data: {
      token : localStorage.ca_token
    },
    success: function (data) {
        var data_obj = JSON.parse(data);
        // console.log(data);
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