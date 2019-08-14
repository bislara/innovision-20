$(document).on("click", ".submit", function(){
	var res = [];
	var id, status;
	var arr = $("tbody").find("tr");
	for(var i = 0; i< arr.length ; i++)
	{
		id = arr[i].children("#ca_id").html();
		if(arr[i].children(".approval_checkbox").children(".checkbox").ischecked())
			status = 1;
		else
			status = 0;
		arr.push({"ca_id" : id , "status" : status});
	}
	$.ajax(){
		type: "POST",
		url : "", 
		data : {
			token : localStorage.ca_admin_token,
			obj_data : JSON.stringify(arr)
		},
		success: function(data){
			var resp = JSON.parse(data);
			console.log(resp.message);
		},
		error : function(data){
			console.log(data);
		}
	};
});