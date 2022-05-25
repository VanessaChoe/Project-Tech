document.getElementById("ButtonTerug").onclick = function () {
	window.history.back();
};
document.getElementById("ButtonNavUitloggen").onclick = function () {
	location.href = "/";
};

function initMap(){
	var options = {
		zoom:8,
		center: {lat:52.361966,lng:4.907146}
	}

	var map = new google.maps.Map(document.getElementById('map'), options);

	var marker = new google.maps.Marker({
		position: {lat:52.361966,lng:4.907146},
		map: map,
		icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
	});
}