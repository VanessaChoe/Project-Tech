document.getElementById("ButtonTerug").onclick = function () {
	window.history.back();
};
document.getElementById("ButtonNavUitloggen").onclick = function () {
	location.href = "/";
};

// https://www.youtube.com/watch?v=Zxf1mnP5zcw&t=744s

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