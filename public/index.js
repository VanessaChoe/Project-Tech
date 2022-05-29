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

	window.location.hash     = 'continentenSection';
}

function scrollToFirstSection() {
	console.log(window.location.href)

	window.location.hash     = 'keuzeSection';
}

/* //Popup https://sabe.io/tutorials/how-to-create-modal-popup-box/////////////////////////////////////////// */

const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);