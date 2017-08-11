
(function() {

	window.onload = function() {

		// Creating a new map
			map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 32.786692, lng: -117.149893},
        zoom: 11,
				scrollwheel: false,
			});

			infoWindow = new google.maps.InfoWindow;


		// Creating the JSON data
		var json = [
		    {
		        "city": "Kearny Mesa",
		        "lat": 32.819694,
		        "lng": -117.150175,
            "address": "8055 Armour St. #C, San Diego, CA 92111",
            "phone":"Phone: +1 (858) 874-6760",
            "hours":"Hours: Sunday - Thursday 11am - 10pm </br> Friday - Saturday 11am - 11pm",
		    },
		    {
		        "city": "North Park",
		        "lat": 32.748729,
		        "lng": -117.129378,
            "address": "3030 University Ave, San Diego, CA 92104",
            "phone":"Phone: +1 (619) 497-0697",
            "hours":"Hours: Monday - Thursday 11am - 11pm </br> Friday - Saturday 11am - 12pm </br> Sunday 12pm - 10pm",
		    },
		    {
		        "city": "Clairemont Mesa",
		        "lat": 32.830753,
		        "lng": -117.128270,
            "address": "9353 Clairemont Mesa Blvd. #M, San Diego, CA 92123",
            "phone":"Phone: +1 (858) 565-4280",
            "hours":"Hours: Monday - Friday 10am - 9pm </br> Saturday - Sunday 11am - 9pm",
            "link": "https://goo.gl/maps/G7CA2i2MNdS2",
		    }
		]


var contentString = "hello world";
		// Creating a global infoWindow object that will be reused by all markers
		/* var infowindow = new google.maps.InfoWindow({
	    content: contentString,
			maxWidth: 500
	  }); */

		var infoWindow = new google.maps.InfoWindow();

		// Looping through the JSON data
		for (var i = 0, length = json.length; i < length; i++) {

			var data = json[i],
				latLng = new google.maps.LatLng(data.lat, data.lng);



				// Creating a marker and putting it on the map
				var marker = new google.maps.Marker({
					position: latLng,
					map: map,
					title: city
				});


			// Creating a closure to retain the correct data, notice how I pass the current data in the loop into the closure (marker, data)
			(function(marker, data) {

				// Attaching a click event to the current marker
				google.maps.event.addListener(marker, "click", function(e) {
					if (data.city == "San Diego, CA") {
						infoWindow.setContent("San Diego");
						infoWindow.open(map, marker);
					}
          else{
					infoWindow.setContent('<div class="info-box"><h4>' + data.city + '</h4><a href="'+ data.link + '">' + data.address + '</a></br>' + data.phone + " </br>" + data.hours);
					infoWindow.open(map, marker, contentString);
        }
				});

			})(marker, data);

		}
		// Construct the circle for each value in citymap.
		// Note: We scale the area of the circle based on the population.
		for (var city in citymap) {

			console.log(city);


		}

	}

})();
