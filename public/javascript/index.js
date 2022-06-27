console.log("index.js");

// // Location Web API //////////////////////////////////////////////////////////////////////////////////////////////
const sectionOne = document.querySelector('.geslacht');
const labelV = document.querySelector('#vrouw');
const labelM = document.querySelector('#man');
const terugButton = document.querySelector('#close-button');
const continentenButtons = document.querySelector('#labelAfrika');

labelV.addEventListener('click', scrollToSection);
labelM.addEventListener('click', scrollToSection);
continentenButtons.addEventListener('click', scrollToMatchButtonSection);
// terugButton.addEventListener('click', scrollToFirstSection);

function scrollToSection() {
	console.log(window.location.href)
	// window.location.hash = 'continenten';
	sectionOne.classList.add('verstop');
}

// function scrollToFirstSection() {
// 	console.log(window.location.href)

// 	window.location.hash = 'continenten';
// }

function scrollToMatchButtonSection() {
	console.log(window.location.href)
	
	window.location.href = `${window.location.href}#matchButtonSection`
}

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

