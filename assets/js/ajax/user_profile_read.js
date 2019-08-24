$(document).ready(function(){
            var q = localStorage.getItem("token");
            if(q)
            {                
                //var id=0;
                $.ajax({
                url:'../apis/user/auth/profile/profile.php',
                data: "q="+q,
                type: 'get',
                    success:function(response)
                    {
                        response = JSON.parse(response);
                        if(response.status=="success")
                        {
                            var id = response.result[0];
                            var name = response.result[1];
                            var email = response.result[4];
                            var college = response.result[6];
                            var qr_path = "../assets/images/qrcodes/"+id+".png";
                            document.getElementById("participant_id").innerHTML="Inno ID : "+id;
                            document.getElementById("participant_name").innerHTML="Name : "+name;
                            document.getElementById("participant_email").innerHTML="Email : "+email;
                            document.getElementById("participant_college").innerHTML="College : "+college;
                            document.getElementById("qr_image").src =qr_path;
                             $.ajax({
                                url:'../apis/user/auth/profile/registeredEventDetails.php',
                                data: "q="+id,
                                type: 'get',
                                    success:function(response1)
                                    {
                                        response1 = JSON.parse(response1);
                                        if(response1.status=="success")
                                        {
                                            var num_of_events = response1.result.length; 
                                            if(num_of_events == 0)
                                                 $( "#profile_events" ).append("<h2 style='color:white;'><center>You have not registered for any event</center></h2>")
                                            
                                            for(var i=0; i<num_of_events; i=i+4)
                                            {
                                                var j=i;
                                                var temp="";
                                                for(var j=i; j<i+4; j=j+1)
                                                {
                                                    if(j>=num_of_events)
                                                        break;
                                                    else
                                                    {
                                                        var image_path = response1.result[j][5]
                                                        var event_name = response1.result[j][1]
                                                        var eid = response1.result[j][0]
                                                        var link = "./event-details.html?eid="+eid;
                                                        temp = temp+"<div class='col-lg-3 col-md-6'>                  <div class='hotel'><div class='hotel-img'><img src='"+image_path+"' alt='"+event_name+"' class='img-fluid'></div><h3><a href="+link+">"+event_name+"</a></h3></div></div>"
                                                        
                                                    }
                                                }
                                                $( "#profile_events" ).append("<div class='row' style='text-align: center;'>"+temp+"</div><br>")
                                            }
                                        }
                                        else
                                        {
                                                $( "#profile_events" ).append("<div class='row' style='text-align: center;'><h2 style='color:white;'><center>You have not Registered for any event</center></h2></div>")
                                            
                                        }             
                                    }
                                });
                        }
                        if(response.status=="failure")
                        {
                            swal("You have not registered.", ": [", "warning");
                            window.location="./login.html"
                        }             
                    }
                });
               
            }
            else
            {
                swal("You have not registered.", ": [", "warning");
                window.location="./login.html"
            }
        });