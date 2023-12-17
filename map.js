// adding map
var map = L.map('mapID').setView([0, 0], 1);

// adding custom icon
var myIcon = L.icon({
    iconUrl: './International_Space_Station.svg.png',
    iconSize: [50, 32],
    iconAnchor: [25, 16],

});

// initializing the marker with icon
const marker = L.marker([0,0], {icon: myIcon}).addTo(map);


// Gwtting layers of tiles
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright"></a>'
}).addTo(map);



// Getting the lat and log value of positon of ISS from the #WhereISSat API
async function getData (){
    const response = await fetch("https://api.wheretheiss.at/v1/satellites/25544");
    const data = await response.json();
    console.log(data)
    console.log(data.latitude);
    console.log(data.longitude);

    // setting the lat and log pf map
    marker.setLatLng([data.latitude, data.longitude]);

    document.getElementById("lat").textContent = data.latitude;
    document.getElementById("lon").textContent = data.longitude;

}
getData()
// gets the markers data from the iss api