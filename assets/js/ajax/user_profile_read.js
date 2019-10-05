$(document).ready(function(){
            $("#ca_button1").hide();
            var q = localStorage.getItem("token");
            $("#ca_button1").on('click', function(){ 
                
                window.location = './ca/index.html';
                });
            if(q)
            {                               
                //var id=0;
                $.ajax({
                url:'../apis/user/auth/profile.php',
                beforeSend: function(request){
                    request.setRequestHeader('Authorization', 'Bearer ' + q);
                },
                type: 'get',
                    success:function(response)
                    {
                        console.log(response);
                        response = JSON.parse(response);
                        if(response.status=="success")
                        {
                            var id = response.result['basicInfo']['inno_id'];
                            var name = response.result['basicInfo']['name'];
                            var email = response.result['basicInfo']['email'];
                            var college = response.result['basicInfo']['college'];
                            var ca_id = response.result['basicInfo']['ca_id'];
                            if(ca_id != 0)
                                $("#ca_button1").show();
                            var qr_path = "../assets/images/qrcodes/"+id+".png";
                            document.getElementById("participant_id").innerHTML="Inno ID : "+id;
                            document.getElementById("participant_name").innerHTML="Name : "+name;
                            document.getElementById("participant_email").innerHTML="Email : "+email;
                            document.getElementById("participant_college").innerHTML="College : "+college;
                            document.getElementById("qr_image").src =qr_path;
                            console.log(response.result['regEvents'])
                            regevents = response.result['regEvents']
                            if(regevents.length > 0)
                            {
                                var num_of_events = regevents.length; 
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
                                            var image_path = regevents[j]['image_path'];
                                            var event_name = regevents[j]['title']
                                            var eid = regevents[j]['eid']
                                            var link = "./event-details.html?eid="+eid;
                                            temp = temp+"<div class='col-lg-3 col-md-6'><div class='hotel'><div class='hotel-img'><img src=../"+image_path+" alt='"+event_name+"' class='img-fluid'></div><h3><a href="+link+">"+event_name+"</a></h3></div></div>"
                                            //temp = temp+"<div class='col-lg-3 col-md-6'>                  <div class='hotel'><div class='hotel-img'><img src='../"+image_path+"' alt='"+event_name+"' class='img-fluid'></div><h3><a href="+link+">"+event_name+"</a></h3></div></div>"

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
                        if(response.status=="failure")
                        {
                            swal("You have not registered.", ": [", "warning")    
                            .then((value)=>{
                                window.location="./login.html";
                            }) 
                            
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


