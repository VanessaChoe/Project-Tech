console.log("index.js");

// // Location Web API //////////////////////////////////////////////////////////////////////////////////////////////
const labelV = document.querySelector('#vrouw');
const labelM = document.querySelector('#man');

const matchButton = document.querySelector('#matchButtonSection');

labelV.addEventListener('click', scrollToContinentenSection);
labelM.addEventListener('click', scrollToContinentenSection);

function scrollToContinentenSection() {
	console.log(window.location.href)
	
	window.location.href = `${window.location.href}#continentenH1`
}

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

