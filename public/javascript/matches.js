/* eslint-disable */
console.log("matches.js");

// // Location Web API //History Web API////////////////////////////////////////////////////////////////////////////////////////////
const terugButton = document.getElementById("buttonTerug");
document.getElementById("buttonTerug").addEventListener("click", () => {
  history.back();
});

const ButtonFavorieten = document.getElementById("favorietenButton");
document.getElementById("favorietenButton").onclick = function () {
  location.href = "/favorites";
};

// // Google Maps Javascript API////////////////////////////////////////////////////////////////////////////////////////////
// https://www.youtube.com/watch?v=Zxf1mnP5zcw&t=744s
// https://developers.google.com/maps/documentation/javascript

const API_KEY = process.env.API_KEY;

function initMap() {
  const options = {
    zoom: 10,
    center: { lat: 52.361966, lng: 4.907146 }, // cooördinaten van hva weesperplein
  };

  const map = new google.maps.Map(document.getElementById("map"), options);

  const marker = new google.maps.Marker({
    // Google maps Vlaggetje op de kaart
    position: { lat: 52.361966, lng: 4.907146 }, // cooördinaten van hva weesperplein
    map: map,
    icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png" // Google maps Vlaggetje op de kaart
});
}
