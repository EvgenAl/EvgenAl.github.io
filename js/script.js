
           // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 11,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(40.6700, -73.9400), // New York

                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: [{"featureType":"administrative.country","elementType":"geometry","stylers":[{"visibility":"simplified"},{"hue":"#ff0000"}]}]
                  };

                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('map');

                // Create the Google Map using our element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);

                // Let's also add a marker while we're at it
                var marker = new google.maps.Marker({
                	position: new google.maps.LatLng(40.6700, -73.9400),
                	map: map,
                	title: 'Snazzy!'
                });// Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 16,
                    streetViewControl:false,
                    scrollwheel:false,
                    mapTypeControl:false,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(59.949532, 30.294120),

                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: [{"featureType":"administrative.country","elementType":"geometry","stylers":[{"visibility":"simplified"},{"hue":"#ff0000"}]}]
                  };

                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('map');

                // Create the Google Map using our element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);

                // Let's also add a marker while we're at it
                var marker = new google.maps.Marker({
                	position: new google.maps.LatLng(59.949532, 30.294120),
                	map: map,
                	title: 'Проспект Добролюбова, 16А'
                });

                map.addListener('click', function() {
                	map.setOptions({
                		scrollwheel: true
                	});
                });

                    // Disable scroll zoom when mouse leave map
                    map.addListener('mouseout', function() {
                    	map.setOptions({
                    		scrollwheel: false
                    	});
                    });

                        // Enable scroll zoom after drag on map
                        map.addListener('drag', function() {
                        	map.setOptions({
                        		scrollwheel: true
                        	});
                        });