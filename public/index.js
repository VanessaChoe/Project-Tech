console.log("index.js");

// // Location Web API //////////////////////////////////////////////////////////////////////////////////////////////
const sectionOne = document.querySelector('.geslacht');
const labelV = document.querySelector('#vrouw');
const labelM = document.querySelector('#man');
const terugButton = document.querySelector('#close-button');

labelV.addEventListener('click', scrollToSection);
labelM.addEventListener('click', scrollToSection);
terugButton.addEventListener('click', scrollToFirstSection);

function scrollToSection() {
	console.log(window.location.href)
	// window.location.hash = 'continenten';
	sectionOne.classList.add('verstop');
}

function scrollToFirstSection() {
	console.log(window.location.href)

	window.location.hash = 'continenten';
}

async function WerkendeAPI() {
	const response = await fetch (
		"https://maps.googleapis.com/maps/api/js?key= <%= process.enc.API_KEY %> &callback=initMap"
	)

}
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////