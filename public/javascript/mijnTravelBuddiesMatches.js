console.log("mijnTravelBuddiesMatches.js");

// // Location Web API //History Web API////////////////////////////////////////////////////////////////////////////////////////////
document.document.querySelector("ButtonTerug").onclick = function () {
	window.history.back();
};
document.document.querySelector("ButtonNavUitloggen").onclick = function () {
	location.href = "/";
};

// // Like button //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function liken() {
	var image = document.querySelector('emptyHeart');
	if (image.src.match("images/roodHartje.png")) {
		image.src = "images/hartje.png";
	}
	else {
		image.src = "images/roodHartje.png";
	}
}

// // Google Maps Javascript API////////////////////////////////////////////////////////////////////////////////////////////
// https://www.youtube.com/watch?v=Zxf1mnP5zcw&t=744s
// https://developers.google.com/maps/documentation/javascript
function initMap(){
	const options = {
		zoom:10,
		center: {lat:52.361966,lng:4.907146} // cooördinaten van hva weesperplein
	}

	const map = new google.maps.Map(document.getElementById('map'), options);

	const marker = new google.maps.Marker({ // Google maps Vlaggetje op de kaart
		position: {lat:52.361966,lng:4.907146}, // cooördinaten van hva weesperplein
		map: map,
		icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png' // Google maps Vlaggetje op de kaart
	});
}