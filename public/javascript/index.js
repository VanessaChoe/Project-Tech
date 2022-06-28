console.log("index.js");

// // Location Web API //////////////////////////////////////////////////////////////////////////////////////////////
const sectionOne = document.querySelector('.geslacht');

const labelV = document.querySelector('#vrouw');
const labelM = document.querySelector('#man');

const terugButton = document.querySelector('#close-button');

const continentenButtons = document.querySelector('#labelAfrika');
const labelZuidAmerika = document.querySelector('#labelZuid-Amerika');
const labelAzië = document.querySelector('#labelAzië');
const labelEuropa = document.querySelector('#labelEuropa');
const labelAntartica = document.querySelector('#labelAntartica');
const labelNoordAmerika = document.querySelector('#labelNoord-Amerika');
const labelNoordOceanie = document.querySelector('#labelNoord-Oceanie');

labelV.addEventListener('click', scrollToSection);
labelM.addEventListener('click', scrollToSection);

continentenButtons.addEventListener('click', scrollToMatchButtonSection);
labelZuidAmerika.addEventListener('click', scrollToMatchButtonSection);
labelAzië.addEventListener('click', scrollToMatchButtonSection);
labelEuropa.addEventListener('click', scrollToMatchButtonSection);
labelAntartica.addEventListener('click', scrollToMatchButtonSection);
labelNoordAmerika.addEventListener('click', scrollToMatchButtonSection);
labelNoordOceanie.addEventListener('click', scrollToMatchButtonSection);
// terugButton.addEventListener('click', scrollToFirstSection);

function scrollToSection() {
	console.log(window.location.href)
	// window.location.hash = 'continenten';
	sectionOne.classList.add('verstop');
}

function scrollToMatchButtonSection() {
	console.log(window.location.href)
	
	window.location.href = `${window.location.href}#matchButtonSection`
}

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

