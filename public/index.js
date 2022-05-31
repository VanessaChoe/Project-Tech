console.log("index.js");

// // Location Web API //////////////////////////////////////////////////////////////////////////////////////////////
var labelV = document.getElementById('vrouw');
var labelM = document.getElementById('man');
var terugButton = document.getElementById('close-button');

labelV.addEventListener('click', scrollToSection);
labelM.addEventListener('click', scrollToSection);
terugButton.addEventListener('click', scrollToFirstSection);

function scrollToSection() {
	console.log(window.location.href)

	window.location.hash     = 'continenten';
}

function scrollToFirstSection() {
	console.log(window.location.href)

	window.location.hash     = 'continenten';
}

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////