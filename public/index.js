console.log("index.js");

// var NieuweTravelBuddyButton = document.querySelector('#NieuweTravelBuddyButton');

// var keuzeSection = document.querySelector('#keuzeSection');
// var geslachtSection = document.querySelector('#geslachtSection');

// function verderNaarGeslacht() {
//     console.log("verder naar filteren op geslacht");
//     keuzeSection.src = geslachtSection.src;
// }

// NieuweTravelBuddyButton.addEventListener('click' , verderNaarGeslacht) ;

// document.getElementById("NieuweTravelBuddyButton").onclick = function () {
//     location.href = "#geslachtSection";
// };

var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}