/* eslint-disable */
console.log("index.js");

// // Location Web API //////////////////////////////////////////////////////////////////////////////////////////////
const vrouw = document.querySelector("#vrouw");
const man = document.querySelector("#man");

const Afrika = document.querySelector("#Afrika");
const ZuidAmerika = document.querySelector("#Zuid-Amerika");
const Azie = document.querySelector("#Azie");
const Europa = document.querySelector("#Europa");
const NoordAmerika = document.querySelector("#Noord-Amerika");
const Oceanie = document.querySelector("#Oceanie");

const matchButton = document.querySelector("#matchButtonSection");

Afrika.addEventListener("click", scrollToMatchButton);
ZuidAmerika.addEventListener("click", scrollToMatchButton);
Azie.addEventListener("click", scrollToMatchButton);
Europa.addEventListener("click", scrollToMatchButton);
NoordAmerika.addEventListener("click", scrollToMatchButton);
Oceanie.addEventListener("click", scrollToMatchButton);

vrouw.addEventListener("click", scrollToContinentenSection);
man.addEventListener("click", scrollToContinentenSection);

function scrollToContinentenSection() {
  console.log(window.location.href);

  window.location.hash = "#continenten";
}

function scrollToMatchButton() {
  console.log(window.location.href);

  window.location.hash = "#matchButtonSection";
}
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
