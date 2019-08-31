$(document).ready(function () {
	$.ajax({
		type: "GET",
		url: "../apis/admin/events/admin/fetchAllEvents.php",
		success: function (data) {
			var dataArray = JSON.parse(data);
			if (dataArray["status"] == "success") {
				var eventArray = dataArray["result"];
				
				var event_flagships = [];
				var event_events = [];
				var event_workshops = [];
				var event_exhibitions = [];
				var event_cultural = [];
				var event_paidworkshops = [];
				for (var i = 0; i < eventArray.length; i++) {

					if (eventArray[i]["category"] == "flagships") {
						event_flagships.push(eventArray[i]);
					} else if (eventArray[i]["category"] == "events") {
						event_events.push(eventArray[i]);
					} else if (eventArray[i]["category"] == "workshops") {
						event_workshops.push(eventArray[i]);
					} else if (eventArray[i]["category"] == "exhibitions") {
						event_exhibitions.push(eventArray[i]);
					} else if (eventArray[i]["category"] == "cultural") {
						event_cultural.push(eventArray[i]);
					} else if (eventArray[i]["category"] == "paidworkshops") {
						event_paidworkshops.push(eventArray[i]);
					}
				}


				var event_day1 = [];
				var event_day2 = [];
				var event_day3 = [];
				
				for (var i = 0; i < eventArray.length; i++) {

				 if(eventArray[i]["date1"]!="")
				 {
					if (eventArray[i]["date1"][0]-eventArray[i]["date"][0]>1 || eventArray[i]["date1"][1]-eventArray[i]["date"][1]>1) 
					{
						event_day3.push(eventArray[i]);
						event_day2.push(eventArray[i]);
						event_day1.push(eventArray[i]);
					}

					else{

					if (eventArray[i]["date"][0] == "2" || eventArray[i]["date"][1] == "2") {

						event_day1.push(eventArray[i]);
					}
					
					else if (eventArray[i]["date"][0] == "3" || eventArray[i]["date"][1] == "3") {
						event_day2.push(eventArray[i]);
					}


					else if (eventArray[i]["date"][0] == "4" || eventArray[i]["date"][1] == "4") {
						event_day3.push(eventArray[i]);
					}

					if (eventArray[i]["date1"][0] == "3" || eventArray[i]["date1"][1] == "3") {
						event_day2.push(eventArray[i]);
					}

					else if (eventArray[i]["date1"][0] == "2" || eventArray[i]["date1"][1] == "2") {
						event_day1.push(eventArray[i]);
					}

					else if (eventArray[i]["date1"][0] == "4" || eventArray[i]["date1"][1] == "4") {
						event_day3.push(eventArray[i]);
					}

					}
				 }
				 else
				 {
					if (eventArray[i]["date"][0] == "2" || eventArray[i]["date"][1] == "2") {

						event_day1.push(eventArray[i]);
					}
					
					else if (eventArray[i]["date"][0] == "3" || eventArray[i]["date"][1] == "3") {
						event_day2.push(eventArray[i]);
					}


					else if (eventArray[i]["date"][0] == "4" || eventArray[i]["date"][1] == "4") {
						event_day3.push(eventArray[i]);
					}				 	
				 }
				}

				// console.log(event_day3);
				// console.log(event_day2);
				// console.log(event_day1);

				function sortTimes(a,b) {
					// console.log(a.time.split(':')[0]);
				        const aParts = getNumericParts(a.time);
				        const bParts = getNumericParts(b.time);

				        // Sorts by hour then minute
				        return aParts[0] - bParts[0] || aParts[1] - bParts[1];
				    };

				function getNumericParts(time) {
			
				        return time.split(':');
				    };
				

				event_day1.sort(sortTimes);
				event_day2.sort(sortTimes);
				event_day3.sort(sortTimes);

				// console.log(event_day3);
				// console.log(event_day2);
				// console.log(event_day1);

				//day 1 events
				if (event_day1.length==0) 
				{
					var e='<div class="row schedule-item"><div class="col-md-12"><h4>No events on Day 1</h4></div></div>';
					$('day-1').html(e);
				}
				else
				{

					var e='';
					for (var i = 0; i < event_day1.length ; i++) {
						// console.log(event_day1[i]['eid']);
						if (event_day1[i]['time'].split(':')[0]<12) {
							e= e+ '<a href="event-details.html?eid='+event_day1[i]['eid']+'"><div class="row schedule-item"><div class="col-md-2"><time>' + event_day1[i]['time'] + ' AM</time></div><div class="col-md-10"><div class="speaker"><img src="'+ event_day1[i]['image_path'] +'" alt="'+ event_day1[i]['title'] +' "></div><h4>' + event_day1[i]['title'] +'</h4><p>Venue : ' +event_day1[i]['venue'] + '</p></div></div></a>'
						}
						else if (event_day1[i]['time'].split(':')[0]=12) {
							e= e+ '<a href="event-details.html?eid='+event_day1[i]['eid']+'"><div class="row schedule-item"><div class="col-md-2"><time>' + event_day1[i]['time'] + ' PM</time></div><div class="col-md-10"><div class="speaker"><img src="'+ event_day1[i]['image_path'] +'" alt="'+ event_day1[i]['title'] +' "></div><h4>' + event_day1[i]['title'] +'</h4><p>Venue : ' +event_day1[i]['venue'] + '</p></div></div></a>'
						}
						else
						{
							e= e+ '<a href="event-details.html?eid='+event_day1[i]['eid']+'"><div class="row schedule-item"><div class="col-md-2"><time>' + (event_day1[i]['time'].split(':')[0]-12) + ':' + event_day1[i]['time'].split(':')[1] + ' PM</time></div><div class="col-md-10"><div class="speaker"><img src="'+ event_day1[i]['image_path'] +'" alt="'+ event_day1[i]['title'] +' "></div><h4>' + event_day1[i]['title'] +'</h4><p>Venue : ' +event_day1[i]['venue'] + '</p></div></div></a>'
						}
					}
					$('#day-1').html(e);

				}

				//day 2 events
				if (event_day2.length==0) 
				{
					var e='<div class="row schedule-item"><div class="col-md-12"><h4>No events on Day 2</h4></div></div>';
					$('#day-2').html(e);
				}
				else
				{

					var e='';
					for (var i = 0; i < event_day2.length ; i++) {
						// console.log(event_day1[i]['eid']);
						if (event_day2[i]['time'].split(':')[0]<12) {
 							e= e+ '<a href="event-details.html?eid='+event_day2[i]['eid']+'"><div class="row schedule-item"><div class="col-md-2"><time>' + event_day2[i]['time'] + ' AM</time></div><div class="col-md-10"><div class="speaker"><img src="'+ event_day2[i]['image_path'] +'" alt="'+ event_day2[i]['title'] +' "></div><h4>' + event_day2[i]['title'] +'</h4><p>Venue : ' +event_day2[i]['venue'] + '</p></div></div></a>'
						}
						else if (event_day2[i]['time'].split(':')[0]=12) {
 							e= e+ '<a href="event-details.html?eid='+event_day2[i]['eid']+'"><div class="row schedule-item"><div class="col-md-2"><time>' + event_day2[i]['time'] + ' PM</time></div><div class="col-md-10"><div class="speaker"><img src="'+ event_day2[i]['image_path'] +'" alt="'+ event_day2[i]['title'] +' "></div><h4>' + event_day2[i]['title'] +'</h4><p>Venue : ' +event_day2[i]['venue'] + '</p></div></div></a>'
						}					
						else
						{
 							e= e+ '<a href="event-details.html?eid='+event_day2[i]['eid']+'"><div class="row schedule-item"><div class="col-md-2"><time>' + (event_day2[i]['time'].split(':')[0]-12) + ':' + event_day2[i]['time'].split(':')[1]  + ' PM</time></div><div class="col-md-10"><div class="speaker"><img src="'+ event_day2[i]['image_path'] +'" alt="'+ event_day2[i]['title'] +' "></div><h4>' + event_day2[i]['title'] +'</h4><p>Venue : ' +event_day2[i]['venue'] + '</p></div></div></a>'
						}
 						
					}
					$('#day-2').html(e);

				}

				//day 3 events
				if (event_day3.length==0) 
				{
					var e='<div class="row schedule-item"><div class="col-md-12"><h4>No events on Day 3</h4></div></div>';
					$('#day-3').html(e);
				}
				else
				{

					var e='';
					for (var i = 0; i < event_day3.length ; i++) {
						// console.log(event_day1[i]['eid']);
						if (event_day3[i]['time'].split(':')[0]<12) {
							e= e+ '<a href="event-details.html?eid='+event_day3[i]['eid']+'"><div class="row schedule-item"><div class="col-md-2"><time>' + event_day3[i]['time'] + ' AM</time></div><div class="col-md-10"><div class="speaker"><img src="'+ event_day3[i]['image_path'] +'" alt="'+ event_day3[i]['title'] +' "></div><h4>' + event_day3[i]['title'] +'</h4><p>Venue : ' +event_day3[i]['venue'] + '</p></div></div></a>'
						}
						else if (event_day3[i]['time'].split(':')[0]=12) {
							e= e+ '<a href="event-details.html?eid='+event_day3[i]['eid']+'"><div class="row schedule-item"><div class="col-md-2"><time>' + event_day3[i]['time'] + ' PM</time></div><div class="col-md-10"><div class="speaker"><img src="'+ event_day3[i]['image_path'] +'" alt="'+ event_day3[i]['title'] +' "></div><h4>' + event_day3[i]['title'] +'</h4><p>Venue : ' +event_day3[i]['venue'] + '</p></div></div></a>'
						}
						else
						{
							e= e+ '<a href="event-details.html?eid='+event_day3[i]['eid']+'"><div class="row schedule-item"><div class="col-md-2"><time>' + (event_day3[i]['time'].split(':')[0]-12) + ':' + event_day3[i]['time'].split(':')[1] + ' PM</time></div><div class="col-md-10"><div class="speaker"><img src="'+ event_day3[i]['image_path'] +'" alt="'+ event_day3[i]['title'] +' "></div><h4>' + event_day3[i]['title'] +'</h4><p>Venue : ' +event_day3[i]['venue'] + '</p></div></div></a>'
						}

					}
					$('#day-3').html(e);

				}

				//paidworkshops
				if (event_paidworkshops.length == 0) {
					var str = "<p>No events to display.</p>";
					$("#paidworkshops").children("center").append(str);
					$('#paidworkshops').html(str);

				} else {
					if ((event_paidworkshops.length) % 3 == 0) {
						var index = 0;
						var str="";
						while (index < (event_paidworkshops.length) / 3) {
							str = str + '<div class="row">';
							str = str + '<div class="col-lg-4 col-md-6"><a href="../views/event-details.html?eid='+ event_paidworkshops[3 * index]["eid"] +'" value="' + event_paidworkshops[3 * index]["eid"] + '"><div class="speaker"><img src="' + event_paidworkshops[3 * index]["image_path"]+ '" alt=" Event ' + event_paidworkshops[3 * index]["eid"] + '" class="img-fluid"></div></a></div><div class="col-lg-4 col-md-6"><a href="../views/event-details.html?eid='+ event_paidworkshops[3 * index + 1]["eid"] +'" value="' + event_paidworkshops[3 * index + 1]["eid"] + '"><div class="speaker"><img src="' + event_paidworkshops[3 * index + 1]["image_path"] + '" alt=" Event ' + event_paidworkshops[3 * index + 1]["eid"] + '" class="img-fluid"></div></a></div><div class="col-lg-4 col-md-6"><a href="../views/event-details.html?eid='+ event_paidworkshops[3 * index + 2]["eid"] +'" value="' + event_paidworkshops[3 * index + 2]["eid"] + '"><div class="speaker"><img src="' + event_paidworkshops[3 * index + 2]["image_path"] + '" alt=" Event ' + event_paidworkshops[3 * index + 2]["eid"] + '" class="img-fluid"></div></a></div>';	
							str = str + '</div>'

							$("#paidworkshops").children("center").append(str);
							index = index + 1;
						}
					$('#paidworkshops').html(str);

					} else {
						var index = 0;
						var str="";
						while (index < (event_paidworkshops.length - (event_paidworkshops.length) % 3) / 3) {
							str = str + '<div class="row">';
							str = str + '<div class="col-lg-4 col-md-6"><a href="../views/event-details.html?eid='+ event_paidworkshops[3 * index]["eid"] +'" value="' + event_paidworkshops[3 * index]["eid"] + '"><div class="speaker"><img src="' + event_paidworkshops[3 * index]["image_path"]+ '" alt=" Event ' + event_paidworkshops[3 * index]["eid"] + '" class="img-fluid"></div></a></div><div class="col-lg-4 col-md-6"><a href="../views/event-details.html?eid='+ event_paidworkshops[3 * index + 1]["eid"] +'" value="' + event_paidworkshops[3 * index + 1]["eid"] + '"><div class="speaker"><img src="' + event_paidworkshops[3 * index + 1]["image_path"] + '" alt=" Event ' + event_paidworkshops[3 * index + 1]["eid"] + '" class="img-fluid"></div></a></div><div class="col-lg-4 col-md-6"><a href="../views/event-details.html?eid='+ event_paidworkshops[3 * index + 2]["eid"] +'" value="' + event_paidworkshops[3 * index + 2]["eid"] + '"><div class="speaker"><img src="' + event_paidworkshops[3 * index + 2]["image_path"] + '" alt=" Event ' + event_paidworkshops[3 * index + 2]["eid"] + '" class="img-fluid"></div></a></div>';	
							str = str + '</div>'

							$("#paidworkshops").children("center").append(str);
							index = index + 1;
						}
						if ((event_paidworkshops.length) % 3 == 1) {
							str = str + '<div class="row">';
							str = str + '<div class="col-lg-4 col-md-6 offset-md-4"><a href="../views/event-details.html?eid='+ event_paidworkshops[3 * index]["eid"] +'" value="' + event_paidworkshops[3 * index]["eid"] + '"><div class="speaker"><img src="' + event_paidworkshops[3 * index]["image_path"]+ '" alt=" Event ' + event_paidworkshops[3 * index]["eid"] + '" class="img-fluid"></div></a></div>';	
							str = str + '</div>'

						} else if ((event_paidworkshops.length) % 3 == 2) {
							str = str + '<div class="row">';
							str = str + '<div class="col-lg-4 col-md-6 offset-md-2"><a href="../views/event-details.html?eid='+ event_paidworkshops[3 * index]["eid"] +'" value="' + event_paidworkshops[3 * index]["eid"] + '"><div class="speaker"><img src="' + event_paidworkshops[3 * index]["image_path"]+ '" alt=" Event ' + event_paidworkshops[3 * index]["eid"] + '" class="img-fluid"></div></a></div><div class="col-lg-4 col-md-6"><a href="../views/event-details.html?eid='+ event_paidworkshops[3 * index + 1]["eid"] +'" value="' + event_paidworkshops[3 * index + 1]["eid"] + '"><div class="speaker"><img src="' + event_paidworkshops[3 * index + 1]["image_path"] + '" alt=" Event ' + event_paidworkshops[3 * index + 1]["eid"] + '" class="img-fluid"></div></a></div>';								str = str + '</div>'

						}
						$("#paidworkshops").children("center").append(str);
					$('#paidworkshops').html(str);

					}
				}
				//flagship
				//console.log(event_cultural.length);
				if (event_flagships.length == 0) {
					var str = "<p>No events to display.</p>";
					$("#flagship").children("center").append(str);
					$('#flagships').html(str);
				}
				 else {
					if ((event_flagships.length) % 3 == 0) {
						var index = 0;
						var str="";
						while (index < (event_flagships.length) / 3) {
							str = str + '<div class="row">';
							str = str + '<div class="col-lg-4 col-md-6"><a href="../views/event-details.html?eid='+ event_flagships[3 * index]["eid"] +'" value="' + event_flagships[3 * index]["eid"] + '"><div class="speaker"><img src="' + event_flagships[3 * index]["image_path"]+ '" alt=" Event ' + event_flagships[3 * index]["eid"] + '" class="img-fluid"></div></a></div><div class="col-lg-4 col-md-6"><a href="../views/event-details.html?eid='+ event_flagships[3 * index + 1]["eid"] +'" value="' + event_flagships[3 * index + 1]["eid"] + '"><div class="speaker"><img src="' + event_flagships[3 * index + 1]["image_path"] + '" alt=" Event ' + event_flagships[3 * index + 1]["eid"] + '" class="img-fluid"></div></a></div><div class="col-lg-4 col-md-6"><a href="../views/event-details.html?eid='+ event_flagships[3 * index + 2]["eid"] +'" value="' + event_flagships[3 * index + 2]["eid"] + '"><div class="speaker"><img src="' + event_flagships[3 * index + 2]["image_path"] + '" alt=" Event ' + event_flagships[3 * index + 2]["eid"] + '" class="img-fluid"></div></a></div>';	
							str = str + '</div>'

							$("#flagship").children("center").append(str);
							index = index + 1;
						}
						$('#flagships').html(str);
					} else {
						var index = 0;
						var str="";
						while (index < (event_flagships.length - (event_flagships.length) % 3) / 3) {
							str = str + '<div class="row">';
							str = str + '<div class="col-lg-4 col-md-6"><a href="../views/event-details.html?eid='+ event_flagships[3 * index]["eid"] +'" value="' + event_flagships[3 * index]["eid"] + '"><div class="speaker"><img src="' + event_flagships[3 * index]["image_path"]+ '" alt=" Event ' + event_flagships[3 * index]["eid"] + '" class="img-fluid"></div></a></div><div class="col-lg-4 col-md-6"><a href="../views/event-details.html?eid='+ event_flagships[3 * index + 1]["eid"] +'" value="' + event_flagships[3 * index + 1]["eid"] + '"><div class="speaker"><img src="' + event_flagships[3 * index + 1]["image_path"] + '" alt=" Event ' + event_flagships[3 * index + 1]["eid"] + '" class="img-fluid"></div></a></div><div class="col-lg-4 col-md-6"><a href="../views/event-details.html?eid='+ event_flagships[3 * index + 2]["eid"] +'" value="' + event_flagships[3 * index + 2]["eid"] + '"><div class="speaker"><img src="' + event_flagships[3 * index + 2]["image_path"] + '" alt=" Event ' + event_flagships[3 * index + 2]["eid"] + '" class="img-fluid"></div></a></div>';	
							str = str + '</div>'

							$("#flagship").children("center").append(str);
							index = index + 1;
						}
						if ((event_flagships.length) % 3 == 1) {
							str = str + '<div class="row">';
							str = str + '<div class="col-lg-4 col-md-6 offset-md-4"><a href="../views/event-details.html?eid='+ event_flagships[3 * index]["eid"] +'" value="' + event_flagships[3 * index]["eid"] + '"><div class="speaker"><img src="' + event_flagships[3 * index]["image_path"]+ '" alt=" Event ' + event_flagships[3 * index]["eid"] + '" class="img-fluid"></div></a></div>';	
							str = str + '</div>'

	
						} else if ((event_flagships.length) % 3 == 2) {
							str = str + '<div class="row">';
							str = str + '<div class="col-lg-4 col-md-6 offset-md-2"><a href="../views/event-details.html?eid='+ event_flagships[3 * index]["eid"] +'" value="' + event_flagships[3 * index]["eid"] + '"><div class="speaker"><img src="' + event_flagships[3 * index]["image_path"]+ '" alt=" Event ' + event_flagships[3 * index]["eid"] + '" class="img-fluid"></div></a></div><div class="col-lg-4 col-md-6"><a href="../views/event-details.html?eid='+ event_flagships[3 * index + 1]["eid"] +'" value="' + event_flagships[3 * index + 1]["eid"] + '"><div class="speaker"><img src="' + event_flagships[3 * index + 1]["image_path"] + '" alt=" Event ' + event_flagships[3 * index + 1]["eid"] + '" class="img-fluid"></div></a></div>';	
							str = str + '</div>'

						}
						$("#flagship").children("center").append(str);
						$('#flagships').html(str);
					}
				}
				//events
				if (event_events.length == 0) {
					var str = "<p>No events to display.</p>";
					$("#events").children("center").append(str);
						$('#events').html(str);
				} else {
					if ((event_events.length) % 3 == 0) {
						var index = 0;
						var str='';
						while (index < (event_events.length) / 3) {
							str = str + '<div class="row">';
							str = str + '<div class="col-lg-4 col-md-6"><a href="../views/event-details.html?eid='+ event_events[3 * index]["eid"] +'" value="' + event_events[3 * index]["eid"] + '"><div class="speaker"><img src="' + event_events[3 * index]["image_path"]+ '" alt=" Event ' + event_events[3 * index]["eid"] + '" class="img-fluid"></div></a></div><div class="col-lg-4 col-md-6"><a href="../views/event-details.html?eid='+ event_events[3 * index + 1]["eid"] +'" value="' + event_events[3 * index + 1]["eid"] + '"><div class="speaker"><img src="' + event_events[3 * index + 1]["image_path"] + '" alt=" Event ' + event_events[3 * index + 1]["eid"] + '" class="img-fluid"></div></a></div><div class="col-lg-4 col-md-6"><a href="../views/event-details.html?eid='+ event_events[3 * index + 2]["eid"] +'" value="' + event_events[3 * index + 2]["eid"] + '"><div class="speaker"><img src="' + event_events[3 * index + 2]["image_path"] + '" alt=" Event ' + event_events[3 * index + 2]["eid"] + '" class="img-fluid"></div></a></div>';	
							str = str + '</div>'

							$("#events").children("center").append(str);							 
							index = index + 1;
						}
						$('#events').html(str);
						

					} else {
						var index = 0;
						var str="";
						while (index < (event_events.length - (event_events.length) % 3) / 3) {
							str = str + '<div class="row">';
							str = str + '<div class="col-lg-4 col-md-6"><a href="../views/event-details.html?eid='+ event_events[3 * index]["eid"] +'" value="' + event_events[3 * index]["eid"] + '"><div class="speaker"><img src="' + event_events[3 * index]["image_path"]+ '" alt=" Event ' + event_events[3 * index]["eid"] + '" class="img-fluid"></div></a></div><div class="col-lg-4 col-md-6"><a href="../views/event-details.html?eid='+ event_events[3 * index + 1]["eid"] +'" value="' + event_events[3 * index + 1]["eid"] + '"><div class="speaker"><img src="' + event_events[3 * index + 1]["image_path"] + '" alt=" Event ' + event_events[3 * index + 1]["eid"] + '" class="img-fluid"></div></a></div><div class="col-lg-4 col-md-6"><a href="../views/event-details.html?eid='+ event_events[3 * index + 2]["eid"] +'" value="' + event_events[3 * index + 2]["eid"] + '"><div class="speaker"><img src="' + event_events[3 * index + 2]["image_path"] + '" alt=" Event ' + event_events[3 * index + 2]["eid"] + '" class="img-fluid"></div></a></div>';	
							str = str + '</div>'			
							index = index + 1;
							// console.log(str)
						}
						if ((event_events.length) % 3 == 1) {
							str = str + '<div class="row">';
							str = str + '<div class="col-lg-4 col-md-6 offset-md-4"><a href="../views/event-details.html?eid='+ event_events[3 * index]["eid"] +'" value="' + event_events[3 * index]["eid"] + '"><div class="speaker"><img src="' + event_events[3 * index]["image_path"]+ '" alt=" Event ' + event_events[3 * index]["eid"] + '" class="img-fluid"></div></a></div>';	
							str = str + '</div>'

						} else if ((event_events.length) % 3 == 2) {
							str = str + '<div class="row">';
							str = str + '<div class="col-lg-4 col-md-6 offset-md-2"><a href="../views/event-details.html?eid='+ event_events[3 * index]["eid"] +'" value="' + event_events[3 * index]["eid"] + '"><div class="speaker"><img src="' + event_events[3 * index]["image_path"]+ '" alt=" Event ' + event_events[3 * index]["eid"] + '" class="img-fluid"></div></a></div><div class="col-lg-4 col-md-6"><a href="../views/event-details.html?eid='+ event_events[3 * index + 1]["eid"] +'" value="' + event_events[3 * index + 1]["eid"] + '"><div class="speaker"><img src="' + event_events[3 * index + 1]["image_path"] + '" alt=" Event ' + event_events[3 * index + 1]["eid"] + '" class="img-fluid"></div></a></div>';	
							str = str + '</div>'

						}
						$("#events").children("center").append(str);
							$('#events').html(str);
					}
				}
				//workshops
				if (event_workshops.length == 0) {
					var str = "<p>No events to display.</p>";
					$("#workshops").children("center").append(str);
					$('#workshops').html(str);

				} else {
					if ((event_workshops.length) % 3 == 0) {
						var index = 0;
						var str= "";
						while (index < (event_workshops.length) / 3) {
							str = str + '<div class="row">';
							str = str + '<div class="col-lg-4 col-md-6"><a href="../views/event-details.html?eid='+ event_workshops[3 * index]["eid"] +'" value="' + event_workshops[3 * index]["eid"] + '"><div class="speaker"><img src="' + event_workshops[3 * index]["image_path"]+ '" alt=" Event ' + event_workshops[3 * index]["eid"] + '" class="img-fluid"></div></a></div><div class="col-lg-4 col-md-6"><a href="../views/event-details.html?eid='+ event_workshops[3 * index + 1]["eid"] +'" value="' + event_workshops[3 * index + 1]["eid"] + '"><div class="speaker"><img src="' + event_workshops[3 * index + 1]["image_path"] + '" alt=" Event ' + event_workshops[3 * index + 1]["eid"] + '" class="img-fluid"></div></a></div><div class="col-lg-4 col-md-6"><a href="../views/event-details.html?eid='+ event_workshops[3 * index + 2]["eid"] +'" value="' + event_workshops[3 * index + 2]["eid"] + '"><div class="speaker"><img src="' + event_workshops[3 * index + 2]["image_path"] + '" alt=" Event ' + event_workshops[3 * index + 2]["eid"] + '" class="img-fluid"></div></a></div>';	
							str = str + '</div>'			
							$("#workshops").children("center").append(str);
							index = index + 1;
						}
						$('#workshops').html(str);

					} else {
						var index = 0;
						var str="";
						while (index < (event_workshops.length - (event_workshops.length) % 3) / 3) {
							str = str + '<div class="row">';
							str = str + '<div class="col-lg-4 col-md-6"><a href="../views/event-details.html?eid='+ event_workshops[3 * index]["eid"] +'" value="' + event_workshops[3 * index]["eid"] + '"><div class="speaker"><img src="' + event_workshops[3 * index]["image_path"]+ '" alt=" Event ' + event_workshops[3 * index]["eid"] + '" class="img-fluid"></div></a></div><div class="col-lg-4 col-md-6"><a href="../views/event-details.html?eid='+ event_workshops[3 * index + 1]["eid"] +'" value="' + event_workshops[3 * index + 1]["eid"] + '"><div class="speaker"><img src="' + event_workshops[3 * index + 1]["image_path"] + '" alt=" Event ' + event_workshops[3 * index + 1]["eid"] + '" class="img-fluid"></div></a></div><div class="col-lg-4 col-md-6"><a href="../views/event-details.html?eid='+ event_workshops[3 * index + 2]["eid"] +'" value="' + event_workshops[3 * index + 2]["eid"] + '"><div class="speaker"><img src="' + event_workshops[3 * index + 2]["image_path"] + '" alt=" Event ' + event_workshops[3 * index + 2]["eid"] + '" class="img-fluid"></div></a></div>';	
							str = str + '</div>'			
							$("#workshops").children("center").append(str);
							index = index + 1;
						}
						if ((event_workshops.length) % 3 == 1) {
							str = str + '<div class="row">';
							str = str + '<div class="col-lg-4 col-md-6 offset-md-4"><a href="../views/event-details.html?eid='+ event_workshops[3 * index]["eid"] +'" value="' + event_workshops[3 * index]["eid"] + '"><div class="speaker"><img src="' + event_workshops[3 * index]["image_path"]+ '" alt=" Event ' + event_workshops[3 * index]["eid"] + '" class="img-fluid"></div></a></div>';	
							str = str + '</div>'

						} else if ((event_workshops.length) % 3 == 2) {
							str = str + '<div class="row">';
							str = str + '<div class="col-lg-4 col-md-6 offset-md-2"><a href="../views/event-details.html?eid='+ event_workshops[3 * index]["eid"] +'" value="' + event_workshops[3 * index]["eid"] + '"><div class="speaker"><img src="' + event_workshops[3 * index]["image_path"]+ '" alt=" Event ' + event_workshops[3 * index]["eid"] + '" class="img-fluid"></div></a></div><div class="col-lg-4 col-md-6"><a href="../views/event-details.html?eid='+ event_workshops[3 * index + 1]["eid"] +'" value="' + event_workshops[3 * index + 1]["eid"] + '"><div class="speaker"><img src="' + event_workshops[3 * index + 1]["image_path"] + '" alt=" Event ' + event_workshops[3 * index + 1]["eid"] + '" class="img-fluid"></div></a></div>';	
							str = str + '</div>'

						}
						$("#workshops").children("center").append(str);
						$('#workshops').html(str);

					}
				}
				//exhibitions
				if (event_exhibitions.length == 0) {
					var str = "<p>No events to display.</p>";
					$("#exhibitions").children("center").append(str);
					$('#exhibitions').html(str);

				} else {
					if ((event_exhibitions.length) % 3 == 0) {
						var index = 0;
						var str="";
						while (index < (event_exhibitions.length) / 3) {
							str = str + '<div class="row">';
							str = str + '<div class="col-lg-4 col-md-6"><a href="../views/event-details.html?eid='+ event_exhibitions[3 * index]["eid"] +'" value="' + event_exhibitions[3 * index]["eid"] + '"><div class="speaker"><img src="' + event_exhibitions[3 * index]["image_path"]+ '" alt=" Event ' + event_exhibitions[3 * index]["eid"] + '" class="img-fluid"></div></a></div><div class="col-lg-4 col-md-6"><a href="../views/event-details.html?eid='+ event_exhibitions[3 * index + 1]["eid"] +'" value="' + event_exhibitions[3 * index + 1]["eid"] + '"><div class="speaker"><img src="' + event_exhibitions[3 * index + 1]["image_path"] + '" alt=" Event ' + event_exhibitions[3 * index + 1]["eid"] + '" class="img-fluid"></div></a></div><div class="col-lg-4 col-md-6"><a href="../views/event-details.html?eid='+ event_exhibitions[3 * index + 2]["eid"] +'" value="' + event_exhibitions[3 * index + 2]["eid"] + '"><div class="speaker"><img src="' + event_exhibitions[3 * index + 2]["image_path"] + '" alt=" Event ' + event_exhibitions[3 * index + 2]["eid"] + '" class="img-fluid"></div></a></div>';	
							str = str + '</div>'			
							$("#exhibitions").children("center").append(str);
							index = index + 1;
						}
						$('#exhibitions').html(str);

					} else {
						var index = 0;
						var str="";
						while (index < (event_exhibitions.length - (event_exhibitions.length) % 3) / 3) {
							str = str + '<div class="row">';
							str = str + '<div class="col-lg-4 col-md-6"><a href="../views/event-details.html?eid='+ event_exhibitions[3 * index]["eid"] +'" value="' + event_exhibitions[3 * index]["eid"] + '"><div class="speaker"><img src="' + event_exhibitions[3 * index]["image_path"]+ '" alt=" Event ' + event_exhibitions[3 * index]["eid"] + '" class="img-fluid"></div></a></div><div class="col-lg-4 col-md-6"><a href="../views/event-details.html?eid='+ event_exhibitions[3 * index + 1]["eid"] +'" value="' + event_exhibitions[3 * index + 1]["eid"] + '"><div class="speaker"><img src="' + event_exhibitions[3 * index + 1]["image_path"] + '" alt=" Event ' + event_exhibitions[3 * index + 1]["eid"] + '" class="img-fluid"></div></a></div><div class="col-lg-4 col-md-6"><a href="../views/event-details.html?eid='+ event_exhibitions[3 * index + 2]["eid"] +'" value="' + event_exhibitions[3 * index + 2]["eid"] + '"><div class="speaker"><img src="' + event_exhibitions[3 * index + 2]["image_path"] + '" alt=" Event ' + event_exhibitions[3 * index + 2]["eid"] + '" class="img-fluid"></div></a></div>';	
							str = str + '</div>'			
							$("#exhibitions").children("center").append(str);
							index = index + 1;

						}
						if ((event_exhibitions.length) % 3 == 1) {
							str = str + '<div class="row">';
							str = str + '<div class="col-lg-4 col-md-6 offset-md-4"><a href="../views/event-details.html?eid='+ event_exhibitions[3 * index]["eid"] +'" value="' + event_exhibitions[3 * index]["eid"] + '"><div class="speaker"><img src="' + event_exhibitions[3 * index]["image_path"]+ '" alt=" Event ' + event_exhibitions[3 * index]["eid"] + '" class="img-fluid"></div></a></div>';	
							str = str + '</div>'			

						} else if ((event_exhibitions.length) % 3 == 2) {
							str = str + '<div class="row">';
							str = str + '<div class="col-lg-4 col-md-6 offset-md-2"><a href="../views/event-details.html?eid='+ event_exhibitions[3 * index]["eid"] +'" value="' + event_exhibitions[3 * index]["eid"] + '"><div class="speaker"><img src="' + event_exhibitions[3 * index]["image_path"]+ '" alt=" Event ' + event_exhibitions[3 * index]["eid"] + '" class="img-fluid"></div></a></div><div class="col-lg-4 col-md-6"><a href="../views/event-details.html?eid='+ event_exhibitions[3 * index + 1]["eid"] +'" value="' + event_exhibitions[3 * index + 1]["eid"] + '"><div class="speaker"><img src="' + event_exhibitions[3 * index + 1]["image_path"] + '" alt=" Event ' + event_exhibitions[3 * index + 1]["eid"] + '" class="img-fluid"></div></a></div>';	
							str = str + '</div>'			

						}
						$("#exhibitions").children("center").append(str);
						$('#exhibitions').html(str);

					}
				}
				//cultural
				if (event_cultural.length == 0) {
					var str = "<p>No events to display.</p>";
					$("#cultural").children("center").append(str);
					$('#cultural').html(str);

				} else {
					if ((event_cultural.length) % 3 == 0) {
						var index = 0;
						var str = "";
						while (index < (event_cultural.length) / 3) {
							str = str + '<div class="row">';
							str = str + '<div class="col-lg-4 col-md-6"><a href="../views/event-details.html?eid='+ event_cultural[3 * index]["eid"] +'" value="' + event_cultural[3 * index]["eid"] + '"><div class="speaker"><img src="' + event_cultural[3 * index]["image_path"]+ '" alt=" Event ' + event_cultural[3 * index]["eid"] + '" class="img-fluid"></div></a></div><div class="col-lg-4 col-md-6"><a href="../views/event-details.html?eid='+ event_cultural[3 * index + 1]["eid"] +'" value="' + event_cultural[3 * index + 1]["eid"] + '"><div class="speaker"><img src="' + event_cultural[3 * index + 1]["image_path"] + '" alt=" Event ' + event_cultural[3 * index + 1]["eid"] + '" class="img-fluid"></div></a></div><div class="col-lg-4 col-md-6"><a href="../views/event-details.html?eid='+ event_cultural[3 * index + 2]["eid"] +'" value="' + event_cultural[3 * index + 2]["eid"] + '"><div class="speaker"><img src="' + event_cultural[3 * index + 2]["image_path"] + '" alt=" Event ' + event_cultural[3 * index + 2]["eid"] + '" class="img-fluid"></div></a></div>';	
							str = str + '</div>'			

							$("#cultural").children("center").append(str);
							index = index + 1;
						}
						$('#cultural').html(str);

					} else {
						var index = 0;
						var str="";
						while (index < (event_cultural.length - (event_cultural.length) % 3) / 3) {
							str = str + '<div class="row">';
							str = str + '<div class="col-lg-4 col-md-6"><a href="../views/event-details.html?eid='+ event_cultural[3 * index]["eid"] +'" value="' + event_cultural[3 * index]["eid"] + '"><div class="speaker"><img src="' + event_cultural[3 * index]["image_path"]+ '" alt=" Event ' + event_cultural[3 * index]["eid"] + '" class="img-fluid"></div></a></div><div class="col-lg-4 col-md-6"><a href="../views/event-details.html?eid='+ event_cultural[3 * index + 1]["eid"] +'" value="' + event_cultural[3 * index + 1]["eid"] + '"><div class="speaker"><img src="' + event_cultural[3 * index + 1]["image_path"] + '" alt=" Event ' + event_cultural[3 * index + 1]["eid"] + '" class="img-fluid"></div></a></div><div class="col-lg-4 col-md-6"><a href="../views/event-details.html?eid='+ event_cultural[3 * index + 2]["eid"] +'" value="' + event_cultural[3 * index + 2]["eid"] + '"><div class="speaker"><img src="' + event_cultural[3 * index + 2]["image_path"] + '" alt=" Event ' + event_cultural[3 * index + 2]["eid"] + '" class="img-fluid"></div></a></div>';	
							str = str + '</div>'			

							$("#cultural").children("center").append(str);
							index = index + 1;
						}
						if ((event_cultural.length) % 3 == 1) {
							str = str + '<div class="row">';
							str = str + '<div class="col-lg-4 col-md-6 offset-md-4"><a href="../views/event-details.html?eid='+ event_cultural[3 * index]["eid"] +'" value="' + event_cultural[3 * index]["eid"] + '"><div class="speaker"><img src="' + event_cultural[3 * index]["image_path"]+ '" alt=" Event ' + event_cultural[3 * index]["eid"] + '" class="img-fluid"></div></a></div>';	
							str = str + '</div>'			

						} else if ((event_cultural.length) % 3 == 2) {
							str = str + '<div class="row">';
							str = str + '<div class="col-lg-4 col-md-6 offset-md-2"><a href="../views/event-details.html?eid='+ event_cultural[3 * index]["eid"] +'" value="' + event_cultural[3 * index]["eid"] + '"><div class="speaker"><img src="' + event_cultural[3 * index]["image_path"]+ '" alt=" Event ' + event_cultural[3 * index]["eid"] + '" class="img-fluid"></div></a></div><div class="col-lg-4 col-md-6"><a href="../views/event-details.html?eid='+ event_cultural[3 * index + 1]["eid"] +'" value="' + event_cultural[3 * index + 1]["eid"] + '"><div class="speaker"><img src="' + event_cultural[3 * index + 1]["image_path"] + '" alt=" Event ' + event_cultural[3 * index + 1]["eid"] + '" class="img-fluid"></div></a></div>';	
							str = str + '</div>'			

						}
						$("#cultural").children("center").append(str);
						$('#cultural').html(str);

					}
				}
			


			}
		}
	});
});