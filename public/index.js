console.log("index.js");

var label = document.getElementById('Vrouw');

label.addEventListener('click', scrollToSection);

function scrollToSection() {
	console.log(window.location.href)
	
	window.location.href = 
	`${window.location.href}#continentenSection`
}