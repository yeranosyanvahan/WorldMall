var mymap = L.map('mapid').setView([40.1446188,45.3207393], 12);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: "pk.eyJ1IjoieWVyYW5vc3lhbnZhaGFuIiwiYSI6ImNrcWtoaTZnZTA5NGcycHBtbjN4eTJ3YXgifQ.gFBS9HMOrCxxDZL9VEV4iw"
}).addTo(mymap);
$.getJSON('./cities.json',function(data){
	data.map(function(city)
	{
		var polygon=L.polygon(city['location']['coordinates'][0].map(function(val, index){return [val[1], val[0]]}))
		polygon.bindPopup(city['name']);
		polygon.addTo(mymap);
	})

});
var marker=L.marker([40.144852,45.298571]).addTo(mymap);
marker.bindPopup("<b>MIOM LLC</b>").openPopup();
