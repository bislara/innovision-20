$(document).ready(function () {
	$.ajax({
		type: "GET",
		url: "../apis/events/fetchAllEvents.php",
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
				//paidworkshops
				if (event_paidworkshops.length == 0) {
					var str = "<p>No events to display.</p>";
					$("#paidworkshops").children("center").append(str);
				} else {
					if ((event_paidworkshops.length) % 3 == 0) {
						var index = 0;
						while (index < (event_paidworkshops.length) / 3) {
							var str = '<a href="javascript:void(0)" value="' + event_paidworkshops[3 * index]["eid"] + '"><div class="card wow fadeInLeft hvr-grow-rotate-right"><img class="img-responsive" src="' + event_paidworkshops[3 * index]["image_path"].slice(4, ) + '"></div></a><a href="javascript:void(0)" value="' + event_paidworkshops[3 * index + 1]["eid"] + '"><div class="card wow fadeInUp hvr-grow"><img class="img-responsive" src="' + event_paidworkshops[3 * index + 1]["image_path"].slice(4, ) + '"></div></a><a href="javascript:void(0)" value="' + event_paidworkshops[3 * index + 2]["eid"] + '"><div class="card wow fadeInRight hvr-grow-rotate-left"><img class="img-responsive" src="' + event_paidworkshops[3 * index + 2]["image_path"].slice(4, ) + '"></div></a>';
							$("#paidworkshops").children("center").append(str);
							index = index + 1;
						}
					} else {
						var index = 0;
						while (index < (event_paidworkshops.length - (event_paidworkshops.length) % 3) / 3) {
							var str = '<a href="javascript:void(0)" value="' + event_paidworkshops[3 * index]["eid"] + '"><div class="card wow fadeInLeft hvr-grow-rotate-right"><img class="img-responsive" src="' + event_paidworkshops[3 * index]["image_path"].slice(4, ) + '"></div></a><a href="javascript:void(0)" value="' + event_paidworkshops[3 * index + 1]["eid"] + '"><div class="card wow fadeInUp hvr-grow"><img class="img-responsive" src="' + event_paidworkshops[3 * index + 1]["image_path"].slice(4, ) + '"></div></a><a href="javascript:void(0)" value="' + event_paidworkshops[3 * index + 2]["eid"] + '"><div class="card wow fadeInRight hvr-grow-rotate-left"><img class="img-responsive" src="' + event_paidworkshops[3 * index + 2]["image_path"].slice(4, ) + '"></div></a>';
							$("#paidworkshops").children("center").append(str);
							index = index + 1;
						}
						if ((event_paidworkshops.length) % 3 == 1) {
							var str2 = '<a href="javascript:void(0)" value="' + event_paidworkshops[3 * index]["eid"] + '"><div class="card wow fadeInLeft hvr-grow-rotate-right"><img class="img-responsive" src="' + event_paidworkshops[3 * index]["image_path"].slice(4, ) + '"></div></a>';
						} else if ((event_paidworkshops.length) % 3 == 2) {
							var str2 = '<a href="javascript:void(0)" value="' + event_paidworkshops[3 * index]["eid"] + '"><div class="card wow fadeInLeft hvr-grow-rotate-right"><img class="img-responsive" src="' + event_paidworkshops[3 * index]["image_path"].slice(4, ) + '"></div></a><a href="javascript:void(0)" value="' + event_paidworkshops[3 * index + 1]["eid"] + '"><div class="card wow fadeInUp hvr-grow"><img class="img-responsive" src="' + event_paidworkshops[3 * index + 1]["image_path"].slice(4, ) + '"></div></a>';
						}
						$("#paidworkshops").children("center").append(str2);
					}
				}
				//flagship
				//console.log(event_cultural.length);
				if (event_flagships.length == 0) {
					var str = "<p>No events to display.</p>";
					$("#flagship").children("center").append(str);
				} else {
					if ((event_flagships.length) % 3 == 0) {
						var index = 0;
						while (index < (event_flagships.length) / 3) {
							var str = '<a href="javascript:void(0)" value="' + event_flagships[3 * index]["eid"] + '"><div class="card wow fadeInLeft hvr-grow-rotate-right"><img class="img-responsive" src="' + event_flagships[3 * index]["image_path"].slice(4, ) + '"></div></a><a href="javascript:void(0)" value="' + event_flagships[3 * index + 1]["eid"] + '"><div class="card wow fadeInUp hvr-grow"><img class="img-responsive" src="' + event_flagships[3 * index + 1]["image_path"].slice(4, ) + '"></div></a><a href="javascript:void(0)" value="' + event_flagships[3 * index + 2]["eid"] + '"><div class="card wow fadeInRight hvr-grow-rotate-left"><img class="img-responsive" src="' + event_flagships[3 * index + 2]["image_path"].slice(4, ) + '"></div></a>';
							$("#flagship").children("center").append(str);
							index = index + 1;
						}
					} else {
						var index = 0;
						while (index < (event_flagships.length - (event_flagships.length) % 3) / 3) {
							var str = '<a href="javascript:void(0)" value="' + event_flagships[3 * index]["eid"] + '"><div class="card wow fadeInLeft hvr-grow-rotate-right"><img class="img-responsive" src="' + event_flagships[3 * index]["image_path"].slice(4, ) + '"></div></a><a href="javascript:void(0)" value="' + event_flagships[3 * index + 1]["eid"] + '"><div class="card wow fadeInUp hvr-grow"><img class="img-responsive" src="' + event_flagships[3 * index + 1]["image_path"].slice(4, ) + '"></div></a><a href="javascript:void(0)" value="' + event_flagships[3 * index + 2]["eid"] + '"><div class="card wow fadeInRight hvr-grow-rotate-left"><img class="img-responsive" src="' + event_flagships[3 * index + 2]["image_path"].slice(4, ) + '"></div></a>';
							$("#flagship").children("center").append(str);
							index = index + 1;
						}
						if ((event_flagships.length) % 3 == 1) {
							var str2 = '<a href="javascript:void(0)" value="' + event_flagships[3 * index]["eid"] + '"><div class="card wow fadeInLeft hvr-grow-rotate-right"><img class="img-responsive" src="' + event_flagships[3 * index]["image_path"].slice(4, ) + '"></div></a>';
						} else if ((event_flagships.length) % 3 == 2) {
							var str2 = '<a href="javascript:void(0)" value="' + event_flagships[3 * index]["eid"] + '"><div class="card wow fadeInLeft hvr-grow-rotate-right"><img class="img-responsive" src="' + event_flagships[3 * index]["image_path"].slice(4, ) + '"></div></a><a href="javascript:void(0)" value="' + event_flagships[3 * index + 1]["eid"] + '"><div class="card wow fadeInUp hvr-grow"><img class="img-responsive" src="' + event_flagships[3 * index + 1]["image_path"].slice(4, ) + '"></div></a>';
						}
						$("#flagship").children("center").append(str2);
					}
				}
				//events
				if (event_events.length == 0) {
					var str = "<p>No events to display.</p>";
					$("#events").children("center").append(str);
				} else {
					if ((event_events.length) % 3 == 0) {
						var index = 0;
						var str='';
						while (index < (event_events.length) / 3) {
							str = str + '<div class="row">';
							str = str + '<div class="col-lg-4 col-md-6"><a href="javascript:void(0)" value="' + event_events[3 * index]["eid"] + '"><div class="speaker"><img src="' + event_events[3 * index]["image_path"]+ '" alt=" Event ' + event_events[3 * index]["eid"] + '" class="img-fluid"></div></a></div><div class="col-lg-4 col-md-6"><a href="javascript:void(0)" value="' + event_events[3 * index + 1]["eid"] + '"><div class="speaker"><img src="' + event_events[3 * index + 1]["image_path"] + '" alt=" Event ' + event_events[3 * index + 1]["eid"] + '" class="img-fluid"></div></a></div><div class="col-lg-4 col-md-6"><a href="javascript:void(0)" value="' + event_events[3 * index + 2]["eid"] + '"><div class="speaker"><img src="' + event_events[3 * index + 2]["image_path"] + '" alt=" Event ' + event_events[3 * index + 2]["eid"] + '" class="img-fluid"></div></a></div>';	
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
							str = str + '<div class="col-lg-4 col-md-6"><a href="javascript:void(0)" value="' + event_events[3 * index]["eid"] + '"><div class="speaker"><img src="' + event_events[3 * index]["image_path"]+ '" alt=" Event ' + event_events[3 * index]["eid"] + '" class="img-fluid"></div></a></div><div class="col-lg-4 col-md-6"><a href="javascript:void(0)" value="' + event_events[3 * index + 1]["eid"] + '"><div class="speaker"><img src="' + event_events[3 * index + 1]["image_path"] + '" alt=" Event ' + event_events[3 * index + 1]["eid"] + '" class="img-fluid"></div></a></div><div class="col-lg-4 col-md-6"><a href="javascript:void(0)" value="' + event_events[3 * index + 2]["eid"] + '"><div class="speaker"><img src="' + event_events[3 * index + 2]["image_path"] + '" alt=" Event ' + event_events[3 * index + 2]["eid"] + '" class="img-fluid"></div></a></div>';	
							str = str + '</div>'			
							index = index + 1;
							// console.log(str)
						}
						if ((event_events.length) % 3 == 1) {
							str = str + '<div class="row">';
							str = str + '<div class="col-lg-4 col-md-6 offset-md-4"><a href="javascript:void(0)" value="' + event_events[3 * index]["eid"] + '"><div class="speaker"><img src="' + event_events[3 * index]["image_path"]+ '" alt=" Event ' + event_events[3 * index]["eid"] + '" class="img-fluid"></div></a></div>';	
							str = str + '</div>'

						} else if ((event_events.length) % 3 == 2) {
							str = str + '<div class="row">';
							str = str + '<div class="col-lg-4 col-md-6 offset-md-2"><a href="javascript:void(0)" value="' + event_events[3 * index]["eid"] + '"><div class="speaker"><img src="' + event_events[3 * index]["image_path"]+ '" alt=" Event ' + event_events[3 * index]["eid"] + '" class="img-fluid"></div></a></div><div class="col-lg-4 col-md-6"><a href="javascript:void(0)" value="' + event_events[3 * index + 1]["eid"] + '"><div class="speaker"><img src="' + event_events[3 * index + 1]["image_path"] + '" alt=" Event ' + event_events[3 * index + 1]["eid"] + '" class="img-fluid"></div></a></div>';	
							str = str + '</div>'

						}
						$("#events").children("center").append(str2);
							$('#events').html(str);
					}
				}
				//workshops
				if (event_workshops.length == 0) {
					var str = "<p>No events to display.</p>";
					$("#workshops").children("center").append(str);
				} else {
					if ((event_workshops.length) % 3 == 0) {
						var index = 0;
						while (index < (event_workshops.length) / 3) {
							var str = '<a href="javascript:void(0)" value="' + event_workshops[3 * index]["eid"] + '"><div class="card wow fadeInLeft hvr-grow-rotate-right"><img class="img-responsive" src="' + event_workshops[3 * index]["image_path"].slice(4, ) + '"></div></a><a href="javascript:void(0)" value="' + event_workshops[3 * index + 1]["eid"] + '"><div class="card wow fadeInUp hvr-grow"><img class="img-responsive" src="' + event_workshops[3 * index + 1]["image_path"].slice(4, ) + '"></div></a><a href="javascript:void(0)" value="' + event_workshops[3 * index + 2]["eid"] + '"><div class="card wow fadeInRight hvr-grow-rotate-left"><img class="img-responsive" src="' + event_workshops[3 * index + 2]["image_path"].slice(4, ) + '"></div></a>';
							$("#workshops").children("center").append(str);
							index = index + 1;
						}
					} else {
						var index = 0;
						while (index < (event_workshops.length - (event_workshops.length) % 3) / 3) {
							var str = '<a href="javascript:void(0)" value="' + event_workshops[3 * index]["eid"] + '"><div class="card wow fadeInLeft hvr-grow-rotate-right"><img class="img-responsive" src="' + event_workshops[3 * index]["image_path"].slice(4, ) + '"></div></a><a href="javascript:void(0)" value="' + event_workshops[3 * index + 1]["eid"] + '"><div class="card wow fadeInUp hvr-grow"><img class="img-responsive" src="' + event_workshops[3 * index + 1]["image_path"].slice(4, ) + '"></div></a><a href="javascript:void(0)" value="' + event_workshops[3 * index + 2]["eid"] + '"><div class="card wow fadeInRight hvr-grow-rotate-left"><img class="img-responsive" src="' + event_workshops[3 * index + 2]["image_path"].slice(4, ) + '"></div></a>';
							$("#workshops").children("center").append(str);
							index = index + 1;
						}
						if ((event_workshops.length) % 3 == 1) {
							var str2 = '<a href="javascript:void(0)" value="' + event_workshops[3 * index]["eid"] + '"><div class="card wow fadeInLeft hvr-grow-rotate-right"><img class="img-responsive" src="' + event_workshops[3 * index]["image_path"].slice(4, ) + '"></div></a>';
						} else if ((event_workshops.length) % 3 == 2) {
							var str2 = '<a href="javascript:void(0)" value="' + event_workshops[3 * index]["eid"] + '"><div class="card wow fadeInLeft hvr-grow-rotate-right"><img class="img-responsive" src="' + event_workshops[3 * index]["image_path"].slice(4, ) + '"></div></a><a href="javascript:void(0)" value="' + event_workshops[3 * index + 1]["eid"] + '"><div class="card wow fadeInUp hvr-grow"><img class="img-responsive" src="' + event_workshops[3 * index + 1]["image_path"].slice(4, ) + '"></div></a>';
						}
						$("#workshops").children("center").append(str2);
					}
				}
				//exhibitions
				if (event_exhibitions.length == 0) {
					var str = "<p>No events to display.</p>";
					$("#exhibitions").children("center").append(str);
				} else {
					if ((event_exhibitions.length) % 3 == 0) {
						var index = 0;
						while (index < (event_exhibitions.length) / 3) {
							var str = '<a href="javascript:void(0)" value="' + event_exhibitions[3 * index]["eid"] + '"><div class="card wow fadeInLeft hvr-grow-rotate-right"><img class="img-responsive" src="' + event_exhibitions[3 * index]["image_path"].slice(4, ) + '"></div></a><a href="javascript:void(0)" value="' + event_exhibitions[3 * index + 1]["eid"] + '"><div class="card wow fadeInUp hvr-grow"><img class="img-responsive" src="' + event_exhibitions[3 * index + 1]["image_path"].slice(4, ) + '"></div></a><a href="javascript:void(0)" value="' + event_exhibitions[3 * index + 2]["eid"] + '"><div class="card wow fadeInRight hvr-grow-rotate-left"><img class="img-responsive" src="' + event_exhibitions[3 * index + 2]["image_path"].slice(4, ) + '"></div></a>';
							$("#exhibitions").children("center").append(str);
							index = index + 1;
						}
					} else {
						var index = 0;
						while (index < (event_exhibitions.length - (event_exhibitions.length) % 3) / 3) {
							var str = '<a href="javascript:void(0)" value="' + event_exhibitions[3 * index]["eid"] + '"><div class="card wow fadeInLeft hvr-grow-rotate-right"><img class="img-responsive" src="' + event_exhibitions[3 * index]["image_path"].slice(4, ) + '"></div></a><a href="javascript:void(0)" value="' + event_exhibitions[3 * index + 1]["eid"] + '"><div class="card wow fadeInUp hvr-grow"><img class="img-responsive" src="' + event_exhibitions[3 * index + 1]["image_path"].slice(4, ) + '"></div></a><a href="javascript:void(0)" value="' + event_exhibitions[3 * index + 2]["eid"] + '"><div class="card wow fadeInRight hvr-grow-rotate-left"><img class="img-responsive" src="' + event_exhibitions[3 * index + 2]["image_path"].slice(4, ) + '"></div></a>';
							$("#exhibitions").children("center").append(str);
							index = index + 1;
						}
						if ((event_exhibitions.length) % 3 == 1) {
							// var str2 = '<a href="javascript:void(0)" value="' + event_exhibitions[3 * index]["eid"] + '"><div class="card wow fadeInLeft hvr-grow-rotate-right"><img class="img-responsive" src="' + event_exhibitions[3 * index]["image_path"].slice(4, ) + '"></div></a>';
						} else if ((event_exhibitions.length) % 3 == 2) {
							var str2 = '<a href="javascript:void(0)" value="' + event_exhibitions[3 * index]["eid"] + '"><div class="card wow fadeInLeft hvr-grow-rotate-right"><img class="img-responsive" src="' + event_exhibitions[3 * index]["image_path"].slice(4, ) + '"></div></a><a href="javascript:void(0)" value="' + event_exhibitions[3 * index + 1]["eid"] + '"><div class="card wow fadeInUp hvr-grow"><img class="img-responsive" src="' + event_exhibitions[3 * index + 1]["image_path"].slice(4, ) + '"></div></a>';
						}
						$("#exhibitions").children("center").append(str2);
					}
				}
				//cultural
				if (event_cultural.length == 0) {
					var str = "<p>No events to display.</p>";
					$("#cultural").children("center").append(str);
				} else {
					if ((event_cultural.length) % 3 == 0) {
						var index = 0;
						while (index < (event_cultural.length) / 3) {
							var str = '<a href="javascript:void(0)" value="' + event_cultural[3 * index]["eid"] + '"><div class="card wow fadeInLeft hvr-grow-rotate-right"><img class="img-responsive" src="' + event_cultural[3 * index]["image_path"].slice(4, ) + '"></div></a><a href="javascript:void(0)" value="' + event_cultural[3 * index + 1]["eid"] + '"><div class="card wow fadeInUp hvr-grow"><img class="img-responsive" src="' + event_cultural[3 * index + 1]["image_path"].slice(4, ) + '"></div></a><a href="javascript:void(0)" value="' + event_cultural[3 * index + 2]["eid"] + '"><div class="card wow fadeInRight hvr-grow-rotate-left"><img class="img-responsive" src="' + event_cultural[3 * index + 2]["image_path"].slice(4, ) + '"></div></a>';
							$("#cultural").children("center").append(str);
							index = index + 1;
						}
					} else {
						var index = 0;
						while (index < (event_cultural.length - (event_cultural.length) % 3) / 3) {
							var str = '<a href="javascript:void(0)" value="' + event_cultural[3 * index]["eid"] + '"><div class="card wow fadeInLeft hvr-grow-rotate-right"><img class="img-responsive" src="' + event_cultural[3 * index]["image_path"].slice(4, ) + '"></div></a><a href="javascript:void(0)" value="' + event_cultural[3 * index + 1]["eid"] + '"><div class="card wow fadeInUp hvr-grow"><img class="img-responsive" src="' + event_cultural[3 * index + 1]["image_path"].slice(4, ) + '"></div></a><a href="javascript:void(0)" value="' + event_cultural[3 * index + 2]["eid"] + '"><div class="card wow fadeInRight hvr-grow-rotate-left"><img class="img-responsive" src="' + event_cultural[3 * index + 2]["image_path"].slice(4, ) + '"></div></a>';
							$("#cultural").children("center").append(str);
							index = index + 1;
						}
						if ((event_cultural.length) % 3 == 1) {
							var str2 = '<a href="javascript:void(0)" value="' + event_cultural[3 * index]["eid"] + '"><div class="card wow fadeInLeft hvr-grow-rotate-right"><img class="img-responsive" src="' + event_cultural[3 * index]["image_path"].slice(4, ) + '"></div></a>';
						} else if ((event_cultural.length) % 3 == 2) {
							// var str2 = '<a href="javascript:void(0)" value="' + event_cultural[3 * index]["eid"] + '"><div class="card wow fadeInLeft hvr-grow-rotate-right"><img class="img-responsive" src="' + event_cultural[3 * index]["image_path"].slice(4, ) + '"></div></a><a href="javascript:void(0)" value="' + event_cultural[3 * index + 1]["eid"] + '"><div class="card wow fadeInUp hvr-grow"><img class="img-responsive" src="' + event_cultural[3 * index + 1]["image_path"].slice(4, ) + '"></div></a>';
						}
						$("#cultural").children("center").append(str2);
					}
				}
			}
		}
	});
});