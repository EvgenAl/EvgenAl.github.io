function init(){var e={zoom:15,zoomControl:!1,scrollwheel:!1,scaleControl:!1,rotateControl:!1,panControl:!1,mapMaker:!1,disableDefaultUI:!1,streetViewControl:!1,signInControl:!1,mapTypeControl:!1,center:new google.maps.LatLng(40.67,(-73.94)),styles:[{stylers:[{saturation:-100},{gamma:.8},{lightness:4},{visibility:"on"}]},{featureType:"landscape.natural",stylers:[{visibility:"on"},{color:"#5dff00"},{gamma:4.97},{lightness:-5},{saturation:100}]}]},o=document.getElementById("map"),n=new google.maps.Map(o,e);infoWindow=new google.maps.InfoWindow;new google.maps.Marker({position:new google.maps.LatLng(40.67,(-73.94)),map:n,title:"Snazzy!",icon:"i/marker-icon.png"});n.addListener("click",function(){n.setOptions({scrollwheel:!0})}),n.addListener("drag",function(){n.setOptions({scrollwheel:!0})}),n.addListener("mouseout",function(){n.setOptions({scrollwheel:!1})});var t=n.getCenter();google.maps.event.addDomListener(window,"resize",function(){n.setCenter(t)})}google.maps.event.addDomListener(window,"load",init);